import { education, experience } from '../../contentConfig'
import styles from '../styles/Experience.module.scss'

const Experience = (): JSX.Element => {
  return (
    <section className={'section'}>
      <aside className={`aside`}>
        <h2 className={'sectionHeader'}>Experience</h2>
      </aside>
      <div className={'content'}>
        <div className={styles.subsection}>
          <h2 className={styles.title}>Education</h2>
          {education.map((item, index) => (
            <div key={index} className={styles.table}>
              <div className={styles.leftColumn}>
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
              <div className={styles.rightColumn}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
