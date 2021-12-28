import styles from '../styles/Experience.module.scss'

const Experience = (): JSX.Element => {
  const education = [
    {
      heading: 'University of California, Irvine',
      description: 'B.S. Computer Science with a specialization in systems and software',
    },
  ]

  const experience = [
    {
      heading: 'Multi Media, LLC',
      subheading: 'Software Engineer',
      description: `Etiam vitae ipsum congue, lobortis massa a, suscipit metus. Duis auctor mattis felis
        quis ultrices. Suspendisse eu laoreet nunc. Proin orci urna, congue ac turpis
        fermentum, porta suscipit risus.`,
    },
    {
      heading: 'UC Irvine UROP',
      subheading: 'Research Assistant',
      description: `Donec in ultrices augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum at nibh quis libero vulputate varius. Nulla condimentum felis sit amet erat
        viverra, eu scelerisque tellus fermentum.`,
    },
    {
      heading: 'UC Irvine ICS',
      subheading: 'Python Tutor',
      description: `Mauris gravida pharetra metus, quis porttitor quam luctus et. Cras vestibulum
        consectetur turpis a venenatis. Vivamus et placerat diam, et mollis neque. Donec diam
        eros, porta efficitur sem ac, elementum lobortis massa.`,
    },
  ]

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
