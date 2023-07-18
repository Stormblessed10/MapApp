import { NavLink } from "react-router-dom";
import styles from "./Cities.module.css";
import Loader from "./Loader";
import Message from "./Message";

export default function Cities({ isLoading, cityList }) {
    if (isLoading) return <Loader/>

    if (!cityList.length) return <Message message="You either didn't visit any city, or didn't mark it. Fix it."/>

    function formatedDate(date) {
        return new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date(date))
    }

    return <ul className={styles.cities}>
        {cityList.map((city) => {
        return <li key={city.id}><NavLink to="/"><span>{city.emoji}</span><h3>{city.cityName}</h3><time>({formatedDate(city.date)})</time><button>×</button></NavLink></li>
        })} </ul>
}