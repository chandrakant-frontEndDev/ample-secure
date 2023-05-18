import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/web/Img/Logo.png";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="div_footer_container">
        <Container>
          <Row>
            <Col md="6" lg="6" sm="12">
              <div className="div_footer_title mb-3">
                <img src={Logo} alt="no-img" />{" "}
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>
            <Col md="3" lg="3" sm="12">
              <div className="div_footer_title mb-3">
                <h1>Link</h1>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Career">Career</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
              </ul>
            </Col>
            <Col md="3" lg="3" sm="12">
              <div className="div_footer_title mb-3">
                <h1>Contact</h1>
              </div>
              <ul>
                <li>
                  <Link to="/">1234567890</Link>
                </li>
                <li>
                  <Link to="/About">abc@gmail.com</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="div_footer_box">
        <div className="div_footer_copyright">
          <p>© AmpleSecure 2023 – All Rights Reserved</p>
        </div>
        <div className="div_footer_privacy_term">
          <Link to="">Privacy Policy</Link>
          <Link to="">Term and Condition</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;