import Head from 'next/head'
import { SITE_URL } from './site'

// Per-page <head> tags. `path` is the page's clean URL, e.g. "/about".
// Pass `noindex` for pages like the 404, and `schema` for any extra JSON-LD.
export default function Seo({ title, description, path, image = '/assets/img/hero.webp', noindex = false, schema }) {
  const url = path ? `${SITE_URL}${path}` : null
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex" />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </Head>
  )
}
