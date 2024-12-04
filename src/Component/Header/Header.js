import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import Logo from "../../Assets/logo.png"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar bg-dark">
      <Container fluid>
        <Navbar.Brand href="/" className="logo">
          <img 
            src={Logo} 
            alt="TaskPulse Logo" 
            className="logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto nav-links"
            navbarScroll
          >
            <Nav.Link href="/" className="text-light">Home</Nav.Link>
            <Nav.Link href="/services" className="text-light">Services</Nav.Link>
            <Nav.Link href="/about" className="text-light">About us</Nav.Link>
            <Nav.Link href="/about" className="text-light">Task List</Nav.Link>
            <Nav.Link href="/about" className="text-light">Testimonials</Nav.Link>
            <Nav.Link href="/contact" className="text-light">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
