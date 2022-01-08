import styles from '../styles/About.module.scss'
import profileImg from '../../public/images/me.png'
import Image from 'next/image'
import IconLinks from './IconLinks'
import { socialIconLinks } from '../../contentConfig'
import { useRef } from 'react'
import useVisibility from '../hooks/useVisibility'

const About = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(sectionRef)

  return (
    <section
      className={`section ${styles.transitionDelay} ${isVisible ? 'enter' : ''}`}
      id={'About'}
      ref={sectionRef}
    >
      <aside className={`aside noBorder ${styles.aboutAside}`}>
        <div className={styles.headshotContainer}>
          <Image className={styles.headshot} src={profileImg} alt="Headshot" />
        </div>
        <div className={styles.socials}>
          <IconLinks iconLinks={socialIconLinks} />
        </div>
      </aside>
      <div className={`content ${styles.aboutContent}`}>
        <h2 className={'sectionHeader'}>About</h2>
        <div className={styles.text}>
          <div className={styles.firstSection}>
            <p>
              Sed interdum id quam et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque imperdiet ultrices tellus, nec tristique nisi laoreet et. Nullam semper
              congue ex vitae lobortis.
            </p>
            <p>
              Sed interdum id quam et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque imperdiet ultrices tellus, nec tristique nisi laoreet et. Nullam semper
              congue ex vitae lobortis.
            </p>
            <p>
              Vivamus quis mollis magna. Nulla vel mi eros. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Nam efficitur nisl ac ex mollis,
              tincidunt accumsan lacus ultricies.
            </p>
          </div>
          <div>
            <p>
              Mauris gravida pharetra metus, quis porttitor quam luctus et. Cras vestibulum
              consectetur turpis a venenatis. Vivamus et placerat diam, et mollis neque. Donec diam
              eros, porta efficitur sem ac, elementum lobortis massa.
            </p>
            <p>
              Nullam molestie leo convallis, congue ex vel, tempus lectus. Donec in ultrices augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nibh quis
              libero vulputate varius.
            </p>
            <p>
              Nullam molestie leo convallis, congue ex vel, tempus lectus. Donec in ultrices augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nibh quis
              libero vulputate varius.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
