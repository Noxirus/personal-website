import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText,
} from 'reactstrap';
import styled from 'styled-components';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ColourPalette } from '../library/colorPalette';
import { SocialMediaIcon } from '../library/styleLibrary';
import Resume from "../../src/library/Hamish Harrison Resume.pdf";

const NavigationBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   return (
    <StyledNavbar expand="md" {...args}>
      <StyledNavBrand href="/">Hamish Harrison<br /><StyledNavbarText>Full Stack Developer</StyledNavbarText></StyledNavBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar />

        {/*Smooth scroll for these links */}
        <StyledNavlink>Projects</StyledNavlink>
        <StyledNavlink>Experience</StyledNavlink>
        <StyledNavlink>About</StyledNavlink>
        <StyledNavlink>Contact</StyledNavlink>
        
        <StyledNavlink onClick={() => window.open(Resume)}>Resume</StyledNavlink>
        <SocialMediaIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/noxirus")} />
        <SocialMediaIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/hamish-harrison/")} />
      </Collapse>
    </StyledNavbar>
  );
}

export default NavigationBar;

const StyledNavBrand = styled(NavbarBrand)`
  font-size: clamp(25px, 3vw, 30px);
  color: ${ColourPalette.primary}
`

const StyledNavbarText = styled(NavbarText)`
  font-size: clamp(20px, 3vw, 25px);
  color: ${ColourPalette.black}
`

const StyledNavlink = styled(NavLink)`
&:hover{
  cursor: pointer;
  color: ${ColourPalette.primary};
  text-decoration: underline;
}

padding-right: 50px;
padding-bottom: 5px;
padding-top: 5px;
  font-size: clamp(20px, 3vw, 20px);
  color: ${ColourPalette.dark}


`

const StyledNavbar = styled(Navbar)`
  padding: 10px;
  background-color: ${ColourPalette.tertiary};
  width: 100%;
  box-shadow: 0px 2px ${ColourPalette.primary};
  position: fixed;
  z-index:1;
`