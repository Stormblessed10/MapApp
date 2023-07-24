import { createContext, useEffect, useContext, useReducer, useCallback } from "react";

const URL = "http://localhost:8000";

const CitiesContext = createContext();

const initialState = {
    isLoading: false,
    cityList: [],
    currentCity: {},
    error: ""
};

// Этот error в приложении не задействован, в следующих проектах пригодится такая практика, а в этом просто, чтобы было

function reducer(state, action) {
    switch(action.type) {
        case "loading":
            return {...state, isLoading: true};
        case "cities/loaded":
            return {...state, isLoading: false, cityList: action.payload};
        case "city/loaded":
            return {...state, isLoading: false, currentCity: action.payload};
        case "city/added":
            return {...state, isLoading: false, cityList: [...state.cityList, action.payload]};
        case "city/deleted":
            return {...state, isLoading: false, cityList: state.cityList.filter(city => city.id !== action.payload)};
        case "rejected":
            return {...state, isLoading: false, error: action.payload};
        default:
            throw new Error("Some erroro");
    }
}

export function CitiesProvider({ children }) {
    const [{isLoading, cityList, currentCity}, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      async function getCities() {
          dispatch({type: "loading"});
          try {
              const res = await fetch(`${URL}/cities`);
              const data = await res.json();
              dispatch({type: "cities/loaded", payload: data});
          } catch(err) {
            dispatch({type: "rejected", payload: err});
          }
      }
      getCities();
  }, []);

  const getCity = useCallback(async function getCity(id) {
    if (currentCity.id === +id) return;

    dispatch({type: "loading"});
    try {
        const res = await fetch(`${URL}/cities/${id}`);
        const data = await res.json();
        dispatch({type: "city/loaded", payload: data});
    } catch(err) {
        dispatch({type: "rejected", payload: err});
    }
  }, [currentCity.id]);

  async function addCity(newCity) {
    dispatch({type: "loading"});
    try {
        const res = await fetch(`${URL}/cities`, {
            method: "POST",
            body: JSON.stringify(newCity),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        dispatch({type: "city/added", payload: data});
    } catch(err) {
        dispatch({type: "rejected", payload: err});
    }
  }

  async function deleteCity(id) {
    dispatch({type: "loading"});
    try {
        await fetch(`${URL}/cities/${id}`, {
            method: "DELETE",
        });
        dispatch({type: "city/deleted", payload: id})
    } catch(err) {
        dispatch({type: "rejected", payload: err});
    }
  }

  return <CitiesContext.Provider value={{addCity, isLoading, cityList, currentCity, getCity, deleteCity}}>{children}</CitiesContext.Provider>
}

export function useCities() {
    const value = useContext(CitiesContext);
    if (value === undefined) throw new Error("Context was used outside the provider")
    return value;
}