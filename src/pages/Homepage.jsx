import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./Homepage.module.css";

export default function Homepage() {
    return <main className={styles.homepage}>
        <Nav/>
        <section>
            <h1>Traveling around the world? <br/> MapApp will help you</h1>
            <h2>The application allows you to leave notes about cities so that you can remember your great (imaginary) travels.</h2>
            <Link to="app" className="btn-link">Start</Link>
        </section>
    </main>
}