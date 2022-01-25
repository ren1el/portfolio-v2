import styles from '../styles/About.module.scss'
import profileImg from '../../public/images/me.png'
import Image from 'next/image'
import IconLinks from './IconLinks'
import { socialIconLinks } from '../../contentConfig'
import { useRef, useState } from 'react'
import useVisibility from '../hooks/useVisibility'
import { combineClasses } from '../utils/combineClasses'

const About = (): JSX.Element => {
  const [wasReadMorePressed, setWasReadMorePressed] = useState(false)
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
          <Image src={profileImg} alt="Headshot" priority />
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
              Howdy! I’m Reniel (pronounced reh-neel) and I’m currently a software engineer at{' '}
              <strong>Multi Media LLC</strong>, where I develop projects and interfaces related to
              live streaming and chat experiences that are enjoyed by millions of users.
            </p>
            <p>
              I attribute my start into programming when I began coding static HTML pages on
              Neopets. I’ve since developed my interests in <strong>web development</strong>,{' '}
              <strong>graphic design</strong>, and <strong>application architecture</strong>.
            </p>
            <p>
              I enjoy bridging the gap between engineering and design, and try to make sure that the
              applications I work on are not only maintanable and efficient, but also look and feel
              good to use.
            </p>
          </div>
          <div
            className={combineClasses([styles.secondSection, wasReadMorePressed && styles.display])}
          >
            <p>
              I’m currently based in southern California after having graduated from the University
              of California, Irvine. Apart from the title of engineer, I’ve also been a researcher,
              a tutor, a freelancer, and am always looking for opportunities to expand my skillset.
            </p>
            <p>
              Aside from doing computer-y things, I enjoy attending live concerts, eating a good
              bowl of poke, and I’m also currently learning French!{' '}
              <em>Petit a petit, l’oiseau fait son nid.</em>
            </p>
            <p>
              If you’ve made it this far, feel free to scroll around and learn more about my
              background. If you have any questions, comments, or want to work with me in any
              capacity, email me!{' '}
              <strong>
                →{' '}
                <a href="mailto:contact@renielocampo.com" className={'animated'}>
                  contact@renielocampo.com
                </a>
              </strong>
            </p>
          </div>
          <div className={styles.readMoreContainer}>
            <button
              className={styles.readMore}
              onClick={() => {
                setWasReadMorePressed(!wasReadMorePressed)
              }}
            >
              {wasReadMorePressed ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
