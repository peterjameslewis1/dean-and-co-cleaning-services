import styles from '../styles/Services.module.css'

export default function Services() {
    return (
        <div className={styles.servicesContainer}>
            <h2>Our services</h2>
            <h3>We only use Eco-friendly products, no toxic chemicals!</h3>
            <div className={styles.servicesText}>
                <p>We serve both residential and commercial clients,
                    bringing cleanliness to every space.
                    Our specialty is Pre & Post tenancy cleans, ensuring
                    every inch is cleaned & presentable for your next tenant!
                </p>
                <p>
                    We can also clean your communal areas in your
                    business, keeping your hallways, restrooms, canteens &
                    reception areas in order.
                </p>

                <h3>Need a hand at home?</h3>

                <p>
                    Our friendly staff can help you clean your environment,
                    prepare your space for visitors, clean up after
                    celebrations, whatever the situation you can rely on
                    Dean & Co. Cleaning Services Ltd.
                </p>
                <p>
                    We promise that our cleaners are reliable and
                    hardworking, for a mutual experience of respect and
                    satisfaction.
                </p>
            </div>
            <a href="#booking" className={styles.btn}>Request Quote</a>
        </div>
    )
}
