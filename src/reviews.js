import styles from '../styles/reviews.module.css'
import Carousel from './carousel';
import { SwiperSlide } from "swiper/react";


const data = [
    {
        title: 'Nicola R - Uni-Living Leeds',
        description: "I manage a student letting company in Headingley and have worked with many cleaners over the years. I can honestly say that Megan and her staff are the best I have ever come across and work to an exceptionally high standard that is way above her competitors. She has literally performed miracles on very dirty student houses and has left them looking like new. I have been truly amazed and feel very lucky to her on board. Even the tenants have commented on how fantastic she is and how very happy they are at the service provided. I would highly recommend Megan and her team as a top class service."
    },
    {
        title: 'Sean S',
        description: "My office looks remarkable, week in and week out. Dean & Co cleaners are superb and trustworthy. We've recommended them to friends, and every time they are satisfied."
    },
    {
        title: 'Danielle M',
        description: "My husband and I are very satisfied customers. Our home looks lovely, and the cleaner is always willing to accommodate special requests."
    }
]


export default function Reviews() {

    return (
        <div className={styles.reviewsContainer}>
            <h2 className={styles.title}>Happy Clients</h2>
            <Carousel
            >
                {data.map(({ title, description }, index) => {
                    return (
                        <SwiperSlide key={`${title}-${index}`}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Carousel>
        </div >
    )
}
