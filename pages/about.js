import Link from 'next/link'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { CONTACT } from '../components/site'
import { ArrowRightIcon, ExternalIcon } from '../components/icons'

const PRINCIPLES = [
  'The customer is always right',
  'A company is only as good as its staff',
  'There\'s no such thing as "that\'ll do"',
  'Do it right the first time',
]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Dean & Co Cleaning Leeds"
        description="A founder led, boutique cleaning company in Leeds, built on keeping clients and keeping staff."
        path="/about"
      />

      <PageHero current="About us" eyebrow="About us" title="A founder led cleaning company in Leeds" />

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <h2>Our story</h2>
            <p className="lead">
              Dean &amp; Co was founded by Megan Dean Du Moulin and has been trading for more than three years. What began
              as a small cleaning service has grown into a trusted commercial cleaning company, built around compliance,
              consistency and looking after people.
            </p>
            <p>
              We&apos;ve chosen to stay boutique. We&apos;re selective about our clients and only work with reputable
              organisations. Staying small means we can give each one an excellent service and the attention a larger
              contractor can&apos;t.
            </p>
            <Link className="link-arrow" href="/team">
              Meet the team <ArrowRightIcon />
            </Link>
          </div>
          <div className="media reveal">
            <div className="leaf-img">
              <img
                src="/assets/img/careers.webp"
                srcSet="/assets/img/careers-sm.webp 760w, /assets/img/careers.webp 1400w"
                sizes="(max-width:860px) 100vw, 50vw"
                alt="A Dean & Co team in navy T shirts holding a short morning briefing in a bright corridor, one holding a checklist"
                width="1400"
                height="933"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ebb">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">What we stand for</div>
              <h2>Our principles</h2>
            </div>
            <p>
              We believe these principles are why our clients keep coming back, and why some of our team have been with us
              from the start.
            </p>
          </div>
          <ul className="principles">
            {PRINCIPLES.map((p) => (
              <li className="reveal" key={p}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="press reveal" style={{ margin: 0 }}>
            <span>
              <strong>Press:</strong> As featured in the Yorkshire Evening Post, July 2025.
            </span>
            <a className="link-arrow" href={CONTACT.trustpilot} target="_blank" rel="noopener noreferrer">
              Read our reviews <ExternalIcon />
              <span className="sr-only"> on Trustpilot (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
