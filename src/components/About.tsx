import styles from '../styles/About.module.scss'
import profileImg from '../../public/images/me.png'
import Image from 'next/image'

const About = (): JSX.Element => {
  return (
    <section className={'section'}>
      <aside className={`aside noBorder ${styles.aboutAside}`}>
        <div className={styles.headshotContainer}>
          <Image className={styles.headshot} src={profileImg} alt="Headshot" />
        </div>
      </aside>
      <div className={`content ${styles.aboutContent}`}>
        <h2 className={'sectionHeader'}>About</h2>
        <div className={styles.text}>
          <div className={styles.firstSection}>
            <p>
              Sed interdum id quam et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque imperdiet ultrices tellus, nec tristique nisi laoreet et. Nullam semper
              congue ex vitae lobortis. Cras a tincidunt justo. Suspendisse fringilla nunc id lectus
              semper, eget vestibulum est convallis.
            </p>
            <p>
              Vivamus quis mollis magna. Nulla vel mi eros. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Nam efficitur nisl ac ex mollis,
              tincidunt accumsan lacus ultricies. Vivamus nec erat sit amet sapien vestibulum
              blandit. In nulla nulla, semper maximus eros nec, fermentum pretium turpis.
            </p>
          </div>
          <div>
            <p>
              Mauris gravida pharetra metus, quis porttitor quam luctus et. Cras vestibulum
              consectetur turpis a venenatis. Vivamus et placerat diam, et mollis neque. Donec diam
              eros, porta efficitur sem ac, elementum lobortis massa. Maecenas ut enim nulla. Aenean
              interdum accumsan maximus.
            </p>
            <p>
              Nullam molestie leo convallis, congue ex vel, tempus lectus. Donec in ultrices augue.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nibh quis
              libero vulputate varius. Nulla condimentum felis sit amet erat viverra, eu scelerisque
              tellus fermentum. Sed maximus at mi vitae malesuada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
