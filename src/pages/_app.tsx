import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: add canonical tag, description, social meta tags
  return (
    <>
      <Head>
        <title>Reniel Ocampo</title>
        <meta charSet="utf-8" />
        <meta name="author" content="Reniel Ocampo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
