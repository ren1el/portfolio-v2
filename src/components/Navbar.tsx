import { useRef, useState } from 'react'
import useCurrentSection, { Section } from '../hooks/useCurrentSection'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Navbar.module.scss'
import { combineClasses } from '../utils/combineClasses'

export const getItemColorClass = (
  label: string,
  index: number,
  hoveringItem: number,
  currentSection: Section
): string => {
  if (hoveringItem !== -1) {
    if (hoveringItem !== index) {
      return styles.inactive
    } else {
      return styles.active
    }
  } else {
    if (currentSection === label) {
      return styles.active
    } else {
      return ''
    }
  }
}

const Navbar = (): JSX.Element => {
  const [hoveringItem, setHoveringItem] = useState(-1)
  const labels = ['About', 'Work', 'Experience', 'Skills'] // TODO: get as static props
  const navRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(navRef)
  const currentSection = useCurrentSection()

  return (
    <nav className={combineClasses([styles.nav, isVisible && styles.enter])} ref={navRef}>
      <ul className={styles.list}>
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              className={combineClasses([
                styles.item,
                getItemColorClass(label, index, hoveringItem, currentSection),
                isVisible && styles.itemEnter,
              ])}
              onMouseOver={() => {
                setHoveringItem(index)
              }}
              onMouseOut={() => {
                setHoveringItem(-1)
              }}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <a href={label === 'About' ? '#' : `#${label}`}>{label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
