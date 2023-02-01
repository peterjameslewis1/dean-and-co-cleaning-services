import styles from '../styles/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import {
    faPhone,
    faAt,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <h2>Contact</h2>
            <ul>
                <li>
                    <FontAwesomeIcon
                        icon={faAt}
                        style={{ width: '20px', height: '20px', color: 'black' }}
                    />
                    <a href='mailto: mail@test.com'>mail@test.com</a>
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={faPhone}
                        style={{ width: '20px', height: '20px', color: 'black' }}
                    />
                    <a href="tel:+0123456789">0123456789</a>
                </li>
                <li>
                    <div style={{ width: '500px', height: '200px' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Leeds+(My%20Business)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </li>
            </ul>
        </div>
    )
}
