import { useState } from "react"
import Nav from "../components/Nav";
import styles from "./Login.module.css";

export default function Login() {
    const [email, setEmail] = useState("dyeus@something.pater");
    const [password, setPassword] = useState("someshit");

    return <main className={styles.login}>
        <Nav/>
        <form>
            <div>
                <label>Email address</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button className="btn">Login</button>
        </form>
    </main> 
}