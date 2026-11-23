import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import LeafImage from '../components/LeafImage'
import CtaBand from '../components/CtaBand'

const SERVICES = [
  {
    title: 'End of tenancy cleaning',
    text: 'We prepare properties for handover and for the next tenant, leaving every room clean, fresh and ready to be presented.',
  },
  {
    title: 'Void property cleaning',
    text: 'We help landlords and housing providers get empty properties ready to let, with turnaround in 1 to 7 days depending on scope.',
  },
  {
    title: 'Referred residential cleaning',
    text: 'We clean for people who have been in accidents, and for infirm or elderly people, when referred through insurance companies. Our team works with care, discretion and respect.',
  },
]

export default function ResidentialPage() {
  return (
    <>
      <Seo
        title="End of Tenancy and Void Cleaning Leeds | Dean & Co"
        description="End of tenancy, void property and insurance referred residential cleaning in Leeds for landlords, letting agents, housing providers and insurers."
        path="/residential-referrals-tenancies"
      />

      <PageHero
        crumbs={[{ href: '/who-we-clean-for', label: 'Who we clean for' }]}
        current="Residential referrals and tenancies"
        eyebrow="For landlords, agents, housing providers and insurers"
        title="Residential referrals and tenancies in Leeds"
      />

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <div className="callout">
              <strong>We don&apos;t offer domestic cleaning to individuals.</strong> The residential work we do is carried
              out for landlords, letting agents, housing providers and insurance companies.
            </div>
            <p className="muted" style={{ fontSize: 'var(--text-sm)' }}>
              Homeowners cannot book a regular or one off domestic clean.
            </p>
          </div>
          <LeafImage
            img="residential"
            alt="Two Dean & Co cleaners preparing an empty rental flat for the next tenant, cleaning a kitchen worktop and a window"
          />
        </div>
      </section>

      <section className="section bg-ebb">
        <div className="wrap">
          <ul className="services">
            {SERVICES.map((s, i) => (
              <li className="service reveal" key={s.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
