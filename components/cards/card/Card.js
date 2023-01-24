import styles from '../../../styles/Cards.module.css'
import parseImage from '../../../utils/parseImage'

export default function Card({ card, client }) {
    console.log('c ard', card)
    const src = parseImage(client, card.card.asset._ref).url()
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src={src} />
            </div>
            <div className={styles.cardText} >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
        </div>
    )
}
