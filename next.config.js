// Old .html page URLs (from the static redesign) redirect to the clean Next.js routes.
const HTML_PAGES = [
  'about',
  'accessibility',
  'careers',
  'complaints-procedure',
  'compliance',
  'contact',
  'cookie-policy',
  'eco-approach',
  'faqs',
  'privacy-policy',
  'references',
  'residential-referrals-tenancies',
  'starter-kit',
  'team',
  'website-terms',
  'who-we-clean-for',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site serves pre-sized .webp images with plain <img> tags and never uses next/image,
  // so Next's /_next/image optimizer is switched off. This also removes the attack surface
  // of known image-optimizer vulnerabilities in Next 13.x.
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...HTML_PAGES.map((page) => ({ source: `/${page}.html`, destination: `/${page}`, permanent: true })),
    ]
  },
}

module.exports = nextConfig
