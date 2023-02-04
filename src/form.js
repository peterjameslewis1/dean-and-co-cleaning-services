import styles from '../styles/form.module.css'

export default function Form() {
    return (
        <form
            name="contact-form"
            method="POST"
            action="contact/?success=true"
            data-netlify="true"
            className={styles.form}
            netlify
        >
            <label htmlFor="name">Full Name *</label>
            <input
                id="name"
                name="name"
                required
                type="text"
            />
            <label htmlFor="company">Company</label>
            <input id="company" name="company" required type="text" />
            <label htmlFor="email">E-mail Address *</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" className={styles.submit}>Submit</button>
        </form>
    )
}
