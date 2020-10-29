import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

import SEO from '../../next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-F6VJZ5H2G5'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-F6VJZ5H2G5');`
          }}
        ></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
