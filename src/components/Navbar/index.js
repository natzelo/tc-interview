import React from "react";
import logo from "../../images/logo-koral.png";
import { FaBars } from "react-icons/fa";
import { BiSearch, BiCart } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavIcons,
} from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="home">Pages</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="home">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="home">Headers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="home">Elements</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="home">Blog</NavLinks>
            </NavItem>
          </NavMenu>
          <NavIcons>
            <BiSearch />
            <BiCart />
          </NavIcons>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
