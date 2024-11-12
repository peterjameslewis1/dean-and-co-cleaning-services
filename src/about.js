
import styles from '../styles/about.module.css'
import TrustBox from './TrustPilot'
export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>About us</h2>
                <h3>Our love for cleaning comes shining through!</h3>
                <p>
                    We love to clean. We know that not everyone does, but
                    we're pretty sure that everyone loves a clean space.
                    That's why we've made it our full time job to help people
                    live and work in cleaner spaces. We'll come to your
                    home or business with a smile and a sponge, and we
                    won't leave until your space is sparkling. We treat every
                    space that we clean as though it was our own - with
                    respect and integrity.
                </p>
                <div className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6411c26182e175f05ae17c27" data-style-height="24px" data-style-width="100%" data-theme="light" data-min-review-count="20" data-without-reviews-preferred-string-id="1" data-style-alignment="center">
                    <a href="https://uk.trustpilot.com/review/deancocleaning.co.uk" target="_blank" rel="noopener">Trustpilot</a>
                </div>
            </div>
        </div>
    )
}