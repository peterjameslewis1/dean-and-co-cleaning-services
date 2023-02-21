import styles from '../styles/reviews.module.css'

export default function Reviews() {
    return (
        <div className={styles.reviewsContainer}>
            <h2 className={styles.title}>Happy Clients</h2>
            <div className={styles.reviews}>
                <div className={styles.review}>
                    <h3>Sean S</h3>
                    <p>
                        My office looks remarkable, week in and week out. Dean & Co cleaners are superb and trustworthy. We've recommended them to friends, and every time they are satisfied.                    </p>
                </div>
                <div className={styles.review}>
                    <h3>Danielle M</h3>
                    <p>
                        My husband and I are very satisfied customers. Our home looks lovely, and the cleaner is always willing to accommodate special requests.                    </p>
                </div>
            </div>
        </div>
    )
}
