import styles from '../styles/IconLinks.module.scss'
import IconDribbble from '../icons/Dribbble'
import IconGitHub from '../icons/GitHub'
import IconInstagram from '../icons/Instagram'
import IconLinkedin from '../icons/LinkedIn'
import IconLink from '../icons/Link'

type IconLink = {
  name: string
  link: string
}

type IconLinksProps = {
  iconLinks: IconLink[]
}

const IconLinks = ({ iconLinks }: IconLinksProps): JSX.Element => {
  return (
    <>
      {iconLinks.map((link, index) => (
        <a
          key={index}
          href={link.link}
          className={styles.link}
          target={'_blank'}
          rel={'noreferrer'}
          aria-label={`${link.name}`}
        >
          {link.name === 'LinkedIn' && <IconLinkedin />}
          {link.name === 'GitHub' && <IconGitHub />}
          {link.name === 'Dribbble' && <IconDribbble />}
          {link.name === 'Instagram' && <IconInstagram />}
          {link.name === 'Permalink' && <IconLink />}
        </a>
      ))}
    </>
  )
}

export default IconLinks
