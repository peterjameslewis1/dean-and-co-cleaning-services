import Link from 'next/link'
import { CONTACT } from './site'
import { PhoneIcon, MailIcon, QuoteDocIcon } from './icons'

// The "Call me / Email me / Request a quote" trio.
// `light` is for dark backgrounds (bg-blue sections and the CTA band).
export function CtaButtonsInner({ light = false }) {
  const ghost = light ? 'btn btn-ghost-light' : 'btn btn-outline'
  const main = light ? 'btn btn-light' : 'btn btn-primary'
  return (
    <>
      <a className={ghost} href={CONTACT.mobileHref}>
        <PhoneIcon />
        Call me
      </a>
      <a className={ghost} href={CONTACT.emailHref}>
        <MailIcon />
        Email me
      </a>
      <Link className={main} href="/contact#quote">
        <QuoteDocIcon />
        Request a quote
      </Link>
    </>
  )
}

export default function CtaButtons({ light = false }) {
  return (
    <div className="cta-inline">
      <CtaButtonsInner light={light} />
    </div>
  )
}
