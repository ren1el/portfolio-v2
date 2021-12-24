import type { NextPage } from 'next'
import About from '../components/About'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
    </>
  )
}

export default Home
