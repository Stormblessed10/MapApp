import { createContext, useState, useEffect, useContext } from "react";

const URL = "http://localhost:9000";

const CitiesContext = createContext();

export function CitiesProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false);
    const [cityList, setCityList] = useState([]);
    const [currentCity, setCurrentCity] = useState({}); 
  
    useEffect(() => {
      async function getData() {
          try {
              setIsLoading(true);
              const res = await fetch(`${URL}/cities`);
              const data = await res.json();
              setCityList(data);
              setIsLoading(false);
          } catch(err) {
              console.error(err);
          }
      }
      getData();
  }, []);

  async function getCity(id) {
    try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
        setIsLoading(false);
    } catch(err) {
        console.error(err);
    }
  }

  return <CitiesContext.Provider value={{isLoading, cityList, currentCity, getCity}}>{children}</CitiesContext.Provider>
}

export function useCities() {
    const value = useContext(CitiesContext);
    if (value === undefined) throw new Error("Context was used outside the provider")
    return value;
}