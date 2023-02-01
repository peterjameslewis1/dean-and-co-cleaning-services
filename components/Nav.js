import styles from '../styles/header.module.css'
import brandImage from '../public/img/brand-logo.png'

const Nav = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brandContainer}>
                <h1>DEAN & CO. CLEANING SERVICES</h1>
                <img className={styles.logo} src={brandImage.src} alt="brand logo" />
            </div>
        </header>
    )
}

export default Nav
