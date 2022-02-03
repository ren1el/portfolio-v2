import { useRef } from 'react'
import { education, experience } from '../../contentConfig'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Experience.module.scss'
import { combineClasses } from '../utils/classUtils'

const Experience = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(sectionRef, 0.25)

  return (
    <section
      id={'Experience'}
      className={combineClasses(['section', isVisible && 'enter'])}
      ref={sectionRef}
    >
      <aside className={'aside'}>
        <h2 className={'sectionHeader'}>Experience</h2>
      </aside>
      <div className={'content'}>
        <div className={styles.subsection}>
          <h2 className={styles.title}>Education</h2>
          {education.map((item, index) => (
            <div key={index} className={styles.table}>
              <div className={combineClasses([styles.leftColumn, styles.education])}>
                <span className={styles.heading}>{item.heading}</span>
              </div>
              <div className={styles.rightColumn}>{item.description}</div>
            </div>
          ))}
        </div>
        <div className={styles.subsection}>
          <h2 className={styles.title}>Work Experience</h2>
          {experience.map((item, index) => (
            <div key={index} className={styles.table}>
              <div className={styles.leftColumn}>
                <span className={styles.heading}>{item.heading}</span>
                {item.subheading}
              </div>
              <div className={styles.rightColumn}>
                <ul className={styles.description}>
                  {item.descriptionPoints.map((bullet, index) => (
                    <li key={index} className={styles.bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
