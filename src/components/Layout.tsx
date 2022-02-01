import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { combineClasses } from '../utils/classUtils'

type LayoutProps = {
  children: React.ReactNode
  showAnimations?: boolean
  showFooter?: boolean
}

const Layout = ({
  children,
  showAnimations = true,
  showFooter = true,
}: LayoutProps): JSX.Element => {
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
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        showAnimations={showAnimations}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className={combineClasses(['container', styles.mainContainer])}>{children}</main>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
