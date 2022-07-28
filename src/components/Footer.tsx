import IconLinks from './IconLinks'
import styles from '../styles/Footer.module.scss'
import { socialIconLinks } from '../../contentConfig'
import { useRef } from 'react'
import useVisibility from '../hooks/useVisibility'
import { combineClasses } from '../utils/classUtils'

const Footer = (): JSX.Element => {
  const footerRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(footerRef, 0.25)

  return (
    <footer
      className={combineClasses(['container', styles.footerContainer, isVisible && styles.enter])}
      ref={footerRef}
    >
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Thanks for stopping by!</h2>
        <h2 className={styles.heading}>Salut, à bientôt !</h2>
      </div>
      <div id={'Contact'} className={styles.emailContainer}>
        <a href="mailto:renielxocampo@gmail.com" className={styles.contact}>
          Email me
        </a>
        <h2 className={styles.email}>renielxocampo@gmail.com</h2>
      </div>
      <div className={styles.creditsContainer}>
        <div className={styles.credits}>
          <span>
            Copyright © 2022, <strong>Reniel Ocampo</strong>.
          </span>
          <span>
            Built using{' '}
            <a href={'https://nextjs.org/'} target={'_blank'} rel={'noreferrer'}>
              Next.js
            </a>
            .
          </span>
        </div>
        <div className={styles.socials}>
          <IconLinks iconLinks={socialIconLinks} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
