import styles from '../styles/SidebarButton.module.scss'
import { combineClasses, getEnterAnimationClasses } from '../utils/classUtils'

type SidebarButtonProps = {
  isSidebarOpen: boolean
  setIsSidebarOpen: (val: boolean) => void
  isHeaderVisible: boolean
  showAnimations: boolean
}

const SidebarButton = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isHeaderVisible,
  showAnimations,
}: SidebarButtonProps): JSX.Element => {
  return (
    <button
      className={combineClasses([
        styles.button,
        isSidebarOpen && styles.open,
        showAnimations && getEnterAnimationClasses(styles, isHeaderVisible),
      ])}
      onClick={() => {
        setIsSidebarOpen(!isSidebarOpen)
      }}
      aria-label={'Menu'}
    >
      <span className={combineClasses([styles.iconLine, styles.top])} />
      <span className={combineClasses([styles.iconLine, styles.bottom])} />
    </button>
  )
}

export default SidebarButton
