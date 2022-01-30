import { ReactElement } from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import OtherProjects from '../components/OtherProjects'
import Skills from '../components/Skills'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
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

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
