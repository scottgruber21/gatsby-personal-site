import React, {useState, useEffect} from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { headerFont, textFont } from '../../styleVars/styles'
import ProjectModal from './projectModal'
import { createPortal } from 'react-dom'

const ProjectCard = ({info}) => {

    const [open, setOpen] = useState(false)
    const [fade, setFade] = useState(false)


    useEffect(() => {
        if(open){
            document.querySelector('body').style.overflow='hidden'
            document.querySelector('body').style.marginRight='16px'
            document.querySelector('body').style.height='100%'
        }
        else{
            document.querySelector('body').style.overflow='initial'
            document.querySelector('body').style.marginRight='0px'
            document.querySelector('body').style.height='auto'
        }
    }, [open])

    const fadeOut = () => {
        setFade(true)
        setTimeout(() =>{
            setOpen(false)
            setFade(false)
        }, 300)
    }

    const thumbImg = getImage(info.frontmatter.thumbImg)

    const { 
        subhead,
        title,
        } = info.frontmatter

        return <>
        <CardContainer onClick={() => setOpen(true)}>
            <GatsbyImage image={thumbImg} />
            <CardTitle>{title}</CardTitle>
            {subhead && <Subhead><i>{subhead}</i></Subhead>}
        </CardContainer>
        {/* {open && <ProjectModal info={info} open={open} setOpen={setOpen} fadeOut={fadeOut} fade={fade} />} */}
        {open && createPortal(<ProjectModal info={info} open={open} setOpen={setOpen} fadeOut={fadeOut} fade={fade} />, document.querySelector('#modal-portal'))}
        </>
}

const CardContainer = styled.div`
cursor: pointer;
transition: 0.2s;
&:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`

const CardTitle = styled.h3`
color: white;
font-size: 1.2rem;
text-align: center;
font-family: ${headerFont}, sans-serif;
`

const Subhead = styled.p`
font-family: ${textFont}, serif;
color: white;
text-align: center;
`

export default ProjectCard