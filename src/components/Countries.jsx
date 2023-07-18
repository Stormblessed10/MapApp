import styles from "./Countries.module.css";
import Loader from "./Loader";
import Message from "./Message";

export default function Countries({ isLoading, cityList }) {
    if (isLoading) return <Loader/>;

    if (!cityList.length) {
        return <Message message="It's empty here..."/>;
    }

    const countries = cityList.reduce((acc, cur) =>{
        if (!acc.map(el => el.country).includes(cur.country)) return [...acc, {country: cur.country, emoji: cur.emoji, id: cur.id}];
        return acc;
    }, []);

    return <ul className={styles.countries}>
        {countries.map(country => <li key={country.id}><span className={styles.abbrev}>{country.emoji}</span><span className={styles.name}>{country.country}</span></li>)}
    </ul>
}