import Card from './card/Card'
import styles from '../../styles/Cards.module.css'

export default function Cards({ cards, client }) {
  console.log('cards', cards)
  return (
    <section className={styles.wrapper}>
      <div className={styles.cards}>
        {cards.map((card) => {
          return <Card key={card._id} card={card} client={client} />
        })}
      </div>
    </section>
  )
}
