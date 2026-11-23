import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import MobileBar from './MobileBar'
import CookieBanner, { COOKIE_SETTINGS_EVENT } from './CookieBanner'
import { LOCAL_BUSINESS_SCHEMA } from './site'

// Fades in `.reveal` elements as they scroll into view. Re-runs on every page change.
function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add('in')
            io.unobserve(x.target)
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [key])
}

// Makes wide tables keyboard scrollable (WCAG 2.1.1).
function useScrollableTables(key) {
  useEffect(() => {
    const update = () => {
      document.querySelectorAll('.table-wrap').forEach((w) => {
        if (w.scrollWidth > w.clientWidth + 1) {
          w.setAttribute('tabindex', '0')
          w.setAttribute('role', 'region')
          if (!w.getAttribute('aria-label')) {
            const c = w.querySelector('caption,th')
            w.setAttribute('aria-label', (c ? c.textContent.trim() + ' table' : 'Table') + ', scroll sideways to see more')
          }
        } else if (w.getAttribute('role') === 'region') {
          w.removeAttribute('tabindex')
          w.removeAttribute('role')
          w.removeAttribute('aria-label')
        }
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [key])
}

export default function Layout({ children }) {
  const { asPath } = useRouter()
  const [cookieOpen, setCookieOpen] = useState(false)
  const [cookieFocus, setCookieFocus] = useState(false)

  useReveal(asPath)
  useScrollableTables(asPath)

  // Any "Cookie Settings" button calls openCookieSettings(), which fires this event.
  useEffect(() => {
    const open = () => {
      setCookieFocus(true)
      setCookieOpen(true)
    }
    window.addEventListener(COOKIE_SETTINGS_EVENT, open)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open)
  }, [])

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </Head>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <MobileBar />
      <CookieBanner show={cookieOpen} setShow={setCookieOpen} focusOnShow={cookieFocus} />
    </>
  )
}
