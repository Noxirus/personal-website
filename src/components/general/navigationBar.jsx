import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ColorPalette } from '../../library/colorPalette';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialMediaIcon } from '../../library/styleLibrary';
import { fadeIn } from '../../library/animations';
import Resume from "../../../src/library/Hamish Harrison Resume.pdf";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  NavItem,
} from 'reactstrap';

const NavigationBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   return (
    <StyledNavbar expand="md" {...args}>
      <StyledNavBrand href="/">Hamish Harrison<br /><StyledNavbarText>Full Stack Developer</StyledNavbarText></StyledNavBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar />

        <StyledNavItem delay="0s" $collapsed={isOpen}><StyledNavlink to="projects" spy={true} smooth={true} offset={80} duration={200}>Projects</StyledNavlink></StyledNavItem>
        <StyledNavItem delay=".25s" $collapsed={isOpen}><StyledNavlink to="experience" spy={true} smooth={true} offset={80} duration={200}>Experience</StyledNavlink></StyledNavItem>
        <StyledNavItem delay=".5s" $collapsed={isOpen}><StyledNavlink to="about" spy={true} smooth={true} offset={80} duration={200}>About</StyledNavlink></StyledNavItem>
        <StyledNavItem delay=".75s" $collapsed={isOpen}><StyledNavlink to="contact" spy={true} smooth={true} offset={50} duration={200}>Contact</StyledNavlink></StyledNavItem>
        
        <StyledNavItem delay="1s" $collapsed={isOpen}><StyledNavlink to="" onClick={() => window.open(Resume)}>Resume</StyledNavlink></StyledNavItem>
        <SocialMediaIcon delay="1.25s" $collapsed={isOpen} icon={faGithub} size="2x" onClick={() => window.open("https://github.com/noxirus")} />
        <SocialMediaIcon delay="1.5s" $collapsed={isOpen} icon={faLinkedin} size="2x" onClick={() => window.open("https://www.linkedin.com/in/hamish-harrison/")} />
      </Collapse>
    </StyledNavbar>
  );
}

export default NavigationBar;

const StyledNavItem = styled(NavItem)`
list-style-type: none;
animation: ${fadeIn} 1s linear ${props => (props.delay && !props.$collapsed) ? props.delay : "0s"};
opacity: 0;
animation-fill-mode: forwards;
&:hover{
  opacity: 1;
}
`

const StyledNavBrand = styled(NavbarBrand)`
&:hover{
  text-shadow: 2px 2px ${ColorPalette.secondary}; 
}
font-size: clamp(25px, 3vw, 30px);
  color: ${ColorPalette.primary};
  text-shadow: 1px 1px ${ColorPalette.dark};
`

const StyledNavbarText = styled(NavbarText)`
  font-size: clamp(15px, 3vw, 20px);
  color: ${ColorPalette.black};
  text-shadow: 0px 0px;
`

const StyledNavlink = styled(Link)`
&:hover{
  cursor: pointer;
  color: ${ColorPalette.primary};
  text-decoration: underline;
}
text-decoration: none;
padding-right: 50px;
padding-bottom: 5px;
padding-top: 5px;
font-size: clamp(20px, 3vw, 20px);
color: ${ColorPalette.dark};
`

const StyledNavbar = styled(Navbar)`
  padding: 0px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 2px ${ColorPalette.primary};
  position: fixed;
  z-index: 5;
`