import { useRef } from 'react'
import useScrollDirection, { Scrolling } from '../hooks/useScrollDirection'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Header.module.scss'
import Navbar from './Navbar'
import SidebarButton from './SidebarButton'

type HeaderProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
}

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps): JSX.Element => {
  const scrollDirection = useScrollDirection()
  const headerRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(headerRef)

  return (
    <header
      className={`container ${styles.header} ${
        scrollDirection === Scrolling.DOWN ? styles.hide : ''
      }`}
      ref={headerRef}
    >
      <div
        className={`${styles.brand} ${
          isVisible ? `${styles.enter} ${styles.transitionDelay}` : ''
        }`}
      >
        Reniel Ocampo
      </div>
      <Navbar />
      <button
        className={`${styles.contact} ${
          isVisible ? `${styles.enter} ${styles.transitionDelay}` : ''
        }`}
      >
        Contact
      </button>
      <SidebarButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </header>
  )
}

export default Header
