import styles from '../styles/footer.module.css'
import logo from '../public/img/brand-logo.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo.src} alt="company logo" />
            <div className={styles.content}>
                <div className={styles.location}>
                    <h3>Where to find us</h3>
                    <p>Sanderson House, Station Road, Horsforth, LS18 5NT.</p>
                </div>
                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a>booking@deancocleaning.co.uk</a>
                        </li>
                        <li>Megan:
                            <a href="tel:+07450262660"> 07450 262660</a>
                        </li>
                        <li>
                            Harvie:
                            <a href="tel:+07549309118"> 07549 309118</a>
                        </li>
                        <li>Alix:
                            <a href="tel:+07493774780"> 07493 774780</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
