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
    },
    {
        title: 'P Gallagher',
        description: 'Fantastic service-my house sparkles after a visit! Highly recommended.'
    },
    {
        title: 'H Law',
        description: "Wonderful people, absolutely brilliant. Megan's sheer kindness has brought me to tears, and the work her and her colleague have done is absolutely amazing. I cannot possibly recommend them enough.'"
    },
    {
        title: 'Mrs Reynolds',
        description: "'My house genuinely looks and feels revived, after a deep clean from Megan. As an older lady, I had some anxiety about giving a previously unknown person the run of my home. However, Megan's friendly, caring but business-like manner was reassuring, and now my only regret is that I didn't contact her sooner! Megan was extremely thorough and transformed every room she worked in. It's been getting more difficult to keep on top of cleaning, and I now feel like a weight has been lifted off my shoulders. I look forward to regular maintenance visits. Thank you Megan for your hard work and high standards! A true professional.'"
    },
    {
        title: 'Dan N',
        description: "'I wanted to leave this review, as the level of attention to detail I receive is outstanding. Coupled with a superb cleaning service. I have found them extremely trustworthy and a really efficient and cost effective company. I would have no hesitation in recommending them to anyone. Thanks again.'"
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
            <a href='https://www.bark.com/en/gb/company/dean-and-co-cleaning-services-ltd/Xvl93/' target='_blank' className='bark-widget' data-type='verified' data-id='Xvl93' data-image='medium-navy' data-version='3.0'>Dean and Co Cleaning Services Ltd</a>
        </div >
    )
}
