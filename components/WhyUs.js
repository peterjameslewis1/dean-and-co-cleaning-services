import CtaButtons from './CtaButtons'
import { UserIcon, ClipboardIcon, ShieldCheckIcon, RepeatIcon, LeafIcon, LifeBuoyIcon } from './icons'

const REASONS = [
  { Icon: UserIcon, title: 'Personal service', text: 'A consistent team that gets to know your building.' },
  {
    Icon: ClipboardIcon,
    title: 'Compliance led',
    text: 'Risk assessments, COSHH records and documented procedures are part of how we work.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Vetted and trained',
    text: 'Our team is DBS checked, and our employees hold a CPD accredited cleaning qualification covering COSHH, hygiene and safe working.',
  },
  { Icon: RepeatIcon, title: 'Consistent', text: 'We keep our staff, so you see familiar faces and consistent standards.' },
  { Icon: LeafIcon, title: 'Eco friendly', text: 'We use the GBPro Eco range as standard on our commercial contracts.' },
  { Icon: LifeBuoyIcon, title: 'Here afterwards', text: "If something needs putting right, we'll deal with it quickly." },
]

// Dark "Why Dean & Co" section with six reasons. `showCtas` adds the contact buttons underneath.
export default function WhyUs({ headingId = 'why-h', showCtas = false }) {
  return (
    <section className="section bg-blue" aria-labelledby={headingId}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">The difference</div>
            <h2 id={headingId}>Why Dean &amp; Co</h2>
          </div>
        </div>
        <ul className="why">
          {REASONS.map(({ Icon, title, text }) => (
            <li className="reveal" key={title}>
              <div className="ico">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
        {showCtas && <CtaButtons light />}
      </div>
    </section>
  )
}
