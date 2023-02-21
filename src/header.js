import styles from '../styles/header.module.css'
import headerImage from '../public/img/brand-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import {
    faPhone,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo} >

                    <img className={styles.logo} src={headerImage.src} alt="brand logo" />
                </div>
                <div className={styles.headerContent}>
                    <div className={styles.headerText}>
                        <h1>DEAN & CO. CLEANING SERVICES LTD</h1>
                        <p>Hassle free cleaning solutions</p>
                    </div>
                    <div className={styles.contact}>
                        <a href="#booking">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={styles.icons}
                            />
                            <span>booking@deancocleaning.co.uk</span>
                        </a>
                        <a href="tel:+07450262660">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={styles.icons}
                            />
                            <span>07450262660</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
