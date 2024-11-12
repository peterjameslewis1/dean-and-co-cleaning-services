import Image from 'next/image'
import oven from '../public/img/other-logos/oven.png'
import mop from '../public/img/other-logos/mop.png'
import bucket from '../public/img/other-logos/cleaning-bucket.png'
import styles from '../styles/icon-cards.module.css'

export default function Icons() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={bucket.src} alt="Cleaning supplies" />
                </div>
                <h3>Domestic / Residential</h3>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={oven.src} alt="Iron icon" />
                </div>
                <h3>Oven Cleaning</h3>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={mop.src} alt="cleaning mop icon" />
                </div>
                <h3>Office / Commercial</h3>
            </div>
        </div>
    )
}
