import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo.jsx";

export default function Nav() {
    return <nav className={styles.nav}>
        <Logo/>
        <ul>
            <li><NavLink to="/price">Price</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink className="btn-link" to="/">LOGIN</NavLink></li>
        </ul>
    </nav>
}