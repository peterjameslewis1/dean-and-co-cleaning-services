import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { openCookieSettings } from '../components/CookieBanner'

// Makes the inline "Cookie Settings" button look like the site's underlined links.
const COOKIE_BUTTON_STYLE = {
  background: 'none',
  border: 0,
  borderBottom: '2px solid var(--apple)',
  font: 'inherit',
  fontWeight: 600,
  color: 'inherit',
  cursor: 'pointer',
  padding: 0,
}

export default function CookiePolicyPage() {
  return (
    <>
      <Seo
        title="Cookie Policy | Dean & Co Cleaning Leeds"
        description="How www.deancocleaning.co.uk uses cookies, and how to accept, reject or change your cookie choices."
        path="/cookie-policy"
      />

      <PageHero current="Cookie Policy" eyebrow="Legal" title="Cookie Policy" />

      <section className="section">
        <div className="wrap narrow prose">
          <p>Cookies are small text files stored on your device when you visit a website. This policy explains how www.deancocleaning.co.uk uses them.</p>
          <h2>Essential cookies</h2>
          <p>These are needed for the website to work and to remember your cookie choices. They do not need your consent.</p>
          <h2>Analytics</h2>
          <p>We may use analytics to understand how visitors use the website, such as which pages are visited most, so we can improve it. Where possible we use privacy friendly analytics that do not use cookies and do not identify you personally.</p>
          <p>If we ever use an analytics tool that sets cookies, those cookies are non essential. We will only set them if you choose Accept in our cookie banner, and we will list them in the table below before they are used. If you choose Reject, no analytics cookies are set.</p>
          <h2>Cookies we use</h2>
          <div className="table-wrap"><table><thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr></thead><tbody>
          <tr><td>dc_cookie_consent</td><td>Essential</td><td>Remembers whether you accepted or rejected non essential cookies</td><td>12 months</td></tr>
          <tr><td>Analytics cookies</td><td>Analytics</td><td>None are in use at present. Any analytics cookies will be listed here before they are used, and only set if you accept them</td><td>Not applicable</td></tr>
          </tbody></table></div>
          <h2>Managing your choices</h2>
          <p>You can accept or reject non essential cookies using our cookie banner, and change your mind at any time using the <button type="button" className="link-arrow" style={COOKIE_BUTTON_STYLE} onClick={openCookieSettings}>Cookie Settings</button> link in the footer. You can also control cookies through your browser settings.</p>
          <h2>Contact us</h2>
          <p>If you have any questions, email <a href="mailto:operations@deancocleaning.co.uk">operations@deancocleaning.co.uk</a>.</p>
        </div>
      </section>
    </>
  )
}
