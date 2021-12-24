import type { NextPage } from 'next'
import About from '../components/About'
import Experience from '../components/Experience'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
import OtherProjects from '../components/OtherProjects'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <OtherProjects />
      <Experience />
      <Skills />
    </>
  )
}

export default Home
