import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import useScrollDirection, { Scrolling } from '../hooks/useScrollDirection'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('noScroll')
    } else {
      document.body.classList.remove('noScroll')
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        scrollDirection={scrollDirection}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main
        className={`container ${styles.mainContainer} ${
          scrollDirection === Scrolling.UP ? 'headerVisible' : ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
