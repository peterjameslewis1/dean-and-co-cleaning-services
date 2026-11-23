import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CONTACT, SECTOR_LINKS, ABOUT_LINKS } from './site'
import { PhoneIcon, MailIcon, WhatsAppIcon, ChevronDownIcon, MenuIcon, CloseIcon, QuoteDocIcon } from './icons'

const SUBMENUS = [
  { id: 'sectors', label: 'Who we clean for', links: SECTOR_LINKS },
  { id: 'about', label: 'About', links: ABOUT_LINKS },
]

// Marks the link for the current page (hash links never count as the current page).
function useIsCurrent() {
  const { pathname } = useRouter()
  return (href) => !href.includes('#') && href === pathname
}

const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover:hover)').matches

export default function Header() {
  const router = useRouter()
  const isCurrent = useIsCurrent()
  const [scrolled, setScrolled] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)
  const buttonRefs = useRef({})

  // Header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close desktop dropdowns when clicking anywhere outside the nav
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenSub(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  // Close menus after navigating
  useEffect(() => {
    const close = () => {
      setOpenSub(null)
      setDrawerOpen(false)
    }
    router.events.on('routeChangeStart', close)
    router.events.on('hashChangeStart', close)
    return () => {
      router.events.off('routeChangeStart', close)
      router.events.off('hashChangeStart', close)
    }
  }, [router.events])

  // Lock page scroll while the mobile drawer is open, and close it with Escape
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    if (!drawerOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false)
        toggleRef.current && toggleRef.current.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  const linkProps = (href) => (isCurrent(href) ? { 'aria-current': 'page' } : {})

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="topbar">
          <div className="wrap topbar-inner">
            <span className="topbar-k">Call us</span>
            <a href={CONTACT.mobileHref} aria-label={`Mobile, ${CONTACT.mobile}`}>
              <PhoneIcon />
              <span className="tb-l">Mobile</span> {CONTACT.mobile}
            </a>
            <a href={CONTACT.officeHref} aria-label={`Office, ${CONTACT.office}`}>
              <PhoneIcon />
              <span className="tb-l">Office</span> {CONTACT.office}
            </a>
            <a
              className="tb-wa"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp us on ${CONTACT.office} (opens in a new tab)`}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="wrap header-inner">
          <Link className="brand" href="/" aria-label="Dean & Co Cleaning Services, home">
            <img src="/assets/brand/deanco-logo-primary.svg" alt="Dean & Co Eco-Friendly Cleaning" width="179" height="50" />
          </Link>
          <nav className="nav" aria-label="Main" ref={navRef}>
            <ul>
              {SUBMENUS.map((menu) => {
                const isOpen = openSub === menu.id
                const setOpen = (v) => setOpenSub(v ? menu.id : null)
                return (
                  <li
                    key={menu.id}
                    className={`has-sub${isOpen ? ' open' : ''}`}
                    onMouseEnter={() => canHover() && setOpen(true)}
                    onMouseLeave={() => canHover() && setOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setOpen(false)
                        buttonRefs.current[menu.id] && buttonRefs.current[menu.id].focus()
                      }
                    }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
                    }}
                  >
                    <button
                      ref={(el) => (buttonRefs.current[menu.id] = el)}
                      className="nav-top"
                      aria-expanded={isOpen ? 'true' : 'false'}
                      aria-controls={`sub-${menu.id}`}
                      onClick={() => setOpen(!isOpen)}
                    >
                      {menu.label} <ChevronDownIcon />
                    </button>
                    <ul className="sub" id={`sub-${menu.id}`}>
                      {menu.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} {...linkProps(l.href)}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              })}
              <li>
                <Link href="/faqs" {...linkProps('/faqs')}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" {...linkProps('/contact')}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-cta">
            <a className="btn btn-outline btn-sm" href={CONTACT.mobileHref}>
              <PhoneIcon />
              Call me
            </a>
            <a className="btn btn-primary btn-sm" href={CONTACT.emailHref}>
              <MailIcon />
              Email me
            </a>
          </div>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-expanded={drawerOpen ? 'true' : 'false'}
            aria-controls="drawer"
            aria-label="Menu"
            onClick={() => setDrawerOpen((o) => !o)}
          >
            <MenuIcon className="i-open" style={drawerOpen ? { display: 'none' } : undefined} />
            <span className="i-close" style={drawerOpen ? undefined : { display: 'none' }}>
              <CloseIcon />
            </span>
          </button>
        </div>
      </header>
      <div className={`drawer${drawerOpen ? ' open' : ''}`} id="drawer">
        <nav aria-label="Mobile">
          <ul>
            <li>
              <Link href="/" {...linkProps('/')}>
                Home
              </Link>
            </li>
            {SUBMENUS.map((menu) => (
              <li key={menu.id}>
                <div className="group-title">{menu.label}</div>
                <ul className="subl">
                  {menu.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} {...linkProps(l.href)}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link href="/faqs" {...linkProps('/faqs')}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" {...linkProps('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="btn-row">
          <Link className="btn btn-primary" href="/contact#quote">
            <QuoteDocIcon />
            Request a quote
          </Link>
        </div>
      </div>
    </>
  )
}
