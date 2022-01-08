import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('noScroll')
    } else {
      document.body.classList.remove('noScroll')
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className={`container ${styles.mainContainer}`}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
