import { useRef } from 'react'
import { otherProjects } from '../../contentConfig'
import useVisibility from '../hooks/useVisibility'
import styles from '../styles/OtherProjects.module.scss'
import { combineClasses } from '../utils/classUtils'
import IconLinks from './IconLinks'

const OtherProjects = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(sectionRef, 0.25)

  return (
    <section
      id={'OtherProjects'}
      className={combineClasses(['section', isVisible && 'enter'])}
      ref={sectionRef}
    >
      <aside className={'aside'}>
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
