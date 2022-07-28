import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../chef-hat.svg";

/* <img src={logo} alt="chef logo" /> */

export function NavigationBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="light">
        <Container>
          <Nav className="mr-auto">
            <Navbar.Brand href="/">
              <img src={logo} alt="chef logo" />
            </Navbar.Brand>

            <Nav.Link classname="navlink" href="/">
              Lav madplan
            </Nav.Link>

            <Nav.Link classname="navlink" href="/all-recipes">
              Alle opskrifter
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
