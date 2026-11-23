import Link from 'next/link'
import Seo from '../components/Seo'
import CtaButtons from '../components/CtaButtons'
import CtaBand from '../components/CtaBand'
import ContractSteps from '../components/ContractSteps'
import WhyUs from '../components/WhyUs'
import LogoStrip from '../components/LogoStrip'
import Banners from '../components/Banners'
import { CONTACT } from '../components/site'
import { SECTORS } from '../components/sectors'
import {
  QuoteDocIcon,
  PhoneIcon,
  StarIcon,
  ShieldCheckIcon,
  GradCapIcon,
  TruckIcon,
  ArrowRightIcon,
  ExternalIcon,
  QuoteMarkIcon,
} from '../components/icons'

const REVIEWS = [
  {
    text: '"I manage a student letting company in Headingley and have worked with many cleaners over the years. I can honestly say that Megan and her staff are the best I have ever come across and work to an exceptionally high standard that is way above her competitors. She has literally performed miracles on very dirty student houses and has left them looking like new. I have been truly amazed and feel very lucky to her on board. Even the tenants have commented on how fantastic she is and how very happy they are at the service provided. I would highly recommend Megan and her team as a top class service."',
    by: 'Nicola R, Uni-Living Leeds',
  },
  {
    text: '"My office looks remarkable, week in and week out. Dean & Co cleaners are superb and trustworthy. We\'ve recommended them to friends, and every time they are satisfied."',
    by: 'Sean S',
  },
  {
    text: '"We highly recommend Dean & Co. Cleaning Services; we are delighted with the high level of service offered, excellent communication their service professionalism."',
    by: 'Louise Sykes, Trustpilot',
  },
]

const NewTab = ({ children = '(opens in a new tab)' }) => <span className="sr-only">{children}</span>

export default function HomePage() {
  return (
    <>
      <Seo
        title="Commercial Cleaning Leeds | Dean & Co"
        description="Meticulous commercial cleaning in Leeds for offices, nurseries, hotels, retail and secure environments, managed to inspection standard."
        path="/"
      />

      <section className="hero">
        <div className="hero-art" aria-hidden="true"></div>
        <div className="wrap hero-inner">
          <div>
            <h1>
              Small by choice. <span className="accent">Exceptional&nbsp;by&nbsp;design.</span>
            </h1>
            <p className="lead">
              Meticulous commercial cleaning for Leeds businesses that are judged on their standards. From offices and
              nurseries to hotels, retail and secure environments, every site is cared for by a dedicated team and managed
              to inspection standard.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" href="/contact#quote">
                <QuoteDocIcon />
                Book a site visit
              </Link>
              <a className="btn btn-outline" href={CONTACT.mobileHref}>
                <PhoneIcon />
                Book a call
              </a>
            </div>
            <p className="hero-proof">
              <span className="tp-stars" aria-hidden="true">
                ★★★★★
              </span>
              <a href={CONTACT.trustpilot} target="_blank" rel="noopener noreferrer">
                Rated Excellent, 4.8 on Trustpilot
                <NewTab> (opens in a new tab)</NewTab>
              </a>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <span>Most clients with us since day one</span>
            </p>
          </div>
          <div className="hero-media">
            <div className="frame">
              <img
                src="/assets/img/hero.webp"
                srcSet="/assets/img/hero-sm.webp 760w, /assets/img/hero.webp 1400w"
                sizes="(max-width:900px) 100vw, 46vw"
                alt="A Dean & Co team in navy T shirts and orange gloves cleaning glass, desks and surfaces in a bright modern office reception"
                width="1400"
                height="933"
                fetchpriority="high"
              />
            </div>
            <div className="hero-badge">
              <img src="/assets/brand/deanco-logo-device.svg" alt="" width="42" height="42" />
              <div>
                <strong>DBS checked team</strong>
                <span>CPD accredited training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Why clients trust us">
        <div className="wrap">
          <ul>
            <li>
              <StarIcon />
              <a href={CONTACT.trustpilot} target="_blank" rel="noopener noreferrer">
                4.8 on Trustpilot
                <NewTab> (opens in a new tab)</NewTab>
              </a>
            </li>
            <li>
              <ShieldCheckIcon />
              DBS checked team
            </li>
            <li>
              <GradCapIcon />
              CPD accredited training
            </li>
            <li>
              <TruckIcon />
              Upper Tier Waste Carrier
            </li>
          </ul>
        </div>
      </section>

      <LogoStrip />

      <ContractSteps sectionClassName="section bg-ebb" />

      <section className="section" aria-labelledby="intro-h">
        <div className="wrap intro">
          <div className="reveal">
            <div className="eyebrow">Why we stay small</div>
            <h2 id="intro-h" className="big">
              Built on people, not volume.
            </h2>
          </div>
          <div className="reveal">
            <p className="lead">
              Good cleaning starts with good people. We invest in our team, train them thoroughly and make sure they feel
              part of something, because a cleaner who cares does better work.
            </p>
            <p>
              We&apos;d rather have fewer clients and know every one of them well. If we grew too big, we&apos;d lose that,
              and so would you.
            </p>
            <Link className="link-arrow" href="/about">
              Our story <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-ebb" aria-labelledby="training-h">
        <div className="wrap intro">
          <div className="reveal">
            <div className="eyebrow">Training</div>
            <h2 id="training-h" className="big">
              Trained for the setting, not just the job.
            </h2>
          </div>
          <div className="reveal">
            <p className="lead">
              Each of our cleaners understands infection control and the right methods for every environment.
            </p>
            <p>
              A nursery needs a different approach from a dental surgery, and a dental surgery needs a different one from a
              boardroom. We know the difference, and in spaces where children play or patients are treated, that
              difference matters.
            </p>
            <Link className="link-arrow" href="/team">
              Meet the team <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="sectors-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Sectors</div>
              <h2 id="sectors-h">Who we clean for</h2>
            </div>
            <p>
              Every building has its own pressures. We plan each contract around how your space is used, so it&apos;s
              ready when you need it.
            </p>
          </div>
          <div className="sector-grid">
            {SECTORS.map((s) => (
              <Link className="sector-card reveal" href={`/who-we-clean-for#${s.id}`} key={s.id}>
                <div className="img">
                  <img
                    src={`/assets/img/${s.img}-sm.webp`}
                    alt={s.alt}
                    width="1400"
                    height="933"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="body">
                  <h3>{s.title}</h3>
                  <p>{s.cardText}</p>
                  <span className="go">
                    Find out more <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <CtaButtons />
        </div>
      </section>

      <WhyUs showCtas />

      <section className="section bg-ebb" aria-labelledby="rev-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Proof</div>
              <h2 id="rev-h">Most of our clients have been with us from the very beginning.</h2>
            </div>
            <div className="btn-row">
              <Link className="link-arrow" href="/references">
                Client references <ArrowRightIcon />
              </Link>
              <a className="link-arrow" href={CONTACT.trustpilot} target="_blank" rel="noopener noreferrer">
                Read our reviews <ExternalIcon />
                <NewTab> on Trustpilot (opens in a new tab)</NewTab>
              </a>
            </div>
          </div>
          <div className="reviews">
            {REVIEWS.map((r) => (
              <figure className="review reveal" key={r.by}>
                <QuoteMarkIcon />
                <blockquote>
                  <p>{r.text}</p>
                </blockquote>
                <figcaption>{r.by}</figcaption>
              </figure>
            ))}
          </div>
          <div className="press reveal">
            <span>
              <strong>Press:</strong> As featured in the Yorkshire Evening Post, July 2025.
            </span>
            <a className="link-arrow" href={CONTACT.trustpilot} target="_blank" rel="noopener noreferrer">
              4.8 on Trustpilot <ExternalIcon />
              <NewTab> (opens in a new tab)</NewTab>
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="div-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">The group</div>
              <h2 id="div-h">Our three divisions</h2>
            </div>
          </div>
          <div className="divisions">
            <div className="division here reveal">
              <span className="tag">You are here</span>
              <h3>Dean &amp; Co</h3>
              <p>Eco friendly commercial cleaning for schools, offices, receptions, hospitality, hotels and salons.</p>
            </div>
            <a
              className="division reveal"
              href="https://www.emergencycleaningyorkshire.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dlogo">
                <img src="/assets/img/logos/ecy.webp" alt="" width="621" height="160" loading="lazy" decoding="async" />
              </span>
              <span className="tag">Reactive division</span>
              <h3>Emergency Cleaning Yorkshire</h3>
              <p>
                Our reactive division, available 24/7 for specialist cleaning. ECY uses eco friendly products wherever
                possible, and specialist chemicals where a job requires them.
              </p>
              <span className="foot">
                www.emergencycleaningyorkshire.com <ExternalIcon />
                <NewTab />
              </span>
            </a>
            <a
              className="division reveal"
              href="https://www.emergencycleaningacademy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="dlogo">
                <img src="/assets/img/logos/teca.webp" alt="" width="666" height="160" loading="lazy" decoding="async" />
              </span>
              <span className="tag">Sister company</span>
              <h3>The Emergency Cleaning Academy</h3>
              <p>Our sister company and CPD accredited training provider, teaching cleaning as a skilled trade.</p>
              <span className="foot">
                www.emergencycleaningacademy.co.uk <ExternalIcon />
                <NewTab />
              </span>
            </a>
          </div>
          <div style={{ height: 'clamp(1rem,2vw,1.5rem)' }}></div>
          <Banners />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
