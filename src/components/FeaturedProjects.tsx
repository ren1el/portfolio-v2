import styles from '../styles/FeaturedProjects.module.scss'
import Image from 'next/image'
import IconLinks from './IconLinks'
import { featuredProjects } from '../../contentConfig'
import useVisibility from '../hooks/useVisibility'
import { useRef } from 'react'

const FeaturedProjects = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useVisibility(sectionRef, 0.25)

  return (
    <section className={`section ${isVisible ? 'enter' : ''}`} id={'Work'} ref={sectionRef}>
      <aside className={`aside`}>
        <h2 className={'sectionHeader'}>Featured Projects</h2>
      </aside>
      <div className={'content'}>
        {featuredProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div
              className={`${styles.thumbnailContainer} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <Image src={project.imgSrc} alt={`${project.title} thumbnail`} />
            </div>
            <div className={styles.description}>
              <div className={styles.titleLinksContainer}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.iconLinks && <IconLinks iconLinks={project.iconLinks} />}
              </div>
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
