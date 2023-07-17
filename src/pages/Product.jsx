import Nav from "../components/Nav";
import styles from "./Product.module.css";

export default function Product() {
    return <main className={styles.product}>
        <Nav/>
        <section>
            <img src="img-1.jpg" alt="product"/>
            <div>
                <h2>About WorldWide</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>
            </div>
        </section>
    </main>
}