import styles from '../styles/booking.module.css'
import Form from './form'

export default function Booking() {
    return (
        <div className={styles.booking} id="booking">
            <div className={styles.bookingContent}>
                <div className={styles.bookingText}>
                    <h2>Request Quote</h2>
                    <p>We love to clean, and it shows. Tell us about your cleaning needs, and we'll send you an estimate.</p>
                </div>
                <Form
                    confirmationMessage="Thank you for getting in touch. Your message has been sent!"
                />
            </div>
        </div>
    )
}
