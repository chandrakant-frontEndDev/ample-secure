import Container from "react-bootstrap/Container";
import "../assets/web/Styles/Layout.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/web/Img/Logo.png";
import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={Logo}
                style={{
                  width: "150px",
                }}
                className={"img-fluid"}
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/About">About Us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Services">Services</Link>
              </Nav.Link>{" "}
              <Nav.Link>
                <Link to="/Career">Career</Link>
              </Nav.Link>{" "}
              <Nav.Link>
                <Link to="/Contact">Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
}

export default Layout;
