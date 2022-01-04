import { otherProjects } from '../../contentConfig'
import styles from '../styles/OtherProjects.module.scss'
import IconLinks from './IconLinks'

const OtherProjects = (): JSX.Element => {
  return (
    <section className={'section'}>
      <aside className={`aside`}>
        <h2 className={'sectionHeader'}>Other Projects</h2>
      </aside>
      <div className={'content'}>
        {otherProjects.map((project, index) => (
          <div key={index} className={styles.table}>
            <div className={styles.leftColumn}>
              <span className={styles.type}>{project.type}</span>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.titleLinksContainer}>
                <span className={styles.title}>{project.title}</span>
                {project.iconLinks && <IconLinks iconLinks={project.iconLinks} />}
              </div>
              <div>{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
