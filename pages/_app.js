import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/fonts.css'
import '../styles/site.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:site_name" content="Dean & Co Cleaning Services" key="og:site_name" />
        <meta name="theme-color" content="#174545" />
        <link rel="icon" href="/assets/brand/deanco-logo-device.svg" type="image/svg+xml" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
