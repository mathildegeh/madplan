import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../chef-hat.svg";

/* <img src={logo} alt="chef logo" /> */

export function NavigationBar() {
  return (
    <Container>
      <Navbar className="navbar" expand="lg" variant="light" bg="">
        <Container>
          <Nav className="mr-auto">
            <Navbar.Brand href="/madplan">
              <img src={logo} alt="chef logo" />
            </Navbar.Brand>

            <Nav.Link className="navlink" href="/madplan">
              Lav madplan
            </Nav.Link>

            <Nav.Link className="navlink" href="/madplan/#/all-recipes">
              Opskriftbibliotek
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
