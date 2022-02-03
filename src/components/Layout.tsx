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
  return (
    <>
      <Header showAnimations={showAnimations} />
      <main className={combineClasses(['container', styles.mainContainer])}>{children}</main>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
