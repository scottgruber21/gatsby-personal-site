import React, {useEffect, useState} from "react"
import Layout from '../components/layout'
import styled from "styled-components"
import { headerFont, textFont } from "../../styleVars/styles"

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
    <Layout>
   <H1>{headerName.map(x => <span>{x}</span>)}</H1>
   <H2><span>Web Development | Digital Marketing</span></H2>
   </Layout>
  )
}

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

export default IndexPage

export const Head = () => <title>Home Page</title>
