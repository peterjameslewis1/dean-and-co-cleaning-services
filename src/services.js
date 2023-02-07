import styles from '../styles/Services.module.css'
export default function Services() {
    return (
        <div className={styles.servicesContainer}>
            <h2>Our Services</h2>
            <div className={styles.servicesText}>
                <p>We serve both residential and commercial clients,
                    bringing cleanliness to every space.
                    Our specialty is Pre & Post tenancy cleans, ensuring
                    every inch is cleaned & presentable for your next tenant!
                    We can also clean your communal areas in your
                    business, keeping your hallways, restrooms, canteens &
                    reception areas in order.</p>

                <h3>Need a hand at home?</h3>

                <p>
                    Our friendly staff can help you clean your environment,
                    prepare your space for visitors, clean up after
                    celebrations, whatever the situation you can rely on
                    Dean & Co. Cleaners
                    We promise that our cleaners are reliable and
                    hardworking, for a mutual experience of respect and
                    satisfaction.</p>
            </div>
            <a href="#booking" className={styles.btn}>Book Now</a>
        </div>
    )
}
