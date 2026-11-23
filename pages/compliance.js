import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaButtons from '../components/CtaButtons'
import CtaBand from '../components/CtaBand'
import {
  ShieldCheckIcon,
  GradCapIcon,
  TruckIcon,
  LockIcon,
  HardHatIcon,
  FileTextIcon,
  ClipboardIcon,
  SearchCheckIcon,
  UmbrellaIcon,
  MailIcon,
} from '../components/icons'

const OPERATIONS_EMAIL = 'operations@deancocleaning.co.uk'
const mailto = (subject) => `mailto:${OPERATIONS_EMAIL}?subject=${encodeURIComponent(subject)}`

const CREDENTIALS = [
  {
    Icon: ShieldCheckIcon,
    title: 'DBS checked team',
    text: 'Every member of our team is DBS checked and vetted before they start.',
  },
  {
    Icon: GradCapIcon,
    title: 'CPD accredited training',
    text: 'Our employees hold the CPD accredited Professional Cleaning Fundamentals qualification from The Emergency Cleaning Academy (TECA), our sister training company.',
  },
  { Icon: TruckIcon, title: 'Licensed waste carrier', text: 'Upper Tier Waste Carrier Licence CBDU561188.' },
  { Icon: LockIcon, title: 'Security clearance', text: 'EL1 security clearance.' },
  { Icon: HardHatIcon, title: 'Industry qualifications', text: 'IPAF, PASMA, CSCS and CITB Health and Safety.' },
  { Icon: FileTextIcon, title: 'Risk assessments', text: 'RAMS and COSHH documentation for our work.' },
  {
    Icon: ClipboardIcon,
    title: 'Documented procedures',
    text: 'Controlled standard operating procedures for our team to follow.',
  },
  {
    Icon: SearchCheckIcon,
    title: 'Quality checks',
    text: 'Clear site checklists, clock in and out tracking, and unannounced UV audits on selected contracts.',
  },
  {
    Icon: UmbrellaIcon,
    title: 'Insurance',
    text: "£5 million public and products liability, and £10 million employers' liability.",
  },
]

const PACK_ITEMS = ['COSHH assessments', 'RAMS', 'Insurance documents', 'Waste carrier licence']

export default function CompliancePage() {
  return (
    <>
      <Seo
        title="Compliance | Dean & Co Cleaning Leeds"
        description="DBS checked team, CPD accredited training, licensed waste carrier and documented procedures."
        path="/compliance"
      />

      <PageHero
        crumbs={[{ href: '/about', label: 'About' }]}
        current="Compliance"
        eyebrow="Compliance"
        title="Compliance led commercial cleaning in Leeds"
        lead="We're a compliance led company, and our paperwork is as thorough as our cleaning. Everything your compliance file needs is available on request."
      />

      <section className="section bg-ebb2">
        <div className="wrap">
          <ul className="cards">
            {CREDENTIALS.map(({ Icon, title, text }) => (
              <li className="card reveal" key={title}>
                <div className="ico">
                  <Icon />
                </div>
                <h2 style={{ fontSize: '1.0625rem', marginBottom: '.35rem' }}>{title}</h2>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <CtaButtons />
        </div>
      </section>

      <section className="section" aria-labelledby="pack-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">For procurement teams</div>
              <h2 id="pack-h">Request our compliance pack</h2>
            </div>
            <p>
              If you&apos;re adding us to your supplier list or preparing a tender, we&apos;ll send you the documents you
              need.
            </p>
          </div>
          <div className="pack">
            <div className="pack-card reveal">
              <h3>Compliance pack</h3>
              <ul className="ticks">
                {PACK_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="btn btn-primary" href={mailto('Compliance pack request')}>
                <MailIcon />
                Request the compliance pack
              </a>
            </div>
            <div className="pack-card reveal">
              <h3>Company policies</h3>
              <p>Copies of our company policies are available on request.</p>
              <a className="btn btn-outline" href={mailto('Policy request')}>
                <MailIcon />
                Request our policies
              </a>
            </div>
          </div>
          <p className="muted" style={{ marginTop: '1.25rem', fontSize: 'var(--text-sm)' }}>
            Requests go to <a href={`mailto:${OPERATIONS_EMAIL}`}>{OPERATIONS_EMAIL}</a>.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
