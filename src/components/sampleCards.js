import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./projectCard"
import styled, {keyframes, css} from "styled-components"
import { headerFont } from '../../styleVars/styles'

const SampleCards = () => {

 const data = useStaticQuery(graphql`
  query{
    allMdx {
      nodes {
        frontmatter {
          buttonText
          description
          link
          order
          subhead
          title
          type
          mainImg{
            childImageSharp {
              gatsbyImageData  (layout: CONSTRAINED) 
            }
          }
          thumbImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`)

const projectCards = data.allMdx.nodes.filter(x => x.frontmatter.type === 'project').sort((a, b) => +a.frontmatter.order - +b.frontmatter.order)

const workCards = data.allMdx.nodes.filter(x => x.frontmatter.type === 'work').sort((a, b) => +a.frontmatter.order - +b.frontmatter.order)

  return <>
      <CardHeader delay=".3s">Work Samples</CardHeader>
  <CardGrid delay=".6s">
    {workCards.map(x => {
      return <ProjectCard info={x}/>
    })}
    </CardGrid>
  <CardHeader delay=".9s">Personal Projects</CardHeader>
  <CardGrid delay="1.2s">
    {projectCards.map(x => {
      return <ProjectCard info={x}/>
    })}
    </CardGrid>

  </>
}

const fadeIn = keyframes`
from{
  opacity: 0;
}

to{
  opacity: 1;
}
`

const fadeUp = keyframes`
from{
  opacity: 0;
  transform: translateY(40px);
}

to{
  opacity: 1;
  transform: translateY(0px);
}
`



const CardHeader = styled.h2`
font-size: 1.8rem;
color: white;
text-align: center;
opacity: 0;
font-family: ${headerFont}, sans-serif;
animation: ${css`${fadeIn} 0.5s linear forwards`};
animation-delay: ${props => props.delay};
`

const CardGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
animation: ${css`${fadeUp} 0.5s linear forwards`};
animation-delay: ${props => props.delay};
opacity: 0;
//transform: translateY(40px);
@media screen and (max-width: 992px){
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 576px){
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
`


export default SampleCards