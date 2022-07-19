import { Navbar, Container } from "react-bootstrap";
import logo from "../chef-hat.svg";

export function NavigationBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="chef logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
