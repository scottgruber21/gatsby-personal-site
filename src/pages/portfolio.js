import * as React from 'react'
import styled from 'styled-components'
import SampleCards from '../components/sampleCards'
import Layout from '../components/layout'
import MainButton from "../components/main-button"


const Portfolio = () => {

  return <Layout>
      <SampleCards />
      <MainButton copy="Resume" url="/resume" delay='2.2s' />
  </Layout>
  
}

const Header = styled.h1`
font-size: 1.6rem;
`

const Container = styled.div`
padding: 0px 10px;
`

export default Portfolio