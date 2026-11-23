import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function WebsiteTermsPage() {
  return (
    <>
      <Seo
        title="Website Terms | Dean & Co Cleaning Leeds"
        description="The terms of use for www.deancocleaning.co.uk, operated by Dean & Co Cleaning Services Ltd."
        path="/website-terms"
      />

      <PageHero current="Website Terms" eyebrow="Legal" title="Website Terms" />

      <section className="section">
        <div className="wrap narrow prose">
          <p>This website is operated by Dean &amp; Co Cleaning Services Ltd, registered in England and Wales, Company No. 14648906, VAT No. 483520979. Registered office: Suite 3, 62 Roseville Road, Leeds LS8 5DR. Email: <a href="mailto:booking@deancocleaning.co.uk">booking@deancocleaning.co.uk</a>. Telephone: <a href="tel:+441134034779">0113 403 4779</a>.</p>
          <p>By using this website, you agree to these terms.</p>
          <ul>
          <li><strong>Information.</strong> We try to keep this website accurate and up to date, but it is for general information only. Nothing on it forms a contract or a binding quote. Our services are provided under a separate written agreement.</li>
          <li><strong>Intellectual property.</strong> The content, logos and designs on this website belong to us or our licensors. Please do not copy or reuse them without our written permission.</li>
          <li><strong>Acceptable use.</strong> You must not misuse this website, attempt to gain unauthorised access to it, or use it for anything unlawful.</li>
          <li><strong>Other websites.</strong> We are not responsible for the content of third party websites we link to.</li>
          <li><strong>Liability.</strong> We are not liable for any loss arising from your use of this website, except where the law does not allow us to exclude that liability. Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.</li>
          <li><strong>Changes.</strong> We may update these terms from time to time. The latest version will always be published here.</li>
          <li><strong>Law.</strong> These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
