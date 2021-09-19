import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Virtual Consultant</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
