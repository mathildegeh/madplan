import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../chef-hat.svg";

/* <img src={logo} alt="chef logo" /> */

export function NavigationBar() {
  return (
    <Container>
      <Navbar className="navbar" expand="lg" variant="light" bg="">
        <Container>
          <Nav className="mr-auto">
            <Navbar.Brand href="/">
              <img src={logo} alt="chef logo" />
            </Navbar.Brand>

            <Nav.Link classname="navlink" href="/">
              Lav madplan
            </Nav.Link>

            <Nav.Link classname="navlink" href="/all-recipes">
              Opskriftbibliotek
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
