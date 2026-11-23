import Link from 'next/link'
import Seo from '../components/Seo'
import CtaBand from '../components/CtaBand'
import { TruckIcon, CheckIcon, CartIcon, RepeatIcon, CoinsIcon, MailIcon } from '../components/icons'

const SALES_EMAIL = 'sales@deancocleaning.co.uk'
const mailto = (subject) => `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}`

const KIT_ITEMS = [
  { colour: 'var(--apple)', vol: '1 litre', title: 'GBPro Pine Multi Surface Cleaner', text: 'Super concentrate' },
  {
    colour: 'var(--sandy)',
    vol: '1 litre',
    title: 'GBPro Multi Surface Cleaner and Degreaser',
    text: 'Super concentrate',
  },
  { colour: 'var(--peach)', vol: '1 litre', title: 'GBPro Glass Cleaner and Degreaser', text: 'Super concentrate' },
  {
    colour: 'var(--blue)',
    vol: '3 x 600ml',
    title: 'GBPro spray bottles',
    text: 'Colour coded, with dilution markings',
    triggers: ['#f2c200', '#1f7fd1', '#1a9a4a'],
  },
]

const WHY_CARDS = [
  {
    colour: 'var(--apple)',
    Icon: TruckIcon,
    title: 'Space saving',
    text: 'Three 1 litre bottles make around 43 litres of ready to use solution at standard dilutions. That is about 93% less liquid to carry in your vehicle and store in your stockroom.',
  },
  {
    colour: 'var(--sandy)',
    Icon: RepeatIcon,
    title: 'Less waste',
    text: 'Refill and reuse your spray bottles instead of buying and throwing away ready to use bottles.',
  },
  {
    colour: 'var(--peach)',
    Icon: CoinsIcon,
    title: 'Cost effective',
    text: "Each 1 litre concentrate makes 11 to 21 litres at standard dilutions. For comparison, Green Bear's ready to use glass cleaner is £8.47 a litre.",
  },
]

const STATS = [
  {
    colour: 'var(--apple)',
    n: '£1.16',
    text: 'per litre at standard dilutions, for the whole kit including the three reusable spray bottles (£49.99 + VAT ÷ 43 litres)',
  },
  { colour: 'var(--peach)', n: '68p', text: 'per litre at lighter maintenance dilutions (£49.99 + VAT ÷ 73 litres)' },
  {
    colour: 'var(--sandy)',
    n: '3 bottles',
    text: 'replace around 57 ready to use 750ml bottles at standard dilutions, or around 97 at maintenance dilutions',
  },
]

const DILUTIONS = [
  {
    colour: 'var(--apple)',
    product: 'GBPro Pine Multi Surface Cleaner',
    std: '1:20',
    stdMl: '50ml per litre of water',
    stdMakes: '21 litres',
    light: '1:30',
    lightMl: '33ml per litre of water',
    lightMakes: '31 litres',
    refills: '35',
  },
  {
    colour: 'var(--sandy)',
    product: 'GBPro Multi Surface Cleaner and Degreaser',
    std: '1:10',
    stdMl: '100ml per litre of water',
    stdMakes: '11 litres',
    light: '1:20',
    lightMl: '50ml per litre of water',
    lightMakes: '21 litres',
    refills: '18',
  },
  {
    colour: 'var(--peach)',
    product: 'GBPro Glass Cleaner and Degreaser',
    std: '1:10',
    stdMl: '100ml per litre of water',
    stdMakes: '11 litres',
    light: '1:20',
    lightMl: '50ml per litre of water',
    lightMakes: '21 litres',
    refills: '18',
  },
]

const CARTONS = [
  { product: 'GBPro Pine Multi Surface Cleaner (1:20)', five: '105 litres', ten: '210 litres' },
  { product: 'GBPro Multi Surface Cleaner and Degreaser (1:10)', five: '55 litres', ten: '110 litres' },
  { product: 'GBPro Glass Cleaner and Degreaser (1:10)', five: '55 litres', ten: '110 litres' },
]

export default function StarterKitPage() {
  return (
    <>
      <Seo
        title="Green Bear Starter Kit for Cleaning Companies | Dean & Co"
        description="Three GBPro super concentrates and three colour coded spray bottles. Up to 43 litres of ready to use solution at standard dilutions."
        path="/starter-kit"
        image="/assets/img/starter-kit.webp"
      />

      <section className="kit-hero" aria-labelledby="kit-h1">
        <span className="kh-leaf kh-a" aria-hidden="true"></span>
        <span className="kh-leaf kh-b" aria-hidden="true"></span>
        <div className="wrap kit-hero-grid">
          <div className="kit-hero-text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/about">About</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Green Bear starter kit</span>
            </nav>
            <p className="eyebrow">In partnership with Green Bear</p>
            <h1 id="kit-h1">
              All you need. <span className="hl">One starter kit.</span>
            </h1>
            <p className="lead">
              Your everyday cleaning essentials from Green Bear. Three 1 litre super concentrates and three colour coded
              spray bottles, for cleaning companies and businesses.
            </p>
            <div className="kit-price">
              <p className="price-label">Introductory offer</p>
              <p className="price">
                <strong>£49.99</strong> <span>+ VAT</span>
              </p>
              <p className="price-inc">£59.99 including VAT</p>
              <ul className="kit-facts">
                <li>
                  <TruckIcon />
                  Delivery within Leeds included
                </li>
                <li>
                  <CheckIcon />
                  Delivered within 3 days
                </li>
              </ul>
              <div className="kit-btns">
                <a className="btn btn-sandy" href={mailto('Green Bear starter kit order')}>
                  <CartIcon />
                  Buy the starter kit
                </a>
                <a className="btn btn-ghost-light" href="#kit-dil">
                  How far it goes
                </a>
              </div>
              <p className="small">The Buy button opens an email so you can place your order with Ellie.</p>
              <p className="small">Outside Leeds? Email Ellie to ask about delivery.</p>
            </div>
          </div>
          <div className="kit-hero-media">
            <div className="kit-photo">
              <img
                src="/assets/img/starter-kit.webp"
                srcSet="/assets/img/starter-kit-sm.webp 760w, /assets/img/starter-kit.webp 1125w"
                sizes="(max-width:900px) 100vw, 50vw"
                width="1125"
                height="700"
                alt="The Green Bear starter kit: three GBPro 1 litre concentrates (Multi Surface Cleaner with Degreaser, Glass Cleaner with Degreaser and Pine Multi Surface Cleaner) and three GBPro spray bottles with yellow, blue and green triggers"
                fetchpriority="high"
              />
            </div>
            <div className="kit-badge">
              <img src="/assets/img/logos/greenbear.webp" alt="Green Bear" height="40" loading="lazy" />
              <span>Keeping it eco friendly</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section kit-contents" aria-labelledby="kit-in">
        <div className="wrap">
          <p className="eyebrow reveal">The kit</p>
          <h2 id="kit-in" className="reveal">
            What&apos;s in the kit
          </h2>
          <ul className="kit-items">
            {KIT_ITEMS.map((item) => (
              <li className="kit-item reveal" style={{ '--c': item.colour }} key={item.title}>
                <span className="kit-vol">{item.vol}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.triggers && (
                  <span className="trig" aria-hidden="true">
                    {item.triggers.map((c) => (
                      <i key={c} style={{ background: c }}></i>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <figure className="kit-quote reveal">
            <span className="q" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>
              <p>Used by our cleaning team. Pine cleaning results checked with ATP testing.</p>
            </blockquote>
          </figure>
          <p className="reveal kit-contact">
            For orders, information or safety data sheets (SDS), contact Ellie at{' '}
            <a href={mailto('Starter kit enquiry')}>{SALES_EMAIL}</a>.
          </p>
        </div>
      </section>

      <section className="section tight kit-why" aria-labelledby="kit-why">
        <div className="wrap">
          <p className="eyebrow reveal">Why concentrates</p>
          <h2 id="kit-why" className="reveal">
            Carry less. Waste less. Spend less.
          </h2>
          <ul className="cards">
            {WHY_CARDS.map(({ colour, Icon, title, text }) => (
              <li className="card kit-card reveal" style={{ '--c': colour }} key={title}>
                <div className="ico">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kit-band" aria-label="Kit value at a glance">
        <div className="wrap">
          <div className="kit-stats">
            {STATS.map((s) => (
              <div className="stat reveal" key={s.n}>
                <p className="n" style={{ color: s.colour }}>
                  {s.n}
                </p>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="kit-dil">
        <div className="wrap">
          <p className="eyebrow reveal">Dilution guide</p>
          <h2 id="kit-dil" className="reveal">
            How far each litre goes
          </h2>
          <p className="reveal">
            Based on Green Bear&apos;s published dilution guidance. Always follow the label for the task in hand.
          </p>
          <div className="table-wrap reveal">
            <table className="kit-table stack">
              <thead>
                <tr>
                  <th scope="col">Product (1 litre)</th>
                  <th scope="col">Standard dilution</th>
                  <th scope="col">Makes</th>
                  <th scope="col">Lighter maintenance dilution</th>
                  <th scope="col">Makes</th>
                  <th scope="col">600ml spray bottle refills at standard dilution</th>
                </tr>
              </thead>
              <tbody>
                {DILUTIONS.map((d) => (
                  <tr style={{ '--c': d.colour }} key={d.product}>
                    <th scope="row">{d.product}</th>
                    <td data-l="Standard dilution">
                      <span className="v">
                        {d.std}
                        <br />
                        <span className="small">{d.stdMl}</span>
                      </span>
                    </td>
                    <td data-l="Makes">
                      <span className="v">{d.stdMakes}</span>
                    </td>
                    <td data-l="Lighter maintenance dilution">
                      <span className="v">
                        {d.light}
                        <br />
                        <span className="small">{d.lightMl}</span>
                      </span>
                    </td>
                    <td data-l="Makes">
                      <span className="v">{d.lightMakes}</span>
                    </td>
                    <td data-l="Spray bottle refills">
                      <span className="v">{d.refills}</span>
                    </td>
                  </tr>
                ))}
                <tr className="total">
                  <th scope="row">Kit total</th>
                  <td className="e"></td>
                  <td data-l="Makes at standard dilution">
                    <strong>43 litres</strong>
                  </td>
                  <td className="e"></td>
                  <td data-l="Makes at maintenance dilution">
                    <strong>73 litres</strong>
                  </td>
                  <td data-l="Spray bottle refills">
                    <strong>71</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="small reveal">
            Litres made include the water added. A 1:20 dilution means 1 part concentrate to 20 parts water. Space saving
            compares 3 litres of concentrate with the same volume of ready to use solution. Green Bear prices taken from
            their website in November 2026.
          </p>
        </div>
      </section>

      <section className="section tight" aria-labelledby="kit-ref">
        <div className="wrap">
          <div className="kit-refill reveal">
            <div>
              <p className="eyebrow">Refills</p>
              <h2 id="kit-ref">Like the products? Stock up.</h2>
              <p>
                If you like the products, we recommend buying 5 or 10 litre cartons with pumps for your stockroom. Fill
                your 1 litre bottles from there, then dilute into your spray bottles as usual.
              </p>
              <p>Prices for 5 and 10 litre cartons and pumps are available on request.</p>
              <p>
                <a className="btn btn-primary" href={mailto('Green Bear carton price request')}>
                  <MailIcon />
                  Request carton prices
                </a>
              </p>
            </div>
            <div className="table-wrap">
              <table className="kit-table stack">
                <thead>
                  <tr>
                    <th scope="col">Carton</th>
                    <th scope="col">5 litres makes</th>
                    <th scope="col">10 litres makes</th>
                  </tr>
                </thead>
                <tbody>
                  {CARTONS.map((c) => (
                    <tr key={c.product}>
                      <th scope="row">{c.product}</th>
                      <td data-l="5 litres makes">{c.five}</td>
                      <td data-l="10 litres makes">{c.ten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        sectionClassName="section tight"
        title="Order your starter kit"
        text="Buy online or email Ellie with any questions about the products, dilutions or safety data sheets."
      />
    </>
  )
}
