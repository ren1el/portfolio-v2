import { useRef } from 'react'
import { skills } from '../../contentConfig'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/Skills.module.scss'
import { combineClasses } from '../utils/classUtils'

const Skills = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(sectionRef, 0.25)

  return (
    <section
      id={'Skills'}
      className={combineClasses(['section', isVisible && 'enter'])}
      ref={sectionRef}
    >
      <aside className={'aside'}>
        <h2 className={'sectionHeader'}>Skills</h2>
      </aside>
      <div className={combineClasses(['content', styles.skillsContent])}>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className={styles.skillTitle}>{skill.title}</h3>
            <ul className={styles.skillList}>
              {skill.skillList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
