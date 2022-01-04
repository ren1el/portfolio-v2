import { useState } from 'react'
import useScrollDirection, { Scrolling } from '../hooks/useScrollDirection'
import styles from '../styles/Header.module.scss'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SidebarButton from './SidebarButton'

type HeaderProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
}

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps): JSX.Element => {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`container ${styles.header} ${
        scrollDirection === Scrolling.DOWN ? styles.hide : ''
      }`}
    >
      <div className={styles.brand}>Reniel Ocampo</div>
      <Navbar />
      <button className={styles.contact}>Contact</button>
      <SidebarButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </header>
  )
}

export default Header
