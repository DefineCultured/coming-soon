import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Script from 'next/script'

import '../styles/globals.css'

import SEO from '../../next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        defer
        data-domain='definecultured.com'
        src='https://analytics.definecultured.com/js/script.outbound-links.file-downloads.js'
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
