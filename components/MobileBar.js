import { CONTACT } from './site'
import { PhoneIcon, WhatsAppIcon, MailIcon } from './icons'

// Sticky quick-contact bar shown on small screens.
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="region" aria-label="Quick contact">
      <a className="btn btn-outline" href={CONTACT.mobileHref}>
        <PhoneIcon />
        Call
      </a>
      <a
        className="btn btn-outline"
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp (opens in a new tab)"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a className="btn btn-primary" href={CONTACT.emailHref}>
        <MailIcon />
        Email
      </a>
    </div>
  )
}
