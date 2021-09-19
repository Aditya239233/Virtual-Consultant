import React from "react";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <LinkR to="/" class="logo">
            Virtual Consultant
          </LinkR>
          <ul class="nav-menu">
            <li class="nav-item">
              <LinkS to="/about" class="nav-links">
                About
              </LinkS>
            </li>
            <li class="nav-item">
              <LinkS to="/services" class="nav-links">
                Services
              </LinkS>
            </li>
          </ul>
          <nav class="nav-button">
            <LinkR class="nav-button-link" to="/login">
              Sign In
            </LinkR>
          </nav>
        </div>
      </nav>
      {/* <Nav>
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
      </Nav> */}
    </>
  );
};

export default Navbar;
