import CtaButtons from './CtaButtons'

const STEPS = [
  { title: 'Site visit', text: 'We visit your building to see the space and talk through what you need.' },
  {
    title: 'Bespoke written quotation',
    text: 'You receive a written quotation tailored to your site, your schedule and your standards.',
  },
  { title: 'We assign your cleaner', text: 'We match you with your cleaner, so you see a familiar face from the start.' },
  { title: 'Start date', text: 'We agree a start date that suits you, and your cleaning begins.' },
  {
    title: 'Site visits and check ins',
    text: 'During the first three months, we regularly visit your cleaner on site to make sure standards are right, and we check in with you regularly too.',
  },
  {
    title: 'Audited all year round',
    text: 'After that, our team is audited regularly throughout the year. Our compliance manager has years of experience preparing settings for CQC and Ofsted inspections, and every site we look after is held to the same high standard.',
  },
]

// "How a contract starts" six-step process, followed by the contact buttons.
export default function ContractSteps({ sectionClassName = 'section' }) {
  return (
    <section className={sectionClassName} aria-labelledby="process-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Getting started</div>
            <h2 id="process-h">How a contract starts</h2>
          </div>
          <p>From the first visit onwards, here&apos;s what happens when you choose Dean &amp; Co.</p>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step reveal" key={s.title}>
              <span className="n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <CtaButtons />
      </div>
    </section>
  )
}
