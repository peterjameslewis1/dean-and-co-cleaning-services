import styles from '../styles/Home.module.css'
import parseImage from '../utils/parseImage'




export default function Hero({ title, subtitle, imageUrl, client }) {

    const src = parseImage(client, imageUrl).url()
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <img src={src} className={styles.img} />
            </div>
            <div className={styles.textContainer} >
                <h1 className={styles.title}>Title</h1>
                <p className={styles.subtitle}>Subtitle</p>
            </div>
        </section>
    )
}
