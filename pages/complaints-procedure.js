import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function ComplaintsProcedurePage() {
  return (
    <>
      <Seo
        title="Complaints Procedure | Dean & Co Cleaning Leeds"
        description="How to raise a complaint with Dean & Co Cleaning Services Ltd and how we will respond."
        path="/complaints-procedure"
      />

      <PageHero current="Complaints Procedure" eyebrow="Legal" title="Complaints Procedure" />

      <section className="section">
        <div className="wrap narrow prose">
          <p className="lead">We believe in doing it right the first time, but if something goes wrong, we want to put it right.</p>
          <ol>
          <li><strong>Tell us.</strong> Email <a href="mailto:booking@deancocleaning.co.uk">booking@deancocleaning.co.uk</a> or call <a href="tel:+441134034779">0113 403 4779</a> with your name, the site and what happened.</li>
          <li><strong>We acknowledge it.</strong> We'll acknowledge your complaint within 2 working days.</li>
          <li><strong>We look into it.</strong> We'll review what happened and aim to give you a full response within 10 working days.</li>
          <li><strong>Escalation.</strong> If you're not satisfied, ask for your complaint to be reviewed by our Director.</li>
          </ol>
        </div>
      </section>
    </>
  )
}
