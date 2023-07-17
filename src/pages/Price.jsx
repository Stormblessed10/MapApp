import Nav from "../components/Nav";
import styles from "./Price.module.css";

export default function Price() {
    return <main className={styles.price}>
        <Nav/>
        <section>
            <div>
                <h2>Simple pricing. <br/> Just $9/month.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>
            </div>
            <img src="img-2.jpg" alt="price"/>
        </section>
    </main>
}