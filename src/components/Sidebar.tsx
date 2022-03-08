import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import useCurrentSection from '../hooks/useCurrentSection'
import styles from '../styles/Sidebar.module.scss'
import { combineClasses, getEnterAnimationClasses } from '../utils/classUtils'
import { getItemColorClass } from './Navbar'
import RecentSong from './RecentSong'

type SidebarProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps): JSX.Element => {
  const [hoveringItem, setHoveringItem] = useState(-1)
  const [hasOpenClass, setHasOpenClass] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const labels = ['About', 'Work', 'Experience', 'Skills'] // TODO: get as static props
  const currentSection = useCurrentSection()

  useEffect(() => {
    if (isSidebarOpen) {
      display(true)

      setTimeout(() => {
        open(true)
      }, 100)
    } else {
      open(false)

      setTimeout(() => {
        display(false)
      }, 300) // should match ms in css
    }
  }, [isSidebarOpen])

  const display = (shouldDisplay: boolean) => {
    // `display` !== `open`
    // this function sets the `display` property on the element before `open`
    // shows the fade-in/fade-out animation in `useEffect`. this is because
    // setting them at the same time does not show the animation properly.
    if (shouldDisplay) {
      navRef.current?.classList.add(styles.display)
    } else {
      navRef.current?.classList.remove(styles.display)
    }
  }

  const open = (shouldOpen: boolean) => {
    if (shouldOpen) {
      navRef.current?.classList.add(styles.open)
    } else {
      navRef.current?.classList.remove(styles.open)
    }
    setHasOpenClass(shouldOpen)
  }

  return (
    <nav className={styles.nav} ref={navRef}>
      <ul className={styles.list}>
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              className={combineClasses([
                styles.item,
                getEnterAnimationClasses(styles, hasOpenClass),
                getItemColorClass(
                  label,
                  index,
                  hoveringItem,
                  currentSection,
                  styles.active,
                  styles.inactive
                ),
              ])}
              onMouseOver={() => {
                setHoveringItem(index)
              }}
              onMouseOut={() => {
                setHoveringItem(-1)
              }}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <a
                href={label === 'About' ? '/#' : `/#${label}`}
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen)
                }}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
      <RecentSong isVisible={hasOpenClass} />
    </nav>
  )
}

export default Sidebar
