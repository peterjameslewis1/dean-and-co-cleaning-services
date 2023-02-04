import styles from '../styles/home.module.css'
import img from '../public/img/hero-image.jpg'

export default function HeroImage() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <img src={img.src} className={styles.img} />
            </div>
            <div className={styles.textContainer} >
                <h1 className={styles.title}>Let us do the cleaning.</h1>
                <p className={styles.subtitle}>You deserve a clean environment and thats out specialty.</p>
            </div>
        </section>
    )
}
