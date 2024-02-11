import React, { useRef, useEffect, useState } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { headerFont, textFont } from "../../styleVars/styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../../pageData/pageData";
import MobileMenu from "./mobileMenu";
import { IoClose } from "react-icons/io5";

const Header = ({ path }) => {
  const linkList = useRef(null);
  const menu = useRef(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth > 900){
        setMobileMenu(false)
      }
    });

  }, []);

  return (
    <>
    <SuperContainer>
      <HeaderContainer>
        <TitleContainer>
          <SiteTitle>
            {!window.location.href.includes("ddd") && (
              <TitleLink to="/">Scott Gruber</TitleLink>
            )}
          </SiteTitle>
        </TitleContainer>
        <LinksContainer>
          <LinksList ref={linkList}>
            {navLinks.map(x => <TopLink>
              <NavLink to={x.link}>{x.title}</NavLink>
            </TopLink>)}
          </LinksList>
        </LinksContainer>
        <MenuButtonContainer>
        {!mobileMenu && <MobileMenuIcon onClick={() => setMobileMenu(true)} />}
        {mobileMenu && <CloseMenuIcon onClick={() => setMobileMenu(false)} />}
        </MenuButtonContainer>
      </HeaderContainer>
    </SuperContainer>
    <MobileMenu mobileMenu={mobileMenu} />
    </>
  );
};

// const SuperContainer = styled.div`
// padding: ${window.location.href.includes("about")
//   ? " 0px 56px 0px 40px"
//   : "0px 40px 0px 40px"};
//   display: block;
// `

const SuperContainer = styled.div`
padding: "0px 40px 0px 40px";
  display: block;
`


const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  overflow-x: hidden;

`;

const TitleContainer = styled.div`
`;

const TitleLink = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  text-align: right;
  @media (max-width: 900px) {
display: none;
  }
`;

const SiteTitle = styled.h1`
  font-size: 1.8rem;
  font-family: ${textFont};
  font-weight: 800;
  margin: 0px;
`;

const LinksList = styled.ul`
  list-style-type: none;
`;

const TopLink = styled.li`
  color: orange;
  font-family: ${headerFont};
  display: inline-block;
  margin: 0px 20px;
`;

const NavLink = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
`;

const MobileMenuIcon = styled(GiHamburgerMenu)`
    color: white;
    font-size: 1.7rem;
`;

const MenuButtonContainer = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`

const CloseMenuIcon = styled(IoClose)`
    color: white;
    font-size: 1.7rem;
    font-weight: 700;
`;

export default Header;
