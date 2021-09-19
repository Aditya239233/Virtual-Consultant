import React from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn} from './NavbarElements';
import SignIn from '../SignIn/SignIn';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>Virtual Consultant</NavLogo>
                  <MobileIcon onClick={toggle}>
                    <FaBars />
                  </MobileIcon>
                  <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign Up</NavLinks>
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

export default Navbar
