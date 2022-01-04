import { skills } from '../../contentConfig'
import styles from '../styles/Skills.module.scss'

const Skills = (): JSX.Element => {
  return (
    <section className={'section'} id={'Skills'}>
      <aside className={`aside`}>
        <h2 className={'sectionHeader'}>Skills</h2>
      </aside>
      <div className={`content ${styles.skillsContent}`}>
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
