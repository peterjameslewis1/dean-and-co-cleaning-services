import { Fragment } from 'react'
import Link from 'next/link'

// Header banner for inner pages, with breadcrumbs.
// `crumbs` lists the parent pages between Home and the current page, e.g. [{ href: '/about', label: 'About' }].
// Anything passed as children (such as buttons) renders under the lead paragraph.
export default function PageHero({ crumbs = [], current, eyebrow, title, lead, children }) {
  const trail = [{ href: '/', label: 'Home' }, ...crumbs]
  return (
    <section className="page-hero">
      <div className="hero-art" aria-hidden="true"></div>
      <div className="wrap">
        <div className="page-hero-inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            {trail.map((c) => (
              <Fragment key={c.href}>
                <Link href={c.href}>{c.label}</Link>
                <span aria-hidden="true">/</span>
              </Fragment>
            ))}
            <span aria-current="page">{current}</span>
          </nav>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
