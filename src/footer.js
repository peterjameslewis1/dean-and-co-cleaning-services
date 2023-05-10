import styles from '../styles/footer.module.css'
import logo from '../public/img/brand-logo.png'
import ecoFriendlyBadge from '../public/img/eco-friendly.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.location}>
                    <h3>Where to find us</h3>
                    <p>Sanderson House, Station Road, Horsforth, LS18 5NT.</p>
                </div>
                <div className={styles.contact}>
                    <img className={styles.ecoFriendlyBadge} src={ecoFriendlyBadge.src} alt="Eco friendly badge" />
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a>booking@deancocleaning.co.uk</a>
                        </li>
                        <li>Megan:
                            <a href="tel:+07450262660"> 07450 262660</a>
                            <br />
                            <span>Areas LS1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12</span>
                        </li>
                    </ul>
                    <div>
                        Happy with the service? Tell everyone.<br />
                        Not happy with the service?
                        Tell us by emailing <a href='mailto:help@deancocleaning.co.uk'>help@deancocleaning.co.uk</a>
                    </div>
                    <p className={styles.companyNumber}>Company No. 14648906</p>
                </div>
            </div>
        </footer>
    )
}
