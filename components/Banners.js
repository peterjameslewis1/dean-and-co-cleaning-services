import { ExternalIcon } from './icons'

// The two signpost banners: TECA training for employers, and ECY for specialist cleaning.
// `headingLevel` lets each page keep a correct heading order ('h2' or 'h3').
export default function Banners({ headingLevel = 'h3' }) {
  const H = headingLevel
  return (
    <div className="banners">
      <div className="banner peach reveal">
        <H>Are you an employer?</H>
        <p>
          Are you an employer wishing to put your in house cleaners through formal training? See our sister company, TECA
          Group Ltd, our Leeds based training school.
        </p>
        <a className="btn btn-primary" href="https://www.emergencycleaningacademy.co.uk" target="_blank" rel="noopener noreferrer">
          Visit TECA <ExternalIcon />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
      <div className="banner sandy reveal">
        <H>Have a specialist cleaning enquiry?</H>
        <p>
          If you have a specialist cleaning enquiry, for example cleaning at heights, confined spaces, blood, faeces,
          sharps, vomit or trauma, please visit our reactive division, Emergency Cleaning Yorkshire.
        </p>
        <a className="btn btn-primary" href="https://www.emergencycleaningyorkshire.com" target="_blank" rel="noopener noreferrer">
          Visit ECY <ExternalIcon />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  )
}
