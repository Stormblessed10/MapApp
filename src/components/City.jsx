import styles from "./City.module.css";

export default function City() {
    return <div className={styles.city}>
        <div className={styles.cityItem}>
            <h3></h3>
            <p><span></span></p>
        </div>
        <div className={styles.cityItem}>
            <h3>YOU WENT TO</h3>
            <p></p>
        </div>
        <div className={styles.cityItem}>
            <h3>YOUR NOTE</h3>
            <p></p>
        </div>
        <div className={styles.cityItem}>
            <h3>LEARN MORE</h3>
            <a href=""></a>
        </div>
        <button>&larr; Back</button>
    </div>
}