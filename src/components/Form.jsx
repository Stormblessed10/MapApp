import { useState } from "react"
import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function Form() {
    const navigate = useNavigate();
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
                <Button onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }} type="back">&larr; BACK</Button>
            </div>
        </form> 
}