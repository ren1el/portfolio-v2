import { useRef, useState } from 'react'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Navbar.module.scss'

const Navbar = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0)
  const labels = ['About', 'Work', 'Experience', 'Skills'] // TODO: get as static props
  const navRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(navRef)

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.enter : ''}`} ref={navRef}>
      <ul className={styles.list}>
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              className={`${styles.item} ${activeItem === index && styles.active}
                ${isVisible ? styles.itemEnter : ''}`}
              onMouseOver={() => {
                setActiveItem(index)
              }}
              onMouseOut={() => {
                setActiveItem(0)
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
