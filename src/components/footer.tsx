import Socials from './Socials'
import styles from '../styles/Footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className="container">
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Thanks for stopping by!</h2>
        <h2 className={styles.heading}>Something clever here probably.</h2>
      </div>
      <div className={styles.emailContainer}>
        <button className={styles.contact}>Email me</button>
        <h2 className={styles.email}>contact@renielocampo.com</h2>
      </div>
      <div className={styles.creditsContainer}>
        <div className={styles.credits}>
          <span>
            Copyright © 2022, <strong>Reniel Ocampo</strong>.
          </span>
          <span>
            Built using <a href={'https://nextjs.org/'}>Next.js</a>.
          </span>
        </div>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
