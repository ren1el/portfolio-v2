import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NextHead from '../components/NextHead'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <NextHead />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
