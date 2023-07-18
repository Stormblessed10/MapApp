import { NavLink } from "react-router-dom";
import styles from "./Cities.module.css";
import Loader from "./Loader";

export default function Cities({ isLoading, cityList }) {
    if (isLoading) return <Loader/>

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