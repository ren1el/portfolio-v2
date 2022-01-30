import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import NextHead from '../components/NextHead'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
