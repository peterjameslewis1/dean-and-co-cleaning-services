import Link from 'next/link'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { CONTACT } from '../components/site'
import { PlusIcon } from '../components/icons'

const ECY_URL = 'https://www.emergencycleaningyorkshire.com'
const OPERATIONS_EMAIL = 'operations@deancocleaning.co.uk'

const EcyLink = () => (
  <a href={ECY_URL} target="_blank" rel="noopener noreferrer">
    Emergency Cleaning Yorkshire<span className="sr-only"> (opens in a new tab)</span>
  </a>
)

// `text` is the plain answer used for Google's FAQ structured data; `answer` is what's shown on the page.
// Keep the two in step when editing.
const FAQS = [
  {
    q: 'What areas do you cover?',
    text: 'Our commercial cleaning currently covers Leeds. Our reactive division, Emergency Cleaning Yorkshire, covers a wider area.',
    answer: (
      <>
        Our commercial cleaning currently covers Leeds. Our reactive division, <EcyLink />, covers a wider area.
      </>
    ),
  },
  {
    q: 'What types of building do you clean?',
    text: 'We clean schools and nurseries, offices, waiting rooms and receptions, restaurants and hospitality venues, wedding venues, hotel rooms, and hair and beauty salons. We also work in retail units and secure environments.',
  },
  {
    q: 'Do you clean private homes?',
    text: "We don't offer domestic cleaning to individuals. We do carry out end of tenancy and void cleaning, and we clean for people who have been in accidents, and infirm or elderly people, when referred through insurance companies.",
  },
  { q: 'Are your staff DBS checked?', text: 'Yes. Every member of our team is DBS checked and vetted.' },
  {
    q: 'How are your staff trained?',
    text: 'Our employees hold the CPD accredited Professional Cleaning Fundamentals qualification from The Emergency Cleaning Academy, our sister training company.',
  },
  {
    q: 'Can you clean outside our working hours?',
    text: 'Yes. We plan cleans around your building, including early mornings and evenings.',
  },
  {
    q: 'What products do you use?',
    text: 'We use the GBPro Eco range as standard on our commercial contracts. Every product we use is COSHH assessed.',
  },
  {
    q: 'Can you provide compliance paperwork?',
    text: `Yes. We can provide risk assessments, COSHH information and other documents your compliance file needs. To request our compliance pack or copies of our policies, email ${OPERATIONS_EMAIL}.`,
    answer: (
      <>
        Yes. We can provide risk assessments, COSHH information and other documents your compliance file needs. To
        request our compliance pack or copies of our policies, email{' '}
        <a href={`mailto:${OPERATIONS_EMAIL}`}>{OPERATIONS_EMAIL}</a>.
      </>
    ),
  },
  {
    q: 'What if we need specialist or emergency cleaning?',
    text: "That's handled by Emergency Cleaning Yorkshire, our reactive division. It's available 24/7 for specialist cleaning.",
    answer: (
      <>
        That&apos;s handled by <EcyLink />, our reactive division. It&apos;s available 24/7 for specialist cleaning.
      </>
    ),
  },
  {
    q: 'How do I get a quote?',
    text: "Call us, email us or complete our quote form, and we'll talk through what you need.",
    answer: (
      <>
        <a href={CONTACT.mobileHref}>Call us</a>, <a href={CONTACT.emailHref}>email us</a> or complete our{' '}
        <Link href="/contact#quote">quote form</Link>, and we&apos;ll talk through what you need.
      </>
    ),
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
}

export default function FaqsPage() {
  return (
    <>
      <Seo
        title="FAQs | Dean & Co Cleaning Leeds"
        description="Answers to common questions about Dean & Co commercial cleaning in Leeds: areas covered, building types, staff vetting, training, products and quotes."
        path="/faqs"
        schema={FAQ_SCHEMA}
      />

      <PageHero current="FAQs" eyebrow="FAQs" title="Frequently asked questions" />

      <section className="section">
        <div className="wrap narrow">
          <div className="faq">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="pm">
                    <PlusIcon />
                  </span>
                </summary>
                <div className="ans prose">
                  <p>{f.answer || f.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
