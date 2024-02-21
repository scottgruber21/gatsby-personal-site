import * as React from 'react'
import styled from 'styled-components'
import { headerFont } from '../../styleVars/styles'

const ContactTile = ({title, icon, link}) => {
    return <BoxLink href={link}><Tile>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
    </Tile></BoxLink>
}

const BoxLink = styled.a`
text-decoration: none;
color: white;
`

const Tile = styled.div`
padding: 40px;
border: 2px solid white;
border-radius: 10px;
cursor: pointer;
transition: 0.3s;
&:hover{
    background-color: white;
    color: black;
    transition: .3s;
}
`

const Icon = styled.div`
text-align: center;
font-size: 3rem;
`

const Title = styled.h3`
font-size: 1.3rem;
font-family: ${headerFont}, sans-serif;
text-align: center;
margin: 0px;
`

export default ContactTile