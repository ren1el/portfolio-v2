import IconGitHub from '../icons/GitHub'
import IconLink from '../icons/Link'
import styles from '../styles/OtherProjects.module.scss'

const OtherProjects = (): JSX.Element => {
  const projects = [
    {
      type: 'Side Project',
      title: 'Personal Website V1',
      description: `The first iteration of my personal website built with Gatsby for the first time. Makes use
        of HTML5 semantic elements as well as CSS3 flexbox layouts, media queries, and animations.`,
      githubLink: 'https://github.com/ren1el/ren1el.github.io/',
      permaLink: 'https://ren1el.github.io/',
    },
    {
      type: 'Class Project',
      title: 'Sleep Tracker',
      description: `A minimal, hybrid iOS/Android application that allows users to log overnight sleep and their
        “sleepiness” throughout the day. Built with Ionic.`,
      githubLink: 'https://github.com/ren1el/sleeptracker/',
    },
    {
      type: 'Side Project',
      title: 'E-commerce Landing Page Concept',
      description: `A responsive e-commerce landing page that mimics online fashion product websites, exercising
        my ability to use pure HTML/CSS/JavaScript to apply professional design qualities.`,
      githubLink: 'https://github.com/ren1el/ecommerce-landing-page/',
      permaLink: 'https://ren1el.github.io/ecommerce-landing-page/',
    },
    {
      type: 'Interview Project',
      title: 'Dogs.ai',
      description: `Mauris gravida pharetra metus, quis porttitor quam luctus et. Cras vestibulum
        consectetur turpis a venenatis. Vivamus et placerat diam, et mollis neque.`,
      githubLink: 'https://github.com/ren1el/dogs-ai/',
    },
    {
      type: 'Interview Project',
      title: 'Calendar.ai',
      description: `Donec in ultrices augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum at nibh quis libero vulputate varius.`,
      githubLink: 'https://github.com/ren1el/calendar-ai/',
    },
  ]

  return (
    <section className={'section'}>
      <aside className={`aside`}>
        <h2 className={'sectionHeader'}>Other Projects</h2>
      </aside>
      <div className={'content'}>
        {projects.map((project, index) => (
          <div key={index} className={styles.table}>
            <div className={styles.leftColumn}>
              <span className={styles.type}>{project.type}</span>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.titleLinksContainer}>
                <span className={styles.title}>{project.title}</span>
                {project.githubLink && (
                  <a href={project.githubLink} className={styles.icon}>
                    <IconGitHub />
                  </a>
                )}
                {project.permaLink && (
                  <a
                    href={project.permaLink}
                    className={styles.icon}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <IconLink />
                  </a>
                )}
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
