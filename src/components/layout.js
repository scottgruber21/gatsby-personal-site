import React from 'react'

import Header from './header'
import Footer from './footer'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

const Layout = ({children, nameRemove}) => {
  return (
    <>
    <GlobalStyle />
      <Header nameRemove={nameRemove} />
      <Content>
        {children}
      </Content>
      <Footer />
      <div id="modal-portal"></div>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: darkgray no-repeat url('/nyc-dark.jpg/') fixed center;
  background-position: center 30%;
  color: white;
}
`

const Content = styled.div`
//width: 100%;
max-width: 1000px;
display: block;
margin: auto;
padding: 0px 10px;
box-sizing: border-box;
`

export default Layout