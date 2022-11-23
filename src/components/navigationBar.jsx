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


const NavigationBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

   return ( <div>
    <Navbar expand="md" {...args}>
      <NavbarBrand href="/">Hamish Harrison</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="sm-auto" navbar>
          <NavItem>
            <NavLink href="/projects">My Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact-me">Contact Me</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Creating Software</NavbarText>
      </Collapse>
    </Navbar>
  </div>);
}

//TODO add links to media/github/linkedin/youtube
//TODO add Margins/buffer space around the navbar buttons, right align buttons? Left align home page link?
export default NavigationBar;