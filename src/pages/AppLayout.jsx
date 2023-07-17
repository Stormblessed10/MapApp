import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css"

export default function AppLayout() {
    return <main className={styles.appLayout}>
        <Sidebar/>
        <Map/>
    </main> 
}