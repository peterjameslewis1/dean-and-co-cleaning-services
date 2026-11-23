import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-GB">
      <Head>
        <link rel="preload" href="/assets/fonts/poppins-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/poppins-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Adds the "js" class before first paint so scroll-reveal styles apply without a flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
