import styles from '../styles/Home.module.css'
import parseImage from '../utils/parseImage'




export default function Hero({ title, subtitle, imageUrl, client }) {

    const src = parseImage(client, imageUrl).url()
    return (
        <section className={styles.heroContainer}>
            <img src={src} className={styles.heroImage} />
            <div className={styles.textContainer} >
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <input className={styles.heroSearch} type="search" placeholder="Search for restaurant, cuisine or a dish" />
            </div>
        </section>
    )
}
