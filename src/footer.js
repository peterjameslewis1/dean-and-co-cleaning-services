import styles from '../styles/footer.module.css'
import logo from '../public/img/primary-logos/logo.png'
import ecoFriendlyBadge from '../public/img/other-logos/eco-friendly.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image src={logo} alt="Dean and co cleaning's logo" />
                </div>
                <div className={styles.location}>
                    <h3>Sanderson House, Station Road <br /> Horsforth, LS18 5NT.</h3>
                </div>
                <div className={styles.contact}>
                    <img className={styles.ecoFriendlyBadge} src={ecoFriendlyBadge.src} alt="Eco friendly badge" />
                    <p><strong>                            <a href="tel:+07450262660"> 07450 262660</a>
                    </strong>

                    </p>
                    <p>
                        <strong><a href='mailto:booking@deancocleaning.co.uk'>booking@deancocleaning.co.uk</a></strong>

                    </p>
                    <p>
                        <strong>                    <a href='mailto:help@deancocleaning.co.uk'>help@deancocleaning.co.uk</a>
                        </strong>
                    </p>
                    <span>Areas LS1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12</span>
                    <p className={styles.companyNumber}>Company No. 14648906</p>
                </div>
            </div>
        </footer>
    )
}
