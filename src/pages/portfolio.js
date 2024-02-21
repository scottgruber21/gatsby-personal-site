import * as React from 'react'
import SampleCards from '../components/sampleCards'
import Layout from '../components/layout'
import MainButton from "../components/main-button"


const Portfolio = () => {

  return <Layout>
      <SampleCards />
      <MainButton copy="Resume" url="/resume" delay='2.2s' />
  </Layout>
  
}

export const Head = () => (
  <>
    <title>Scott Gruber | Portfolio</title>
    <meta name="description" content="Your description" />
  </>
)


export default Portfolio