import { Link } from "react-router-dom";
import styles from "./Cities.module.css";
import Loader from "./Loader";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

export default function Cities() {
    const {isLoading, cityList} = useCities();

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
        return <li key={city.id}><Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}><span>{city.emoji}</span><h3>{city.cityName}</h3><time>({formatedDate(city.date)})</time><button>×</button></Link></li>
    })} </ul>
}