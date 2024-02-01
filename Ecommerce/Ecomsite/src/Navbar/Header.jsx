import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../component/buttons/Login';
import Signup from '../component/buttons/Singup';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="light" expand="lg" className="p-3 border rounded m-2 shadow">
      <NavLink className="navbar-brand" to="/">
        <span className='font-bold'> EcomSite</span>
      </NavLink>
      <Navbar.Toggle aria-controls="navbarNav" onClick={handleNavbarToggle} />
      <Navbar.Collapse id="navbarNav" expanded={expanded}>
        <Nav className="mx-auto gap-4">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <div className='d-flex flex-wrap gap-4 ml-auto'>
          <Login />
          <Signup />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
