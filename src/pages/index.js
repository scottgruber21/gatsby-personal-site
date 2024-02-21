import React, {useEffect, useState} from "react"
import Layout from '../components/layout'
import styled, {keyframes, css} from "styled-components"
import { headerFont, textFont } from "../../styleVars/styles"
import MainButton from "../components/main-button"

const nameArray = 'Scott Gruber'.split('')

const IndexPage = () => {

  const [headerName, setHeaderName] = useState([])

  useEffect(() => {
    for(let i in nameArray){
      setTimeout(() => {
        setHeaderName((headerName) => [...headerName, nameArray[i]])
      }, i * 100)
    }
  }, [])

  return (
    <Layout nameRemove={true} hide={true}>
   <H1>{headerName.map(x => <span>{x}</span>)}</H1>
   <H2><Subhead delay="1.7s">Web Development |</Subhead><Subhead delay="2.2s"> Digital Marketing</Subhead></H2>
   <MainButton copy="About Me" url="/about" delay='2.5s' />
   </Layout>
  )
}

export const Head = () => (
  <>
    <title>Scott Gruber | Web Development & Digital Marketing</title>
    <meta name="description" content="Your description" />
  </>
)

const appear = keyframes`
from{
  opacity: 0;
}

to{
  opacity: 1;
}
`

const H1 = styled.h1`
  color: white;
  font-family: ${headerFont};
  text-align: center;
  font-size: 5rem;
  margin-top: 100px;
`

const H2 = styled.h2`
color: white;
font-family: ${textFont};
margin-top:40px;
font-size: 2rem;
text-align: center;
`

const Subhead = styled.span`
animation: ${props => css`${appear} 0.3s linear ${props.delay} forwards`};
opacity: 0;
`

export default IndexPage

