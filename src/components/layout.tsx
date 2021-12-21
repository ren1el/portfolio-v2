import Footer from './Footer'
import Header from './Header'
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
