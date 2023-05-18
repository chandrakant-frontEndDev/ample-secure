import React from "react";
import bgImg from "../assets/web/Img/Background.png";
import "../assets/web/Styles/Home.css";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import Footer from "./Common/Footer";
import midImg from "../assets/web/Img/Rectangle 9.png";
import IndustryImg from "../assets/web/Img/Rectangle 11.png";
import vec1 from "../assets/web/Img/Rectangle 12.png";
import vec2 from "../assets/web/Img/Rectangle 12 (1).png";
import vec3 from "../assets/web/Img/Rectangle 12 (2).png";
import vec4 from "../assets/web/Img/Rectangle 12 (3).png";
import vec5 from "../assets/web/Img/Rectangle 12 (4).png";

import smartImg from "../assets/web/Img/Rectangle 14.png";
import postImg from "../assets/web/Img/Rectangle 16.png";
import teamImg1 from "../assets/web/Img/Rectangle 24.png";
import teamImg2 from "../assets/web/Img/Rectangle 25.png";
import teamImg3 from "../assets/web/Img/Rectangle 26.png";
import V1 from "../assets/web/Img/Vector (3).png";
import V2 from "../assets/web/Img/Vector (4).png";
import V3 from "../assets/web/Img/Vector (5).png";

import R3 from "../assets/web/Img/R3.png";

function Home() {
  return (
    <>
      {/* //Header  */}
      <div className="div_home_container">
        <img src={bgImg} className="w-100 img-fluid" alt="no-img" />

        <div className="Home_headers">
          <h1>Go on with Fearless,Risk-Free & Verified Onboarding</h1>
          <p>India's leading Background Screening andInvestigation Company</p>
        </div>
      </div>
      {/* Headers */}

      {/* eclipse */}
      <div className="div_home_ellipse_container">
        <Container>
          <ul className="ellipse_ul">
            <li>
              <div className="ellipse_box">
                <img src={V1} />
                <h1>Digital Scrutiny </h1>
                <p>
                  Scan digital databases using advanced apps for verification.
                </p>
              </div>
            </li>
            <li>
              <div className="ellipse_box">
                <img src={V2} />
                <h1>Digital Scrutiny </h1>
                <p>
                  Solve on-risk/underwriting identified cases with concrete
                  facts.
                </p>
              </div>
            </li>
            <li>
              <div className="ellipse_box">
                <img src={V3} />
                <h1>Digital Scrutiny </h1>
                <p>
                  Swiftly tap, identify and administer what is needful for
                  screening
                </p>
              </div>
            </li>
          </ul>
        </Container>
      </div>

      {/* eclipse */}

      {/* middle Container */}
      <div className="div_home_middle_container">
        <Container>
          <Row>
            <Col md="4" lg="4" sm="12">
              <img
                src={midImg}
                style={{ width: "auto", height: "auto" }}
                className="img-fluid  "
                alt="no-img"
              />
            </Col>
            <Col md="8" sm="12" lg="8">
              <div className="div_home_middle_card">
                <h3>First Advantage Bundles</h3>
                <h1>Streamline Your Application Journey</h1>
                <p>
                  Along the Applicant Journey and beyond, First Advantage makes
                  it easy to bundle the solutions you need to Hire Smarter and
                  Onboard Faster. With an integrated screen-to-onboard
                  experience and applicant-focused technology, improve your
                  time-to-hire and enhance your employer brand.
                </p>
                <button>Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Middle Container */}

      {/* Industry */}
      <div className="div_home_industry">
        <div className="Industry_headers">
          <h1>Industries We Serve!</h1>
          <div className="industry_cards">
            <ul>
              <li>
                <img src={vec1} className="img-fluid" alt="nog-img" />
              </li>
              <li>
                <img src={vec2} className="img-fluid" alt="nog-img" />
              </li>{" "}
              <li>
                <img src={vec3} className="img-fluid" alt="nog-img" />
              </li>{" "}
              <li>
                <img src={vec4} className="img-fluid" alt="nog-img" />
              </li>{" "}
              <li>
                <img src={vec5} className="img-fluid" alt="nog-img" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Industry */}
      <Container></Container>
      <Container>
        <div className="div_home_technology_container">
          <Row>
            <Col sm="12" md="6" xl="6" lg="6" className="my-5">
              <div className="div_tech_box">
                <h3>Insight & Analytics™</h3>
                <h1>Smart Analytics & Reporting</h1>
                <p>
                  Turn data into insight and insight into action, so you can get
                  the full story about your employment background check
                  screening program performance.
                </p>
                <button>learn More</button>
              </div>
            </Col>
            <Col sm="12" md="6" xl="6" lg="6" className="my-5">
              <img src={smartImg} className="img-fluid" alt="no-img" />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" xl="6" lg="6" className="my-5">
              <img src={postImg} className="img-fluid" alt="no-img" />
            </Col>{" "}
            <Col sm="12" md="6" xl="6" lg="6" className="my-5">
              {" "}
              <div className="div_tech_box">
                <h3>Criminal Records Monitoring</h3>
                <h1>Ongoing Post-Hire Monitoring Solution</h1>
                <p>
                  We can help protect your brands, workplaces, and relationships
                  from risk with First Advantage criminal records monitoring
                </p>
                <button>learn More</button>
              </div>{" "}
            </Col>
          </Row>
        </div>
      </Container>

      {/* People Heart Start */}

      <div className="div_home_people_container">
        <Container>
          <Row>
            <Col sm="12" md="4" lg="4">
              <div className="people_left_side_img">
                <img src={R3} className="img-fluid" alt="no-img" />
              </div>
            </Col>
            <Col sm="12" md="8" lg="8">
              <div className="people_right_side">
                <h1>People are at the Heart of Everything We Do</h1>
                <p>
                  First Advantage is committed to environmental, social, and
                  corporate governance initiatives.
                </p>
                <button className="">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* People Heart End */}

      {/* Our Team */}
      <div className="div_home_our_tame">
        <Container>
          <div className="team_title">
            <h1>Our Team</h1>
          </div>

          <Row className="justify-content-center">
            <Col sm="12" md="4" xl="4" lg="4">
              <div className="Team_Card">
                <img src={teamImg1} className="img-fluid" alt="no-img" />
                <h4 className="text-center">NAME</h4>
              </div>
            </Col>
            <Col sm="12" md="4" xl="4" lg="4">
              <div className="Team_Card">
                <img src={teamImg2} className="img-fluid" alt="no-img" />
                <h4 className="text-center">NAME</h4>
              </div>
            </Col>
            <Col sm="12" md="4" xl="4" lg="4">
              <div className="Team_Card">
                <img src={teamImg3} className="img-fluid" alt="no-img" />
                <h4 className="text-center">NAME</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Our Team */}
      {/*  */}
      <div className="div_connect">
        <Container className="my-4">
          <Row>
            <Col md={6} sm={12} lg={6}>
              <h2 className="text-start text-capitalize">
                Connect with us to get started with our Authentication
                Technology
              </h2>
            </Col>
            <Col md={6} sm={12} lg={6}>
              <div className="div_connect_button">
                <button className="button">GET IN TOUCH</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*  */}
      <Footer />
    </>
  );
}

export default Home;
