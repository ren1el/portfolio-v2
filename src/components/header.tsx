import styles from '../styles/Header.module.scss'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Header = (): JSX.Element => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.brand}>Reniel Ocampo</div>
      <Navbar />
      <Sidebar />
      <button className={styles.contact}>Contact</button>
    </header>
  )
}

export default Header
