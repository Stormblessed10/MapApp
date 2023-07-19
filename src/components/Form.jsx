import { useState } from "react"
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";

export default function Form() {
    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [visitDate, setVisitDate] = useState("");
    const [note, setNote] = useState("");

    return <form className={styles.form}>
            <div>
                <label>City name</label>
                <input type="text" onChange={(e) => setCityName(e.target.value)} value={cityName}/>
                <span>{country}</span>
            </div>
            <div>
                <label>Visit date</label>
                <input type="text" onChange={(e) => setVisitDate(e.target.value)} value={visitDate}/>
            </div>
            <div>
                <label>Some notes about your trip</label>
                <textarea rows={3} onChange={(e) => setNote(e.target.value)} value={note}/>
            </div>
            <div className={styles.btns}>
                <Button type="primary">ADD</Button>
                <BackButton/>
            </div>
        </form> 
}