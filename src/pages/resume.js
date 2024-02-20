import * as React from 'react'
import { Link } from 'gatsby'
import styled, {keyframes, css} from 'styled-components'
import Layout from '../components/layout'
import { headerFont, textFont } from '../../styleVars/styles'
import { topBullets, workExperience, certs, techSkills, languages } from '../../resumeData/resumeData,js'
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return <Layout>
    <DownloadLink style={{textDecoration: 'none'}} href='../Scott-Gruber-Resume.pdf/'>
      <Download>
        <div>
          <FaDownload style={{color: 'white', fontSize: '1.5rem'}} />
        </div>
        <div>
          <Header style={{padding: '0px 10px', fontSize: '1.5rem'}}>Download PDF</Header>
        </div>
      </Download> 
    </DownloadLink>
    <Container>
    <ContainerText>
  <Header style={{fontSize: '3.2rem'}}>Scott Gruber</Header>
  <Subhead style={{textAlign: 'center'}}>Web Development/Digital Marketing Professional</Subhead>
  <Header style={{marginTop: '60px'}}>Certified in:</Header>
  <Certifications>{topBullets.map(x => <Cert>{x}</Cert>)}</Certifications>
  <Header style={{marginTop: '60px'}}>Professional Experience</Header>
  {workExperience.map(x => {
    return <Experience>
      <Subhead>{x.company}</Subhead>
      <Location>{x.location}</Location>
      <Title>{x.title}</Title>
      <Para>{x.para}</Para>
      {x.bullets && <BulletsList>{x.bullets.map(y => <Bullet>{y}</Bullet>)}</BulletsList>}
    </Experience>
  })}
  <Header style={{marginTop: '60px'}}>Technical Skills</Header>
  <TechSkills>
    <div style={{paddingLeft: '20px'}}>
      <Header style={{fontSize: '1.2rem', textAlign: 'left'}}>Software</Header>
      <BulletsList>
        {techSkills.map(x => <Bullet>{x}</Bullet>)}
      </BulletsList>
    </div>

    <div style={{paddingLeft: '20px'}}>
      <Header style={{fontSize: '1.2rem', textAlign: 'left'}}>Programming Languages and Frameworks</Header>
      <BulletsList>
        {languages.map(x => <Bullet>{x}</Bullet>)}
      </BulletsList>
    </div>
  </TechSkills>
  <Header style={{marginTop: '60px'}}>Professional Certifications</Header>
  <BulletsList>
        {certs.map(x => <Bullet>{x}</Bullet>)}
      </BulletsList>
      <Header style={{marginTop: '60px'}}>Education</Header>
      <Para style={{textAlign: 'center'}}><strong>B.A., Journalism/Political Science</strong></Para>
      <Para style={{textAlign: 'center'}}>Rutgers University, New Brunswick, NJ</Para>
      </ContainerText>
  </Container>
  </Layout>
}

const FadeIn = keyframes`
from{
  opacity: 0;
}

to{
  opacity: 1
}
`

const ContainerText = styled.div`
  animation: ${FadeIn} 0.5s linear forwards;
  animation-delay: 0.5s;
  opacity: 0;
`

const DownloadLink = styled.a`

`

const Download = styled.div`
  display: flex;
  align-items: center;
`

const Header = styled.h2`
font-size: 2.2rem;
font-family: ${headerFont}, sans-serif;
color: white;
font-weight: 600;
text-align: center;
`

const Subhead = styled.h3`
font-size: 1.6rem;
font-family: ${headerFont}, sans-serif;
color: white;
`

const Certifications = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
color: white;
`

const Cert = styled.div`
font-family: ${textFont}, serif;
padding: 12px 0px;
font-size: 1.4rem;
text-align: center;
`

const Container = styled.div`
padding: 20px;
background-color: rgba(0,0,0,0.4);
border-radius: 20px;
`

const Experience = styled.section`
padding: 10px 0px;
`

const Location = styled.p`
font-weight: 500;
color: white;
font-size: 1.4rem;
`

const Title = styled.p`
font-weight: 500;
font-size: 1.4rem;
font-style: italic;
color: white;
`

const Para = styled.p`
font-size: 1.2rem;
line-height: 1.6rem;
`

const BulletsList = styled.ul`
list-style-type: '→';
`

const Bullet = styled.li`
font-size: 1.2rem;
line-height: 1.6rem;
padding: 5px 0px 5px 10px;
`

const TechSkills = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
`

export default Resume