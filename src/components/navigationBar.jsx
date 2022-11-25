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


const NavigationBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   return ( <div>
    <StyledNavbar expand="md" {...args}>
      <NavbarBrand href="/">Hamish Harrison</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="sm-auto" navbar>
          <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact-me">Contact Me</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Creating Software</NavbarText>
        <FontAwesomeIcon icon={faGithub} onClick={() => window.open("https://github.com/noxirus")} />
        <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/hamish-harrison/")} />
      </Collapse>
    </StyledNavbar>
  </div>);
}

export default NavigationBar;

const StyledNavbar = styled(Navbar)`
  padding: 25px;
`