import styles from '../styles/SidebarButton.module.scss'
import { combineClasses } from '../utils/combineClasses'

type SidebarButtonProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
  isHeaderVisible: boolean
}

const SidebarButton = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isHeaderVisible,
}: SidebarButtonProps): JSX.Element => {
  return (
    <button
      className={combineClasses([
        styles.button,
        isSidebarOpen && styles.open,
        isHeaderVisible && styles.enter,
      ])}
      onClick={() => {
        setIsSidebarOpen(!isSidebarOpen)
      }}
    >
      <span className={`${styles.iconLine} ${styles.top}`} />
      <span className={`${styles.iconLine} ${styles.bottom}`} />
    </button>
  )
}

export default SidebarButton
