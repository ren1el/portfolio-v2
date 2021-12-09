import styles from '../styles/Navbar.module.scss'

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav__list']}>
        <li className={`${styles['nav__link']} ${styles['nav__link-active']}`}>
          About
        </li>
        <li className={styles['nav__link']}>Work</li>
        <li className={styles['nav__link']}>Experience</li>
        <li className={styles['nav__link']}>Skills</li>
      </ul>
    </nav>
  )
}

export default Navbar
