import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <div>
      <Navbar color="light" light  expand="md" style={{fontSize:"20px", fontFamily:"cursive"}} >
        <NavbarBrand href="/" style={{fontSize:"25px"}}>Covid19-Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem> <NavLink href="/global">Global</NavLink> </NavItem>
            <NavItem> <NavLink href="/india">India</NavLink> </NavItem>
            <NavItem> <NavLink href="/about">About Covid19</NavLink> </NavItem>
            <NavItem> <NavLink href="/map">Analytics</NavLink> </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Header;