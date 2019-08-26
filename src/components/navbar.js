import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/css/navbar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand id="logo" href="/">Weather App</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cities">Cities Database</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
