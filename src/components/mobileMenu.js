import React from 'react'
import { navLinks } from '../../pageData/pageData'
import { Link as GatLink } from 'gatsby'
import styled from 'styled-components'
import { headerFont } from "../../styleVars/styles";

const MobileMenu = ({mobileMenu}) => {
  return  (<MobileContainer mobileMenu={mobileMenu}>
        <LinkContainer>
            {navLinks.map((x, i) => {
               return <NavLink key={i} to={x.link}>
                <NavItem>
                    <NavLink to={x.link}>{x.title}</NavLink>
                </NavItem>
                </NavLink>
            })}
        </LinkContainer>
    </MobileContainer>)
}

const MobileContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 0px;
    width: 100%;
    overflow: hidden;
    height: ${props => (props.mobileMenu ? '270px' : '0px')};
    transition: 0.3s;
    z-index: 9999;
`
const LinkContainer = styled.ul`
    list-style-type: none;
    padding: 0px;
`

const NavItem = styled.li`
text-align: center;
padding: 20px;
background-color: black;
border-bottom: .5px solid white;

`

const NavLink = styled(GatLink)`
    color: white;
    text-decoration: none;
    font-family: ${headerFont};
    font-size: 1.2rem;
`

export default MobileMenu