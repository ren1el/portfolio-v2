import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen])

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
    <>
      <nav className={styles.nav} ref={navRef}>
        <ul className={styles.list}>
          <li className={`${styles.item} ${styles.itemActive}`}>
            <a
              href="#"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              About
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="#"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Work
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="#"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Experience
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="#"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Skills
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={`${styles.button} ${isOpen ? styles.open : ''}`}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <span className={`${styles.iconLine} ${styles.top}`} />
        <span className={`${styles.iconLine} ${styles.bottom}`} />
      </button>
    </>
  )
}

export default Sidebar
