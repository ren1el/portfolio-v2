import { Scrolling } from '../hooks/useScrollDirection'
import styles from '../styles/Header.module.scss'
import Navbar from './Navbar'
import SidebarButton from './SidebarButton'

type HeaderProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
  scrollDirection: Scrolling
}

const Header = ({ isSidebarOpen, setIsSidebarOpen, scrollDirection }: HeaderProps): JSX.Element => {
  return (
    <header
      className={`container ${styles.header} ${
        scrollDirection === Scrolling.DOWN ? styles.hide : ''
      }`}
    >
      <div className={styles.brand}>Reniel Ocampo</div>
      <Navbar />
      <button className={styles.contact}>Contact</button>
      <SidebarButton isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </header>
  )
}

export default Header
