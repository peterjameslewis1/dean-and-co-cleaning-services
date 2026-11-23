import Link from 'next/link'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import LeafImage from '../components/LeafImage'
import CtaBand from '../components/CtaBand'
import { ArrowRightIcon } from '../components/icons'

const GREEN_BEAR_URL = 'https://www.green-bear.co.uk/'

const POINTS = [
  'Green Bear state that the range is produced using wind and solar energy.',
  'Green Bear state that the range is not tested on animals.',
  'Green Bear list our Multi Surface Cleaner + Degreaser as an EU Ecolabel product.',
  'The Good Shopping Guide lists GBPro among its top rated ethical brands.',
  'Our products are concentrated and diluted into reusable trigger bottles.',
]

export default function EcoApproachPage() {
  return (
    <>
      <Seo
        title="Eco Friendly Commercial Cleaning Leeds | Dean & Co"
        description="Our eco approach. Dean & Co uses the GBPro Eco range from Green Bear UK as standard on commercial cleaning contracts in Leeds."
        path="/eco-approach"
        image="/assets/img/eco.webp"
      />

      <PageHero
        crumbs={[{ href: '/about', label: 'About' }]}
        current="Our eco approach"
        eyebrow="Our eco approach"
        title="Eco friendly commercial cleaning in Leeds"
        lead="Dean & Co is our eco friendly commercial division. We use the GBPro Eco range from Green Bear UK as standard on our commercial contracts."
      />

      <section className="section">
        <div className="wrap split">
          <LeafImage
            img="eco"
            alt="Gloved hands holding a reusable trigger bottle with a green trigger, beside bottles with yellow and blue triggers and a concentrate refill"
            style={{ aspectRatio: '4/4.4' }}
          />
          <div className="reveal">
            <h2>Products and approach</h2>
            <ul className="ticks">
              {POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p>
              Every product we use is COSHH assessed and recorded on our Approved Chemical Products Register, and always
              used at the correct dilution. Our product choices can also support your organisation&apos;s own
              sustainability reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="section tight bg-ebb" aria-labelledby="gb-h">
        <div className="wrap">
          <div className="supplier reveal">
            <a className="supplier-logo" href={GREEN_BEAR_URL} target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/img/logos/greenbear.webp"
                alt="Green Bear UK"
                width="272"
                height="100"
                loading="lazy"
                decoding="async"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <div>
              <h2 id="gb-h">Our product supplier: Green Bear UK</h2>
              <p>
                Green Bear UK describe themselves as a family owned British business. Since 2008 they have supplied GBPro
                concentrated cleaning products, professional window cleaning equipment and bamboo essentials to
                businesses and trade customers across the UK.
              </p>
              <p>
                They work alongside their sister company, Groene Beer Netherlands. Green Bear display the Good Shopping
                Guide Ethical Company Award on their website.
              </p>
              <p>
                <Link className="link-arrow" href="/starter-kit">
                  See our Green Bear starter kit <ArrowRightIcon />
                </Link>
              </p>
              <a className="link-arrow" href={GREEN_BEAR_URL} target="_blank" rel="noopener noreferrer">
                Visit Green Bear UK<span className="sr-only"> (opens in a new tab)</span> <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
