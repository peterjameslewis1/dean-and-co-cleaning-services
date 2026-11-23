import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function AccessibilityPage() {
  return (
    <>
      <Seo
        title="Accessibility Statement | Dean & Co Cleaning Leeds"
        description="How accessible www.deancocleaning.co.uk is, and how to contact us if you have difficulty using it."
        path="/accessibility"
      />

      <PageHero current="Accessibility Statement" eyebrow="Legal" title="Accessibility Statement" />

      <section className="section">
        <div className="wrap narrow prose">
          <p className="lead">This statement applies to www.deancocleaning.co.uk. We want as many people as possible to be able to use this website.</p>
          <h2>Using this website</h2>
          <p>We've designed this website so that you can:</p>
          <ul>
          <li>change colours, contrast levels and fonts using your browser or device settings</li>
          <li>zoom in up to 300% and still read the text</li>
          <li>move around the website using just a keyboard</li>
          <li>use the website with a screen reader</li>
          <li>turn off animations using your device's reduced motion setting</li>
          </ul>
          <h2>Our standard</h2>
          <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) version 2.2 at AA standard. We checked every page with automated accessibility testing and by moving through the website with a keyboard.</p>
          <h2>Known limitations</h2>
          <ul>
          <li>Some links take you to other websites, such as Trustpilot, Emergency Cleaning Yorkshire and The Emergency Cleaning Academy. We are not responsible for how accessible those websites are.</li>
          <li>Our photographs have text descriptions, but they may not describe every detail of an image.</li>
          </ul>
          <h2>Feedback and contact</h2>
          <p>If you have difficulty using this website, or you need information in a different format, please email <a href="mailto:operations@deancocleaning.co.uk?subject=Accessibility">operations@deancocleaning.co.uk</a> or call <a href="tel:+441134034779">0113 403 4779</a>. Tell us which page you were on and what the problem was, and we'll do our best to help.</p>
          <h2>If you're not happy with our response</h2>
          <p>You can contact the <a href="https://www.equalityadvisoryservice.com" target="_blank" rel="noopener noreferrer">Equality Advisory and Support Service<span className="sr-only"> (opens in a new tab)</span></a> for advice.</p>
          <h2>Preparation of this statement</h2>
          <p>This statement was prepared on 5 November 2026.</p>
        </div>
      </section>
    </>
  )
}
