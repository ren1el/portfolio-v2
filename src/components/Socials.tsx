import styles from '../styles/Socials.module.scss'
import IconDribbble from '../icons/Dribbble'
import IconGitHub from '../icons/GitHub'
import IconInstagram from '../icons/Instagram'
import IconLinkedin from '../icons/LinkedIn'

const Socials = (): JSX.Element => {
  return (
    <div className={styles.socials}>
      <a className={styles.link} href={'https://linkedin.com/in/renielocampo'}>
        <IconLinkedin />
      </a>
      <a className={styles.link} href={'https://github.com/ren1el'}>
        <IconGitHub />
      </a>
      <a className={styles.link} href={'https://dribbble.com/ren1el'}>
        <IconDribbble />
      </a>
      <a className={styles.link} href={'https://instagram.com/ren1el'}>
        <IconInstagram />
      </a>
    </div>
  )
}

export default Socials
