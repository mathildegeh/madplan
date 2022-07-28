import { Navbar, Container } from "react-bootstrap";
import logo from "../chef-hat.svg";

/* <img src={logo} alt="chef logo" /> */

export function NavigationBar() {
  return (
    <Container>
      <Navbar expand="lg" variant="dark" bg="light" className="centeredLogo">
        <Container>
          <Navbar.Brand href="/" />
        </Container>
      </Navbar>
    </Container>
  );
}
