// Shared site details and navigation, used by the layout and pages.
export const SITE_URL = 'https://www.deancocleaning.co.uk'

export const CONTACT = {
  mobileHref: 'tel:+447450262660',
  mobile: '07450 262660',
  officeHref: 'tel:+441134034779',
  office: '0113 403 4779',
  whatsappHref: 'https://wa.me/441134034779',
  email: 'booking@deancocleaning.co.uk',
  emailHref: 'mailto:booking@deancocleaning.co.uk',
  address: 'Suite 3, 62 Roseville Road, Leeds LS8 5DR',
  trustpilot: 'https://www.trustpilot.com/review/deancocleaning.co.uk',
}

export const SECTOR_LINKS = [
  { href: '/who-we-clean-for', label: 'All sectors' },
  { href: '/who-we-clean-for#education', label: 'Education and schools' },
  { href: '/who-we-clean-for#offices', label: 'Offices' },
  { href: '/who-we-clean-for#receptions', label: 'Waiting rooms and receptions' },
  { href: '/who-we-clean-for#hospitality', label: 'Restaurants, hospitality and weddings' },
  { href: '/who-we-clean-for#hotels', label: 'Hotel rooms' },
  { href: '/who-we-clean-for#salons', label: 'Hair and beauty salons' },
  { href: '/residential-referrals-tenancies', label: 'Residential referrals and tenancies' },
]

export const ABOUT_LINKS = [
  { href: '/about', label: 'About us' },
  { href: '/starter-kit', label: 'Green Bear starter kit' },
  { href: '/team', label: 'Meet the team' },
  { href: '/references', label: 'Client references' },
  { href: '/eco-approach', label: 'Our eco approach' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/careers', label: 'Careers' },
]

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.deancocleaning.co.uk/#business',
  name: 'Dean & Co Cleaning Services Ltd',
  alternateName: 'Dean & Co',
  url: 'https://www.deancocleaning.co.uk/',
  logo: 'https://www.deancocleaning.co.uk/assets/brand/deanco-logo-primary.svg',
  image: 'https://www.deancocleaning.co.uk/assets/img/hero.webp',
  description: 'Compliance led, eco friendly commercial cleaning in Leeds.',
  telephone: '+441134034779',
  email: 'booking@deancocleaning.co.uk',
  vatID: 'GB483520979',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 3, 62 Roseville Road',
    addressLocality: 'Leeds',
    postalCode: 'LS8 5DR',
    addressCountry: 'GB',
  },
  areaServed: { '@type': 'City', name: 'Leeds' },
  sameAs: ['https://www.trustpilot.com/review/deancocleaning.co.uk'],
}
