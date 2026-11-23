import { useEffect, useRef } from 'react'
import Link from 'next/link'

const KEY = 'dc_cookie_consent'

export function getConsent() {
  try {
    const m = document.cookie.match(new RegExp('(?:^|; )' + KEY + '=([^;]*)'))
    return m ? decodeURIComponent(m[1]) : null
  } catch (e) {
    return null
  }
}

function setConsent(value) {
  try {
    document.cookie =
      KEY +
      '=' +
      encodeURIComponent(value) +
      '; max-age=31536000; path=/; SameSite=Lax' +
      (location.protocol === 'https:' ? '; Secure' : '')
  } catch (e) {}
}

// Reopens the cookie banner from anywhere (footer, cookie policy page). The layout listens for this event.
export const COOKIE_SETTINGS_EVENT = 'dc:cookie-settings'
export function openCookieSettings() {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))
}

// Add consented analytics here at launch. Nothing is loaded today.
export function loadAnalytics() {}

// Cookie consent banner. No non-essential cookies are set unless accepted.
// `show` / `setShow` live in the layout so the footer's "Cookie Settings" button can reopen it.
export default function CookieBanner({ show, setShow, focusOnShow }) {
  const acceptRef = useRef(null)

  useEffect(() => {
    const c = getConsent()
    if (!c) setShow(true)
    else if (c === 'accepted') loadAnalytics()
  }, [setShow])

  useEffect(() => {
    if (show && focusOnShow && acceptRef.current) acceptRef.current.focus()
  }, [show, focusOnShow])

  const choose = (value) => {
    setConsent(value)
    setShow(false)
    if (value === 'accepted') loadAnalytics()
  }

  return (
    <div className={`cookie${show ? ' show' : ''}`} id="cookie" role="dialog" aria-labelledby="cookie-h" aria-live="polite">
      <h2 id="cookie-h">Cookies on this website</h2>
      <p>
        We use essential cookies to make this website work. We&apos;d also like to set analytics cookies to help us improve
        it, but only if you accept them. See our <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className="btn-row">
        <button type="button" className="btn btn-primary" ref={acceptRef} onClick={() => choose('accepted')}>
          Accept
        </button>
        <button type="button" className="btn btn-primary" onClick={() => choose('rejected')}>
          Reject
        </button>
      </div>
    </div>
  )
}
