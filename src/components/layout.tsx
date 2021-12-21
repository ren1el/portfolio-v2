import Footer from './footer'
import Header from './header'
import styles from '../styles/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className={`container ${styles.mainContainer}`}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
