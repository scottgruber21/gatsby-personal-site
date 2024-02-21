import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import Layout from '../components/layout'
import { headerFont } from '../../styleVars/styles'
import ContactTile from '../components/contactTile'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return <Layout>
  <Header>Contact Me</Header>
  <ContactTiles>
    <ContactTile title="908-507-6744" icon={<FaPhoneAlt/>} link="tel:908-507-6744"/>
    <ContactTile title="scott@scottgruber.net" icon={<FaRegEnvelope/>} link="mailto:scott@scottgruber.net"/>
    <ContactTile title="LinkedIn" icon={<FaLinkedinIn/>} link="https://www.linkedin.com/in/scottfgruber/"/>
  </ContactTiles>
  </Layout>
}

export const Head = () => (
  <>
    <title>Scott Gruber | Contact Me</title>
    <meta name="description" content="Your description" />
  </>
)

const FadeUp = keyframes`
from{
  opacity: 0;
  transform: translateY(40px);
}

to{
  opacity: 1;
  transform: translateY(0px);
}
`

const Header = styled.h1`
font-size: 1.8rem;
color: white;
text-align: center;
font-family: ${headerFont}, sans-serif;
`

const ContactTiles = styled.div`
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3, 1fr);
padding-top: 20px;
opacity: 0;
transform: translateY(40px);
animation: ${FadeUp} 0.3s linear 0.3s forwards;

@media screen and (max-width: 992px){
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 576px){
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
`

export default Contact