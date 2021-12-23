import type { NextPage } from 'next'
import About from '../components/About'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home
