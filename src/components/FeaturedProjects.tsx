import styles from '../styles/FeaturedProjects.module.scss'
import Image from 'next/image'
import clayformee from '../../public/images/projects/clayformee.png'
import animalActions from '../../public/images/projects/animal-actions.png'
import zyllabi from '../../public/images/projects/zyllabi.png'

const FeaturedProjects = (): JSX.Element => {
  const projects = [
    {
      title: 'Clayformee',
      description: `A mobile-first e-commerce website for a client’s clay earring business. Faced with a number
        of design challenges, every decision came together to create an overall chic and pleasant
        shopping page.`,
      imgSrc: clayformee,
    },
    {
      title: 'Animal Actions',
      description: `An Alexa skill that asks kids to follow a narrative story and answer questions using their
        speech input. I worked with a team to iteratively develop this application and research ways
        to design voice user interfaces for children, refactoring and adding new features along the
        way.`,
      imgSrc: animalActions,
    },
    {
      title: 'Zyllabi',
      description: `A full stack web application that crowd-sources and organizes course syllabi from UC Irvine.
        I was particularly interested in API and backend design, and hoping overall to alleviate the
        stress of signing up for classes.`,
      imgSrc: zyllabi,
    },
  ]

  return (
    <section className={'section'}>
      <aside className={`aside`}>
        <h2 className={'sectionHeader'}>Featured Projects</h2>
      </aside>
      <div className={'content'}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div
              className={`${styles.thumbnailContainer} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <Image src={project.imgSrc} alt={`${project.title} thumbnail`} />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>{project.title}</h3>
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
