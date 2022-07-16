import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import logo from "../chef-hat.svg";
import { useState } from "react";

export function NavigationBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="chef logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
