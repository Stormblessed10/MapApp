import { useEffect, useReducer } from "react"
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import Message from "./Message";
import Loader from "./Loader";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useCities } from "../context/CitiesContext";
import { useNavigate } from "react-router";

const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const initState = {
    cityName: "",
    country: "",
    date: new Date(),
    notes: "",
    isLoadingGeo: false,
    error: null
};

function reducer(state, action) {
    switch(action.type) {
        case "setCityName":
            return {...state, cityName: action.payload};
        case "setCountry":
            return {...state, country: action.payload};
        case "setVisitDate":
            return {...state, date: action.payload};
        case "setNote":
            return {...state, notes: action.payload};
        case "setIsLoadingGeo":
            return {...state, isLoadingGeo: !state.isLoadingGeo};
        case "setError":
            return {...state, error: action.payload};
        default:
            return "Random error"
    }
}

export default function Form() {
    const [{cityName, country, date, notes, isLoadingGeo, error}, dispatch] = useReducer(reducer, initState);
    const {lat, lng} = useUrlPosition();
    const {addCity} = useCities();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!cityName || !date) return;

        const newCity = {cityName, country, date, notes, position: { lat, lng }};
        addCity(newCity);
        navigate("/app");
    }

    useEffect(() => {
        async function fetching() {
            try {
                dispatch({type: "setIsLoadingGeo"});
                const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();

                if (!data.countryName) throw new Error('Click on a country')
                
                dispatch({type: "setError", payload: null});
                dispatch({type: "setCityName", payload: data.city || data.locality});
                dispatch({type: "setCountry", payload: data.countryName});
            } catch(err) {
                dispatch({type: "setError", payload: err.message});
            } finally {
                dispatch({type: "setIsLoadingGeo"});
            }
        }
        fetching();
    }, [lat, lng]);

    if (isLoadingGeo) return <Loader/>;

    if (error) return <Message message={error}/>;

    return <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles["form-wrapper"]}>
                <label>City name</label>
                <input type="text" onChange={(e) => dispatch({type: "setCityName", payload: e.target.value})} value={cityName}/>
                <span className={styles.country}>{country}</span>
            </div>
            <div className={styles["form-wrapper"]}>
                <label>Visit date</label>
                <DatePicker selected={date} onChange={date => dispatch({type: "setVisitDate", payload: date})} dateFormat="dd/MM/yyyy"/>
            </div>
            <div className={styles["form-wrapper"]}>
                <label>Some notess about your visit to {cityName}</label>
                <textarea rows={3} onChange={(e) => dispatch({type: "setNote", payload: e.target.value})} value={notes}/>
            </div>
            <div className={styles.btns}>
                <Button type="primary">ADD</Button>
                <BackButton/>
            </div>
        </form> 
}