import styles from '../styles/Socials.module.scss'
import IconDribbble from '../icons/Dribbble'
import IconGitHub from '../icons/GitHub'
import IconInstagram from '../icons/Instagram'
import IconLinkedin from '../icons/LinkedIn'

const Socials = (): JSX.Element => {
  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/renielocampo',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/ren1el',
    },
    {
      name: 'Dribbble',
      link: 'https://dribbble.com/ren1el',
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/ren1el',
    },
  ]

  return (
    <div className={styles.socials}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className={styles.link}
          target={'_blank'}
          rel={'noreferrer'}
        >
          {social.name === 'LinkedIn' && <IconLinkedin />}
          {social.name === 'GitHub' && <IconGitHub />}
          {social.name === 'Dribbble' && <IconDribbble />}
          {social.name === 'Instagram' && <IconInstagram />}
        </a>
      ))}
    </div>
  )
}

export default Socials
