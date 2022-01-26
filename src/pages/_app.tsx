import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reniel Ocampo</title>

        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Reniel Ocampo — I’m a software engineer that likes to design and build clean web experiences. Currently based in Southern California."
        />
        <meta name="author" content="Reniel Ocampo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Reniel Ocampo" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Reniel Ocampo" />
        <meta
          property="og:description"
          content="Reniel Ocampo — I’m a software engineer that likes to design and build clean web experiences. Currently based in Southern California."
        />
        <meta property="og:image" content="https://renielocampo.com/images/thumbnail.png" />
        <meta property="og:url" content="https://renielocampo.com" />
        <meta property="og:site_name" content="Reniel Ocampo" />

        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
