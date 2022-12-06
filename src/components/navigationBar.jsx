import React, { useState } from 'react';
import { Link} from 'react-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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
        <StyledNavlink to="projects" spy={true} smooth={true} offset={80} duration={200}>Projects</StyledNavlink>
        <StyledNavlink to="experience" spy={true} smooth={true} offset={80} duration={200}>Experience</StyledNavlink>
        <StyledNavlink to="about" spy={true} smooth={true} offset={80} duration={200}>About</StyledNavlink>
        <StyledNavlink to="contact" spy={true} smooth={true} offset={50} duration={200}>Contact</StyledNavlink>
        
        <StyledNavlink to="" onClick={() => window.open(Resume)}>Resume</StyledNavlink>
        <SocialMediaIcon icon={faGithub} size="2x" onClick={() => window.open("https://github.com/noxirus")} />
        <SocialMediaIcon icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/hamish-harrison/")} />
      </Collapse>
    </StyledNavbar>
  );
}

export default NavigationBar;

const StyledNavBrand = styled(NavbarBrand)`
&:hover{
  text-shadow: 2px 2px ${ColourPalette.secondary};
}

font-size: clamp(25px, 3vw, 30px);
  color: ${ColourPalette.primary};
  text-shadow: 2px 2px ${ColourPalette.dark};
`

const StyledNavbarText = styled(NavbarText)`
  font-size: clamp(15px, 3vw, 20px);
  color: ${ColourPalette.black};
  text-shadow: 0px 0px;
`

const StyledNavlink = styled(Link)`
&:hover{
  cursor: pointer;
  color: ${ColourPalette.primary};
  text-decoration: underline;
}
text-decoration: none;
padding-right: 50px;
padding-bottom: 5px;
padding-top: 5px;
  font-size: clamp(20px, 3vw, 20px);
  color: ${ColourPalette.dark}


`

const StyledNavbar = styled(Navbar)`
  padding: 10px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 2px ${ColourPalette.primary};
  position: fixed;
  z-index:1;
`