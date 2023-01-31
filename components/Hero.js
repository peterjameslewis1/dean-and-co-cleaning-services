import styles from '../styles/Home.module.css'
import img from '../public/img/hero-img.jpg'

export default function Hero({ title, subtitle, imageUrl, client }) {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <img src={img.src} className={styles.img} />
            </div>
            <div className={styles.textContainer} >
                <h1 className={styles.title}>Title</h1>
                <p className={styles.subtitle}>Subtitle</p>
            </div>
        </section>
    )
}
