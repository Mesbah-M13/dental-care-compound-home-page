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
            <Stack direction="horizontal" gap={4}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/appointment">Appointment</Nav.Link>
              {/* <Nav.Link href="#dental-services">Dental Services</Nav.Link> */}
              <Nav.Link href="/login">login</Nav.Link>

              <Nav.Link className="text-white" href="/dashboard/appointment">
                Dashboard
              </Nav.Link>
              <Nav.Link className="text-white" href="/contact_us">
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
