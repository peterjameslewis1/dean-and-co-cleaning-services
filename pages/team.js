import Link from 'next/link'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { ArrowRightIcon } from '../components/icons'

// The first member is shown as the large lead card. `img` is the base filename in /assets/img.
const TEAM = [
  {
    name: 'Megan Dean Du Moulin',
    alt: 'Megan',
    img: 'team-megan',
    role: 'Founder and Director',
    desc: 'Megan founded Dean & Co. She holds CSCS, IPAF, PASMA, CITB Health and Safety and biohazard certifications. Her rule is simple: there\'s no such thing as "that\'ll do".',
  },
  {
    name: 'Ellie',
    img: 'team-ellie',
    role: 'Operations and Compliance Manager',
    desc: 'Ellie runs our day to day operations and compliance, from documentation and onboarding to client paperwork.',
  },
  {
    name: 'Peggy',
    img: 'team-peggy',
    role: 'Accounts',
    desc: 'Peggy looks after invoicing and accounts, and is the contact for any billing queries.',
  },
  {
    name: 'Deborah',
    img: 'team-debbie',
    role: 'Cleaning Technician',
    desc: 'Deborah is one of our TECA trained Cleaning Technicians. She takes pride in the small details that make a building feel properly looked after.',
  },
  {
    name: 'Olga',
    img: 'team-olga',
    role: 'Cleaning Technician',
    desc: 'Olga is a TECA trained Cleaning Technician who keeps our regular contracts running smoothly, visit after visit, to the same high standard.',
  },
  {
    name: 'Senit',
    img: 'team-senit',
    role: 'Specialist Technician',
    desc: 'Senit is a TECA trained Specialist Technician. She brings extra experience to our more demanding sites, where a careful, methodical approach matters most.',
  },
  {
    name: 'Kigabi',
    img: 'team-kigabi',
    role: 'Specialist Technician',
    desc: 'Kigabi is a TECA trained Specialist Technician, trusted with our more complex environments and the jobs that need a steady pair of hands.',
  },
  {
    name: 'Jonny',
    img: 'team-jonny',
    role: 'Cleaning Technician',
    desc: 'Jonny is a TECA trained Cleaning Technician, focused on leaving every space clean, tidy and ready for the people who use it.',
  },
  {
    name: 'Freddy',
    img: 'team-freddy',
    role: 'Cleaning Technician',
    desc: 'Freddy is a TECA trained Cleaning Technician who brings a thorough, reliable approach to every site he works on.',
  },
]

export default function TeamPage() {
  return (
    <>
      <Seo
        title="Meet the Team | Dean & Co Cleaning Leeds"
        description="Meet the DBS checked, TECA trained team behind Dean & Co, the founder led commercial cleaning company in Leeds."
        path="/team"
      />

      <PageHero
        crumbs={[{ href: '/about', label: 'About' }]}
        current="Meet the team"
        eyebrow="Our people"
        title="Meet the team"
        lead="A company is only as good as its staff, and we're proud of ours."
      />

      <section className="section bg-ebb2">
        <div className="wrap">
          <ul className="team">
            {TEAM.map((m, i) => {
              const isLead = i === 0
              const Heading = isLead ? 'h2' : 'h3'
              const firstName = m.alt || m.name
              return (
                <li className={`member reveal${isLead ? ' lead-card' : ''}`} key={m.name}>
                  <div className="photo has-img">
                    <img
                      src={`/assets/img/${m.img}${isLead ? '' : '-sm'}.webp`}
                      alt={`${firstName} from the Dean & Co team, in front of the Dean & Co logo`}
                      width={isLead ? 800 : 440}
                      height={isLead ? 840 : 462}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="body">
                    <Heading>{m.name}</Heading>
                    <p className="role">{m.role}</p>
                    <p className="desc">{m.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap split">
          <div className="reveal">
            <h2>Join the team</h2>
            <p>We&apos;re always happy to hear from reliable, caring people who take pride in their work.</p>
            <Link className="link-arrow" href="/careers">
              Careers <ArrowRightIcon />
            </Link>
          </div>
          <div></div>
        </div>
      </section>

      <CtaBand sectionClassName="section tight" />
    </>
  )
}
