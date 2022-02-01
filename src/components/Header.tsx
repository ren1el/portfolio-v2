import { useRef } from 'react'
import useScrollDirection, { Scrolling } from '../hooks/useScrollDirection'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Header.module.scss'
import { combineClasses, getEnterAnimationClasses } from '../utils/classUtils'
import Navbar from './Navbar'
import SidebarButton from './SidebarButton'

type HeaderProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
  showAnimations?: boolean
}

const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
  showAnimations = true,
}: HeaderProps): JSX.Element => {
  const scrollDirection = useScrollDirection()
  const headerRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(headerRef)

  return (
    <header
      className={combineClasses([
        'container',
        styles.header,
        showAnimations && scrollDirection === Scrolling.DOWN && styles.hide,
      ])}
      ref={headerRef}
    >
      <div
        className={combineClasses([
          styles.brand,
          showAnimations && getEnterAnimationClasses(styles, isVisible),
        ])}
      >
        Reniel Ocampo
      </div>
      <Navbar showAnimations={showAnimations} />
      <button
        className={combineClasses([
          styles.contact,
          showAnimations && getEnterAnimationClasses(styles, isVisible),
        ])}
      >
        Contact
      </button>
      <SidebarButton
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isHeaderVisible={isVisible}
      />
    </header>
  )
}

export default Header
