import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    return <section className={styles.map} onClick={() => navigate("form")}>

    </section>
}