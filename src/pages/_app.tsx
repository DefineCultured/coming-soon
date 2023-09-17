import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

import SEO from '../../next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script defer data-domain='definecultured.com' src='https://analytics.definecultured.com/js/script.js'></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
