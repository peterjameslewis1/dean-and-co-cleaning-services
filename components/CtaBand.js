import { CtaButtonsInner } from './CtaButtons'

// The dark "Request a quote" band near the bottom of most pages.
export default function CtaBand({
  title = 'Request a quote',
  text = "Tell us about your building and what you need, and we'll get back to you.",
  sectionClassName = 'section tight flush-top',
}) {
  return (
    <section className={sectionClassName} aria-labelledby="cta-h">
      <div className="wrap">
        <div className="cta-band reveal">
          <svg className="lines" viewBox="0 0 200 200" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
            <path d="M20 180C40 120 10 90 60 60s80-10 100-50" />
            <path d="M40 195c20-60 0-90 45-118s75-12 100-52" />
            <path d="M60 200c18-50 5-80 45-104s70-14 95-50" />
          </svg>
          <div>
            <h2 id="cta-h">{title}</h2>
            <p>{text}</p>
          </div>
          <div className="btn-row">
            <CtaButtonsInner light />
          </div>
        </div>
      </div>
    </section>
  )
}
