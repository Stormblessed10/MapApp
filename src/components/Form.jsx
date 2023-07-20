import { useEffect, useReducer, useState } from "react"
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../Hooks/useUrlPosition";

const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const initState = {
    cityName: "",
    country: "",
    visitDate: new Date(),
    note: "",
    isLoadingGeo: false
};
function reducer(state, action) {
    switch(action.type) {
        case "setCityName":
            return {...state, cityName: action.payload}
        case "setCountry":
            return {...state, country: action.payload}
        case "setVisitDate":
            return {...state, visitDate: action.payload}
        case "setNote":
            return {...state, note: action.payload}
        case "setIsLoadingGeo":
            return {...state, isLoadingGeo: !state.isLoadingGeo}
    }
}

export default function Form() {
    const [{cityName, country, visitDate, note, isLoadingGeo}, dispatch] = useReducer(reducer, initState);
    const {lat, lng} = useUrlPosition();

    useEffect(() => {
        async function fetching() {
            try {
                dispatch({type: "setIsLoadingGeo"});
                const res = await fetch(`${URL}?latitude=${lat}&longitude=${lng}`);
                const data = await res.json();
                dispatch({type: "setCityName", payload: data.city || data.locality});
                dispatch({type: "setIsLoadingGeo", payload: data.countryName});
            } catch(err) {
                console.error(err);
            } finally {
                dispatch({type: "setIsLoadingGeo"});
            }
        }
        fetching();
    }, [lat, lng])

    return <form className={styles.form}>
            <div>
                <label>City name</label>
                <input type="text" onChange={(e) => dispatch({type: "setCityName", payload: e.target.value})} value={cityName}/>
                <span>{country}</span>
            </div>
            <div>
                <label>Visit date</label>
                <input type="text" onChange={(e) => dispatch({type: "setVisitDate", payload: e.target.value})} value={visitDate}/>
            </div>
            <div>
                <label>Some notes about your visit to {cityName}</label>
                <textarea rows={3} onChange={(e) => dispatch({type: "setNote", payload: e.target.value})} value={note}/>
            </div>
            <div className={styles.btns}>
                <Button type="primary">ADD</Button>
                <BackButton/>
            </div>
        </form> 
}