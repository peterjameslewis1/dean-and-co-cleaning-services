import styles from '../styles/Home.module.css'
import img from '../public/img/other-logos/hero-image.jpg'
import ecoFriendlyBadge from '../public/img/other-logos/eco-friendly.png'

export default function HeroImage() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroImage}>
                <img src={img.src} className={styles.img} />
            </div>
            <div className={styles.textContainer} >
                <h1 className={styles.title}>Environmentally responsible cleaning.</h1>
            </div>
            <div className={styles.ecoFriendlyBadgeContainer}>
                <img className={styles.ecoFriendlyBadge} src={ecoFriendlyBadge.src} alt="Eco friendly badge" />
            </div>
        </div>
    )
}
