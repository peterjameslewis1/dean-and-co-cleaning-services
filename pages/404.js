import Link from 'next/link'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found | Dean & Co" description="The page you were looking for could not be found." noindex />

      <section className="section nf">
        <div className="wrap">
          <div className="code">404</div>
          <h1 style={{ fontSize: 'var(--text-xl)' }}>Page not found</h1>
          <p className="muted">Sorry, we can&apos;t find that page.</p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" href="/">
              Back to Home
            </Link>
            <Link className="btn btn-outline" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
