import React from "react";
import bgImg from "../assets/web/Img/About.png";
import "../assets/web/Styles/About.css";
import { Col, Container, Row } from "react-bootstrap";
import vecimg from "../assets/web/Img/our_history 1.png";
import vecimg1 from "../assets/web/Img/history.png";
import about1 from "../assets/web/Img/Aboutone.png";
import about2 from "../assets/web/Img/Abouttwo.png";
import about3 from "../assets/web/Img/AboutThree.png";
import techImg from "../assets/web/Img/largest_technology-company 1.png";
import Footer from "./Common/Footer";
function About() {
  return (
    <>
      <div className="div_About_container">
        <img src={bgImg} className="w-100 img-fluid" alt="no-img" />
        <div className="About_headers">
          <h1>About Our Vision</h1>
          <p>
          At Ample Secure, we understand that protecting your assets and ensuring your safety is a
top priority
          </p>
        </div>
      </div>
      {/* our history */}
      <Container>
        <div className="div_About_middle_container">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <img src={vecimg1} className="img-fluid p-3" alt="no-img" />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h1>Transparency & Integrity</h1>
              <p>
              Our work deals with minute details of investigation and sharing them with our clients
so as to prevent any fraudulent activity. For the smooth functioning of our work,
transparency with our clients of all domains become extremely crucial. In the past 16 years,
this has been the most elevating element of our work. Being open and transparent has
gradually led us in becoming a trustworthy firm for lakhs of individuals and professional
companies. Our nature of work demands transparency at every stage of investigations and
verifications, and hence, every employee at Ample Secure makes sure that utmost
transparency of works and words is being maintained thoroughly. <br/><br/>
The act of being honest is an art in itself, and we make sure that we excel in this art
in order to make ourselves the first priority for you in the field of risk investigation.
Investigation and assessments are done to cross examine the authenticity and truthfulness
of second party, and to master this task, it’s crucial that we, as third party vendor,
demonstrate integrity in our work. Hence, we ensure integrity in rendering our services
with unquestioned facilitation.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h1>Quality</h1>
              <p>
              The last but not the least, quality is what we advocate for. It is a fundamental
principle that guides our operations. We are committed to providing our clients with the
highest level of service, and we believe that quality is essential to achieving this goal.
Overall, the value of quality is central to our operations at Ample Secure. We believe that
by providing our clients with accurate, timely, and effective risk investigation and
management services, we can help them achieve their goals with confidence and peace of
mind. Apart from investigation services, we also make sure that the post investigation
reports and summaries are also qualitatively of high order so that you can make your
conclusions with ease.
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img src={vecimg} className="img-fluid p-3 " alt="no-img" />
            </Col>
          </Row>
        </div>
      </Container>

      {/* our history */}
      {/* technology container */}
      <Container>
        <div className="div_About_Technology_container">
          <ul className="About_ul">
            <li className="mb-3">
              <h1>
                We are India’s largest identity Document Verification
                company.
              </h1>
            </li>
            <li className="text-center">
              <img src={techImg}  className="img-fluid my-2" alt="no-img" />
            </li>
            <li>
              <p>
              In the insurance sector, a whole bunch of documents are required, from a birth
certificate to official papers, to apply for a particular policy. And hence, with the
requirement of such number of documents, comes the need to verify the authenticity and
validity of those documents.
There have been cases when applicants fake their ID &amp; Address Proofs, Financial docs
or employment details, etc while applying for policies. Document forgery is a common case
nowadays. This is where Ample Secure comes in the picture. Our role to cross verify all the
documents submitted by an applicant in the insurance company. This is usually done by
contacting the issuing authority of those documents like hospitals, government offices, etc.
After examining and analysing these documents, their sources and their truthfulness,
our team sends a full-fledged report with valid conclusions to insurance companies.
              </p>
            </li>
          </ul>
        </div>
      </Container>
      {/* technology container */}
      {/* leader container */}
      <div className="color">
      <Container>
        <div className="About_leader_container">
          <div className="about_heading">
            <h1 className="text-center text-capitalize">
              Led by thought leaders and Board of Advisors
            </h1>
          </div>
          <Row>
            <Col sm="12" md="4" lg="4">
              <div className="about_card ">
                <img src={about1} className="img-fluid p-3" alt="no-img" />
                <h3 className="text-center">Name</h3>
              </div>
            </Col>
            <Col sm="12" md="4" lg="4">
              <div className="about_card">
                <img src={about2} className="img-fluid p-3" alt="no-img" />
                <h3 className="text-center">Name</h3>
              </div>
            </Col>
            <Col sm="12" md="4" lg="4">
              <div className="about_card">
                <img src={about3} className="img-fluid p-3" alt="no-img" />
                <h3 className="text-center">Name</h3>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      </div>
      {/* leader container */}
      {/*  */}
      <div className="div_connect">
        <Container className="my-4">
          <Row>
            <Col md={6} sm={12} lg={6}>
              <h2 className="text-start text-capitalize">
                Let’s build an authentic world. Connect with us.
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

export default About;
