import styles from '../styles/SidebarButton.module.scss'

type SidebarButtonProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
}

const SidebarButton = ({ isSidebarOpen, setIsSidebarOpen }: SidebarButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button} ${isSidebarOpen ? styles.open : ''}`}
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
