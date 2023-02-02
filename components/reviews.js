import styles from '../styles/reviews.module.css'

export default function Reviews() {
    return (
        <div className={styles.reviews}>
            <div className={styles.review}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lorem nec orci blandit, vel.
                </p>
            </div>
            <div className={styles.review}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus lorem nec orci blandit, vel.
                </p>
            </div>
            <div className={styles.review}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. , vel.
                </p>
            </div>
        </div>
    )
}
