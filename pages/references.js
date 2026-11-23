import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import LogoStrip from '../components/LogoStrip'
import CtaBand from '../components/CtaBand'
import { QuoteMarkIcon } from '../components/icons'

const OPERATIONS_EMAIL = 'operations@deancocleaning.co.uk'

// Each reference: context line, quoted paragraphs, who wrote it and where.
const REFERENCES = [
  {
    context: 'Student and professional lets in Leeds',
    quotes: [
      'I have been using Megan and her team at Dean & Co Cleaning Services since April 2024 to clean our student and professional lets in Leeds, in which time they are very reliable, efficient and carry out all forms of cleaning to a very high standard.',
      'They also take before and after clean photos and videos as well as a guarantee they will return if anything has been missed.',
      'I can assure you that Megan and Dean & Co Cleaning Services will not disappoint.',
    ],
    name: 'Russell Cameron',
    org: 'Hizzy Properties, April 2025',
  },
  {
    context: 'Deep cleaning of void properties',
    quotes: [
      'We have found them to be very reliable, communicative and their work has been of the highest standard.',
      'They have carried out work quickly and efficiently and have gone above and beyond to make sure jobs are finished within set timescales and have provided solutions when unexpected issues have arisen.',
      'I cannot recommend this company highly enough.',
    ],
    name: 'Debby Williams',
    title: 'Supported Housing Officer',
    org: 'Centaur Housing, April 2025',
  },
  {
    context: 'Cleaning works across several areas of a client site',
    quotes: [
      'The client was extremely pleased with the outcome and noted that it was the best standard they have seen to date. They even commented that the level of finish surpassed that of their main contractor.',
      'The overall cleaning works undertaken across several areas of the site were completed to an exceptionally high standard.',
      'I would have no hesitation in recommending your team for any of our future projects.',
    ],
    name: 'Fiona Stravens Andersen',
    title: 'National Account Manager',
    org: 'SafeGroup Services Ltd, March 2026',
  },
  {
    context: 'Approved supplier',
    quotes: ['We have found them to be very reliable, communicative and their work has been of the highest standard.'],
    name: 'Mark Baxter',
    title: 'Operations Director',
    org: 'Ultima Environmental, January 2026',
  },
]

export default function ReferencesPage() {
  return (
    <>
      <Seo
        title="Client References | Dean & Co Cleaning Leeds"
        description="Written references from housing providers, letting agents and facilities companies who work with Dean & Co Cleaning Services in Leeds."
        path="/references"
      />

      <PageHero
        crumbs={[{ href: '/about', label: 'About' }]}
        current="Client references"
        eyebrow="Client references"
        title="What our clients put in writing"
        lead="We're proud of the references our clients have written for us. Here are extracts from their letters."
      />

      <LogoStrip />

      <section className="section bg-ebb">
        <div className="wrap">
          <div className="refs">
            {REFERENCES.map((r) => (
              <figure className="review ref-card reveal" key={r.name}>
                <QuoteMarkIcon />
                <p className="ref-ctx">{r.context}</p>
                <blockquote>
                  {r.quotes.map((q) => (
                    <p key={q}>&quot;{q}&quot;</p>
                  ))}
                </blockquote>
                <figcaption>
                  <span>
                    <strong>{r.name}</strong>
                    {r.title && `, ${r.title}`}
                    <br />
                    <span className="ref-org">{r.org}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="callout" style={{ marginTop: '2rem' }}>
            Full reference letters are available on request. Email{' '}
            <a href={`mailto:${OPERATIONS_EMAIL}?subject=${encodeURIComponent('Reference request')}`}>
              {OPERATIONS_EMAIL}
            </a>
            .
          </div>
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
