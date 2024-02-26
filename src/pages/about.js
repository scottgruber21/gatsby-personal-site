import React from 'react'
import styled, {keyframes, css} from 'styled-components'
import Layout from '../components/layout'
import { headerFont, textFont } from '../../styleVars/styles'
import MainButton from "../components/main-button"

const greeting1 = "Hi, I'm Scott. ".split(' ')
const greeting2 = "It's nice to meet you.".split(' ')

const About = () => {
  return (
    <Layout>
      <Container>
    {/* <HeaderText>Hi, I'm Scott. It's nice to meet you.</HeaderText> */}
    <HeaderText>{greeting1.map((x, i) => <HeaderWord key={i} $delay={`${i * .15 + .5}s`}>{x} </HeaderWord>)}
    {greeting2.map((x, i) => <HeaderWord key={i} $delay={`${(i * .15) + 1.3}s`}>{x} </HeaderWord>)}</HeaderText>


    <Para $delay="2.2s">Greetings! I'm Scott Gruber, a seasoned Web Development and Digital Marketing Professional with a passion for crafting exceptional online experiences. Over the years, I've honed my skills in orchestrating comprehensive digital strategies and leading impactful redesigns. In my role as a Web Development and Marketing Systems Manager at Revenue Cycle Coding Strategies, I oversaw the transformation of three main brand websites, ensuring not only a visually appealing design but also a seamless navigation experience. At Lixil Water Technology Americas, my tenure as a Digital Marketing/E-commerce Specialist was marked by a 67% increase in search engine traffic through strategic SEO enhancements and the successful internalization of GROHE's email functions, enhancing communication efficiency.</Para>
    <Para $delay="2.2s">During my time as a Digital Marketing Specialist at Star Gas Partners, I managed a diverse portfolio of over 15 websites, seamlessly transitioning them to Sitefinity and optimizing email and marketing automation systems. At Iconectiv, I served as a Marketing Coordinator, balancing content creation, graphic design, and website management for the interconnection division of Ericsson. My journey as a Business Development Associate at Axis Group involved coordinating marketing activities and managing inbound sales requests for a leading Business Intelligence consulting firm.</Para>
    <Para $delay="2.2s">I bring a wealth of technical expertise encompassing Google Analytics, Google Data Studio, MailChimp, and proficiency in platforms like WordPress, Joomla! CMS, and Sitefinity. My coding prowess includes HTML/CSS, JavaScript, React, Python, Node.js, MongoDB, SQL, jQuery, Bootstrap, and D3. Armed with certifications such as Google Analytics Individual Qualification and Google Ads Certification – Search, along with a Bachelor of Arts in Journalism/Political Science from Rutgers University, I am eager to contribute my skills, strategic vision, and proven track record to elevate your team's digital presence. Let's connect and explore how we can collaborate for success!</Para>
    </Container>
    <MainButton copy="Portfolio" url="/portfolio" delay='2.5s' />
</Layout>
  )


}

export const Head = () => (
  <>
    <title>Scott Gruber | About Me</title>
    <meta name="description" content="Your description" />
  </>
)

const fadeIn = keyframes`
from{
  opacity: 0;
}

to{
  opacity: 1;
}
`

const Container = styled.div`
max-width: 600px;
margin: auto;
padding: 20px;
background-color: rgba(0,0,0,0.4);
border-radius: 20px;
`

const HeaderText = styled.h1`
font-size: 3.2rem;
line-height: 4.6rem;
color: white;
font-family: ${headerFont}, sans-serif;
`

const HeaderWord = styled.span`
opacity: 0;
animation: ${props => css`${fadeIn} 0.2s linear ${props.$delay} forwards`};
`

const Para = styled.p`
font-size: 1.6rem;
font-family: ${textFont}, serif;
color: white;
opacity: 0;
animation: ${props => css`${fadeIn} 0.4s linear ${props.$delay} forwards`};
`

export default About