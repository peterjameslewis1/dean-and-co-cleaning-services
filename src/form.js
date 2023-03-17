import { useState } from 'react'
import styles from '../styles/form.module.css'
import { useRouter } from 'next/router';

export default function Form({ confirmationMessage }) {
    const [userName, setUserName] = useState('')
    const router = useRouter();
    const confirmationScreenVisible = router.query?.success && router.query.success === "true";

    const ConfirmationMessage = (
        <p className={styles.successMessage}>{confirmationMessage}</p>
    )

    const ContactForm = (
        <form
            className={styles.container}
            method="POST"
            name="contact-form"
            action="/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input
                type="hidden"
                name="subject"
                value={`You have an email from ${userName}`}
            />
            <input type="hidden" name="form-name" value="contact-form" />
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
            </p>

            <label htmlFor="name">Name *</label>
            <input
                id="name"
                name="name"
                required
                type="text"
                onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" />
            <label htmlFor="email">E-mail Address *</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="telephone">Phone *</label>
            <input id="telephone" type="telephone" name="telephone" required />
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required />
            <button type="submit" className={styles.submit} >Submit</button>
            {confirmationScreenVisible && ConfirmationMessage}
        </form>
    )
    return (
        <>
            {ContactForm}
        </>
    )
}
