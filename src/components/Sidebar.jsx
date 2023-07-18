import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Message from "./Message";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
    return <aside className={styles.sidebar}>
        <Logo/>
        <nav>
            <ul>
                <li><NavLink to="cities">Cities</NavLink></li>
                <li><NavLink to="countries">Countries</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
        <Message/>
    </aside>
}