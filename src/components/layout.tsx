import Footer from './footer'
import Header from './header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
