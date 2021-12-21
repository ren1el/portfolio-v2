import { useState } from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0)
  const labels = ['About', 'Work', 'Experience', 'Skills'] // TODO: get as static props

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {labels.map((label, index) => {
          return (
            <li
              key={index}
              className={`${styles.item} ${activeItem === index && styles.active}`}
              onMouseOver={() => {
                setActiveItem(index)
              }}
              onMouseOut={() => {
                setActiveItem(0)
              }}
            >
              <a href="#">{label}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
