import Link from 'next/link'
import { CONTACT } from './site'
import { openCookieSettings } from './CookieBanner'

const EXPLORE = [
  { href: '/who-we-clean-for', label: 'Who we clean for' },
  { href: '/residential-referrals-tenancies', label: 'Residential referrals and tenancies' },
  { href: '/about', label: 'About us' },
  { href: '/team', label: 'Meet the team' },
  { href: '/references', label: 'Client references' },
  { href: '/eco-approach', label: 'Our eco approach' },
  { href: '/starter-kit', label: 'Green Bear starter kit' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/website-terms', label: 'Website Terms' },
  { href: '/complaints-procedure', label: 'Complaints Procedure' },
  { href: '/accessibility', label: 'Accessibility' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <img className="flogo" src="/assets/brand/deanco-logo-reversed.svg" alt="Dean & Co Eco-Friendly Cleaning" width="200" height="56" />
            <p style={{ maxWidth: '34ch', color: 'rgba(255,255,255,.75)' }}>
              A compliance led, boutique commercial cleaning company based in Leeds.
            </p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <button type="button" className="linklike" onClick={openCookieSettings}>
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={CONTACT.mobileHref}>{CONTACT.mobile}</a>
              </li>
              <li>
                <a href={CONTACT.officeHref}>{CONTACT.office}</a>
              </li>
              <li>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </li>
              <li style={{ color: 'rgba(255,255,255,.75)' }}>{CONTACT.address}</li>
            </ul>
          </div>
        </div>
        <div className="foot-div">
          <Link href="/">
            <strong>Dean &amp; Co</strong>
            <span>You are here</span>
          </Link>
          <a href="https://www.emergencycleaningyorkshire.com" target="_blank" rel="noopener noreferrer">
            <strong>Emergency Cleaning Yorkshire</strong>
            <span>
              Our reactive division <span className="sr-only">(opens in a new tab)</span>
            </span>
          </a>
          <a href="https://www.emergencycleaningacademy.co.uk" target="_blank" rel="noopener noreferrer">
            <strong>The Emergency Cleaning Academy</strong>
            <span>
              Our sister company and training provider <span className="sr-only">(opens in a new tab)</span>
            </span>
          </a>
        </div>
        <div className="legal">
          <p>
            Dean &amp; Co Cleaning Services Ltd. Registered in England and Wales, Company No. 14648906. VAT No. 483520979.
            Registered office: Suite 3, 62 Roseville Road, Leeds LS8 5DR. Upper Tier Waste Carrier Licence CBDU561188. ICO
            registration ZC161771.
          </p>
        </div>
      </div>
    </footer>
  )
}
