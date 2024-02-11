import React, {useRef, useEffect} from 'react'
import styled, {keyframes, css} from 'styled-components'
import { headerFont, textFont } from '../../styleVars/styles'
import { FaTimes } from "react-icons/fa";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectModal = ({open, setOpen, info, fadeOut, fade}) => {

    const containerRef = useRef(false)
    const bodyRef = useRef(false)

    const { buttonText,
        description,
        link,
        order,
        subhead,
        title,
        type} = info.frontmatter

    const mainImg = getImage(info.frontmatter.mainImg)


    return <ModalContainer fade={fade} id='modalContainer' ref={containerRef} onClick={fadeOut}>
    <ModalBody fade={fade} onClick={e => e.stopPropagation()}>
        <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <CloseButton onClick={() => setOpen(false)} />
        </ModalHeader>
        <GatsbyImage image={mainImg} />
        <Description>{description}</Description>
        <BtnLink href={link} target="_blank">View
            in CodePen</BtnLink>
        <ModalFooter>
            <Btn onClick={() => setOpen(false)}>Close</Btn>
        </ModalFooter>
    </ModalBody>
</ModalContainer>
}

const fadeIn = keyframes`
from{
    opacity: 0.0
}
to{
    opacity: 1.0
}
`

const fadeOff = keyframes`
from{
    opacity: 1.0
}
to{
    opacity: 0.0
}
`

const fadeUp = keyframes`
from{
    transform: translateY(40px);
}
to{
    transform: translateY(0px);
}
`

const fadeDown = keyframes`
from{
    margin-top: 20px;
}
to{
    margin-top: 60px;
}
`

const ModalContainer = styled.div`
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            position: fixed;
            height: 100%;
            z-index: 9999;
            top: 0px;
            left: 0px;
            //padding: 0 20px 20px 20px;
            /* display: none; */
            /* animation: ${fadeIn} 0.3s linear */
            animation: ${props => props.fade ? css`${fadeOff} 0.4s linear` : css`${fadeIn} 0.3s linear`}
`

const ModalBody = styled.div`
            background: white;
            max-width: 600px;
            //width: 100%;
            width: 80%;
            margin: auto;
            padding: 10px 20px 20px 20px;
            border-radius: 5px;
            margin-top: 20px;
            //animation: ${fadeUp} 0.3s linear
            animation: ${props => props.fade ? css`${fadeDown} 0.4s linear` : css`${fadeUp} 0.3s linear`};
`

const ModalHeader = styled.div`
            padding: 10px 0;
            border-bottom: 1px solid #dee2e6;
            display: flex;
            justify-content: space-between;
            align-items: center;
`

const ModalTitle = styled.h3`
            font-family: ${headerFont};
            font-size: 30px;
            font-weight: 300;
            padding: 10px 0px;
            margin: 10px 0px;
            font-weight: 700;
`
const Description = styled.p`
            max-width: 600px;
            width: 100%;
            margin: 20px auto 16px auto;
            font-size: 1.3rem;
            line-height: 1.5rem;

`

const BtnLink = styled.a`
            background-color: #00458B;
            color: white;
            font-family: ${textFont};
            transition: 0.5s;
            padding: 8px 12px;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
            display: inline-block;
            margin-bottom: 15px;
            font-size: 1.2rem;
`

const Btn = styled.div`
            background-color: #00458B;
            color: white;
            font-family: ${textFont};
            transition: 0.5s;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            display: inline-block;
            font-size: 1.2rem;
`

const ModalFooter = styled.div`
padding: 10px 0;
            border-top: 1px solid #dee2e6;
            display: flex;
            justify-content: flex-end;
`

const CloseButton = styled(FaTimes)`
font-size: 1.7rem;
cursor: pointer;
`

export default ProjectModal