import Image from 'next/image'
import iron from '../public/img/iron.png'
import mop from '../public/img/mop.png'
import bucket from '../public/img/cleaning-bucket.png'
import styles from '../styles/icon-cards.module.css'

export default function Icons() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={bucket.src} alt="Cleaning supplies" />
                </div>
                <h3>House Cleaning</h3>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={iron.src} alt="Iron icon" />
                </div>
                <h3>Ironing</h3>
            </div>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={mop.src} alt="cleaning mop icon" />
                </div>
                <h3>Office Cleaning</h3>
            </div>
        </div>
    )
}
