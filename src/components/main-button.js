import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled, {keyframes, css} from 'styled-components'
import { headerFont } from '../../styleVars/styles'

const MainButton = ({copy, url, delay}) => {
 return <LinkContainer>
 <MainLink $delay={delay} to={url}>{copy} »</MainLink>
 </LinkContainer>
}

const appear = keyframes`
from{
    opacity: 0;
}

to{
    opacity: 1;
}
`

const MainLink = styled(GatsbyLink)`
    border: 1px solid white;
    border-radius: 5px;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    padding: 15px 30px;
    font-family: ${headerFont}, sans-serif;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    transition: .3s;
    opacity: 0;
    animation: ${props => css`${appear} 0.5s linear ${props.$delay} forwards`};

  &:hover {
    color: black;
    background-color: white;
    transition: .3s;
}
`

const LinkContainer = styled.div`
    display: block;
    margin: auto;
    margin-top: 60px;
    height: auto;
    text-align: center;
`

export default MainButton