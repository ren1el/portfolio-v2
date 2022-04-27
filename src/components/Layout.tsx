import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.scss'
import { combineClasses } from '../utils/classUtils'
import SkipToContent from './SkipToContent'
import RecentSong from './RecentSong'
import ProgressBar from './ProgressBar'

type LayoutProps = {
  children: React.ReactNode
  showAnimations?: boolean
  showFooter?: boolean
}

const Layout = ({
  children,
  showAnimations = true,
  showFooter = true,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <SkipToContent />
      <ProgressBar />
      <Header showAnimations={showAnimations} />
      <main id="content" className={combineClasses(['container', styles.mainContainer])}>
        {children}
      </main>
      <RecentSong isVisible isDesktop />
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
