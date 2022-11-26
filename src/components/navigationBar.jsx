import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import styled from 'styled-components';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IceColourPalette } from '../library/colorPalette';


const NavigationBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   return ( <div>
    <StyledNavbar expand="md" {...args}>
      <NavbarBrand href="/">Hamish Harrison</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar />
        <StyledNavlink href="/blog">Blog</StyledNavlink>
        <StyledNavlink href="/contact-me">Contact Me</StyledNavlink>
        <NavbarText>Inspring text here?</NavbarText>
        <SocialMediaIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/noxirus")} />
        <SocialMediaIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/hamish-harrison/")} />
      </Collapse>
    </StyledNavbar>
  </div>);
}

export default NavigationBar;

const SocialMediaIcon = styled(FontAwesomeIcon)`
  min-width: 50px;

  &:hover{
    cursor: pointer;
    //TODO add on hover animation and press here
  }
`

const StyledNavlink = styled(NavLink)`
  padding-right: 50px;
`

const StyledNavbar = styled(Navbar)`
  padding: 25px;
  position: fixed;
  background-color: white;
  width: 100%;

  box-shadow: 0px 5px #C0C0C0;
`