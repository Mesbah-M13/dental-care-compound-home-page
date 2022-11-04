import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";

const Navigationbar = () => {
  return (
    // <Navbar bg="light" expand="lg">
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Dental Care... </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Stack direction="horizontal" gap={5}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#dental-services">Dental Services</Nav.Link>
              <Nav.Link className="text-white" href="#reviews">
                Reviews
              </Nav.Link>
              <Nav.Link className="text-white" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="text-white" href="#contact-us">
                Contact Us
              </Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
