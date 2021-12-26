import styles from '../styles/Skills.module.scss'

const Skills = (): JSX.Element => {
  const skills = [
    {
      title: 'Languages',
      skillList: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'Java', 'SQL'],
    },
    {
      title: 'Frameworks & Libraries',
      skillList: ['React', 'Redux', 'Gatsby', 'Next.js', 'Django', 'Express', 'Bootstrap'],
    },
    {
      title: 'Tools',
      skillList: ['AWS', 'MongoDB', 'Git', 'Node'],
    },
    {
      title: 'Design',
      skillList: ['Photoshop', 'Figma', 'Adobe XD'],
    },
  ]

  return (
    <section className={'section'}>
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
