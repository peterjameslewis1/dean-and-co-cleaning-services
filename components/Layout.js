import { createClient } from "next-sanity";
import styles from '../styles/Layout.module.css'
import Nav from './Nav'

const client = createClient({
    projectId: 'o8oetywj',
    dataset: 'production',
    apiVersion: '2023-01-21',
    useCdn: false
})


const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
        </div>
    )
}

export default Layout
