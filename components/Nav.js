import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = ({ client, homePage }) => {
    return (
        <header className={styles.header}>
            <h1>Business Name</h1>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
