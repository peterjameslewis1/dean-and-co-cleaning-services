import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'
import Banners from '../components/Banners'
import { CONTACT } from '../components/site'
import { PhoneIcon, MailIcon, QuoteDocIcon } from '../components/icons'

const email = (address) => (
  <a href={`mailto:${address}`} key={address}>
    {address}
  </a>
)

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | Dean & Co Cleaning Leeds"
        description="Call, email or request a quote for commercial cleaning in Leeds."
        path="/contact"
      />

      <PageHero
        current="Contact"
        eyebrow="Contact"
        title="Contact Dean & Co in Leeds"
        lead="Tell us about your building and what you need, and we'll get back to you."
      >
        <div className="btn-row" style={{ marginTop: '1.5rem' }}>
          <a className="btn btn-outline" href={CONTACT.mobileHref}>
            <PhoneIcon />
            Call me
          </a>
          <a className="btn btn-outline" href={CONTACT.emailHref}>
            <MailIcon />
            Email me
          </a>
          <a className="btn btn-primary" href="#quote">
            <QuoteDocIcon />
            Request a quote
          </a>
        </div>
      </PageHero>

      <section className="section bg-ebb2">
        <div className="wrap contact-grid">
          <div>
            <h2>Contact details</h2>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="k">Bookings and enquiries</span>
                <span className="who">Megan</span>
                <a href={CONTACT.mobileHref}>{CONTACT.mobile}</a>
                {email(CONTACT.email)}
              </li>
              <li className="contact-item">
                <span className="k">Office and WhatsApp</span>
                <a href={CONTACT.officeHref}>{CONTACT.office}</a>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li className="contact-item">
                <span className="k">Sales</span>
                <span className="who">Ellie and Megan</span>
                {email('sales@deancocleaning.co.uk')}
              </li>
              <li className="contact-item">
                <span className="k">Operations</span>
                <span className="who">Ellie</span>
                {email('operations@deancocleaning.co.uk')}
              </li>
              <li className="contact-item">
                <span className="k">Accounts</span>
                <span className="who">Peggy</span>
                {email('accounts@deancocleaning.co.uk')}
              </li>
              <li className="contact-item">
                <span className="k">Address</span>
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <Banners headingLevel="h2" />
        </div>
      </section>
    </>
  )
}
