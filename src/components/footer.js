import React from "react"
import styled from "styled-components"


const Footer = ({hide}) => {
  return (
    <FooterDiv $hide={hide}>
      <i>© {new Date().getFullYear()} Scott Gruber</i>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
margin-top: 80px;
border-top: 1px solid white;
  font-size: 1.1rem;
  padding: 20px;
  height: 100px;
  text-align: right;
  display: ${props => props.$hide ? 'none': 'block'}
`

export default Footer