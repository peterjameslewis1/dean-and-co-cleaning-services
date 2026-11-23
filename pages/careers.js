import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import LeafImage from '../components/LeafImage'
import CtaBand from '../components/CtaBand'
import { MailIcon } from '../components/icons'

const OPERATIONS_EMAIL = 'operations@deancocleaning.co.uk'

export default function CareersPage() {
  return (
    <>
      <Seo
        title="Cleaning Jobs Leeds | Careers at Dean & Co"
        description="Work for Dean & Co, a founder led commercial cleaning company in Leeds. Training through The Emergency Cleaning Academy for reliable, caring people."
        path="/careers"
        image="/assets/img/careers.webp"
      />

      <PageHero
        crumbs={[{ href: '/about', label: 'About' }]}
        current="Careers"
        eyebrow="Careers"
        title="Cleaning careers in Leeds"
        lead="A company is only as good as its staff. We look after our team, and many of our clients see the same familiar faces year after year."
      />

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <h2>Working for Dean &amp; Co</h2>
            <p>
              We&apos;re always happy to hear from reliable, caring people who take pride in their work. Experience helps,
              but attitude matters most. We&apos;ll support you with training through The Emergency Cleaning Academy, our
              sister company.
            </p>
            <div className="callout">All new starters need to complete an Enhanced DBS check and right to work checks.</div>
            <p>
              To apply, email <a href={`mailto:${OPERATIONS_EMAIL}`}>{OPERATIONS_EMAIL}</a> with your details and a little
              about yourself.
            </p>
            <a className="btn btn-primary" href={`mailto:${OPERATIONS_EMAIL}?subject=${encodeURIComponent('Job application')}`}>
              <MailIcon />
              Email {OPERATIONS_EMAIL}
            </a>
          </div>
          <LeafImage
            img="careers"
            alt="A friendly Dean & Co team having a short morning briefing in a bright corridor, with a cleaning caddy on the floor"
          />
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
