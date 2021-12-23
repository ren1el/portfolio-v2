import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Sidebar.module.scss'

type SidebarProps = {
  isSidebarOpen: boolean
}

const Sidebar = ({ isSidebarOpen }: SidebarProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0)
  const navRef = useRef<HTMLElement | null>(null)
  const labels = ['About', 'Work', 'Experience', 'Skills'] // TODO: get as static props

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
  }

  return (
    <nav className={styles.nav} ref={navRef}>
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

export default Sidebar
