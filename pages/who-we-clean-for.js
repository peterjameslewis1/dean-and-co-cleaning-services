import Link from 'next/link'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import LeafImage from '../components/LeafImage'
import CtaButtons from '../components/CtaButtons'
import ContractSteps from '../components/ContractSteps'
import WhyUs from '../components/WhyUs'
import CtaBand from '../components/CtaBand'
import { SECTORS } from '../components/sectors'
import { ArrowRightIcon } from '../components/icons'

const JUMP_LINKS = [
  ...SECTORS.map((s) => ({ href: `#${s.id}`, label: s.title })),
  { href: '#residential', label: 'Residential referrals and tenancies' },
]

export default function WhoWeCleanForPage() {
  return (
    <>
      <Seo
        title="Commercial Cleaning Sectors Leeds | Dean & Co"
        description="Cleaning for schools, offices, receptions, hospitality, hotels and salons across Leeds."
        path="/who-we-clean-for"
      />

      <PageHero
        current="Who we clean for"
        eyebrow="Commercial cleaning in Leeds"
        title="Who we clean for"
        lead="Every building has its own pressures. We plan each contract around how your space is used, so it's ready when you need it."
      />

      <section className="section tight" aria-labelledby="jump-h">
        <div className="wrap">
          <h2 id="jump-h" className="sr-only">
            Choose a sector
          </h2>
          <ul className="jump">
            {JUMP_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  {l.label}
                  <ArrowRightIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sectors alternate background and image side: odd ones get bg-ebb2 and the "rev" layout. */}
      {SECTORS.map((s, i) => {
        const alt = i % 2 === 1
        return (
          <section
            key={s.id}
            className={`section sector-sec${alt ? ' bg-ebb2' : ''}`}
            id={s.id}
            aria-labelledby={`${s.id}-h`}
          >
            <div className={`wrap split${alt ? ' rev' : ''}`}>
              <LeafImage img={s.img} alt={s.alt} />
              <div className="reveal">
                <div className="eyebrow">{s.eyebrow}</div>
                <h2 id={`${s.id}-h`}>{s.heading}</h2>
                <p className="lead">{s.lead}</p>
                <p>{s.body}</p>
                <CtaButtons />
                <a className="to-top" href="#jump-h">
                  Back to sector list
                </a>
              </div>
            </div>
          </section>
        )
      })}

      <section className="section bg-ebb" id="residential" aria-labelledby="res-h">
        <div className="wrap split">
          <LeafImage
            img="residential"
            alt="Two Dean & Co cleaners preparing an empty rental flat, cleaning a kitchen worktop and a window"
          />
          <div className="reveal">
            <div className="eyebrow">Also</div>
            <h2 id="res-h">Residential referrals and tenancies</h2>
            <p>
              We don&apos;t offer domestic cleaning to individuals. The residential work we do is carried out for
              landlords, letting agents, housing providers and insurance companies.
            </p>
            <Link className="link-arrow" href="/residential-referrals-tenancies">
              Residential referrals and tenancies <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <ContractSteps />
      <WhyUs headingId="why2-h" />
      <CtaBand sectionClassName="section tight" />
    </>
  )
}
