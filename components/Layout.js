import styles from '../styles/Layout.module.css'
import Header from './header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
        </div>
    )
}

export default Layout
