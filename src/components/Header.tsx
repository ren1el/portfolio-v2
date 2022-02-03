import { useEffect, useRef, useState } from 'react'
import useCurrentSection, { Section } from '../hooks/useCurrentSection'
import useScrollDirection, { Scrolling } from '../hooks/useScrollDirection'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Header.module.scss'
import { combineClasses, getEnterAnimationClasses } from '../utils/classUtils'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SidebarButton from './SidebarButton'

type HeaderProps = {
  showAnimations?: boolean
}

const Header = ({ showAnimations = true }: HeaderProps): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const headerRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(headerRef)
  const currentSection = useCurrentSection()
  const shouldShowFadeAnimations = showAnimations && currentSection === Section.About

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('noScroll')
    } else {
      document.body.classList.remove('noScroll')
    }
  }, [isSidebarOpen])

  return (
    <>
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
            shouldShowFadeAnimations && getEnterAnimationClasses(styles, isVisible),
          ])}
        >
          <a href={'/'}>Reniel Ocampo</a>
        </div>
        <Navbar showAnimations={shouldShowFadeAnimations} />
        <button
          className={combineClasses([
            styles.contact,
            shouldShowFadeAnimations && getEnterAnimationClasses(styles, isVisible),
          ])}
        >
          Contact
        </button>
        <SidebarButton
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isHeaderVisible={isVisible}
          showAnimations={shouldShowFadeAnimations}
        />
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  )
}

export default Header
