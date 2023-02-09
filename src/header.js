import styles from '../styles/header.module.css'
import headerImage from '../public/img/brand-logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo} >

                    <img className={styles.logo} src={headerImage.src} alt="brand logo" />
                </div>
                <div className={styles.headerText}>
                    <h1>DEAN & CO. CLEANING SERVICES</h1>
                    <p>Hassle free cleaning solutions</p>
                </div>
            </div>
        </header>
    )
}

export default Header
