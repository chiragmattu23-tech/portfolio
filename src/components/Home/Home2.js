import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile_image.png";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with design and creating intuitive digital
              experiences.
              <br />
              <br />I am fluent in
              <i>
                <b className="purple">
                  {" "}
                  Figma, modern design principles including user-centered
                  design, accessibility,
                </b>{" "}
                and <b className="purple">responsive layouts. </b>
              </i>
              <br />
              <br />
              My field of interest lies in crafting &nbsp;
              <i>
                <b className="purple">engaging user interfaces </b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">improving user journeys</b> through{" "}
                <b className="purple">thoughtful design. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for{" "}
              <b className="purple">designing</b> and{" "}
              <b className="purple">prototyping</b> interactive experiences,
              conducting <b className="purple">user research,</b> and{" "}
              <b className="purple">collaborating</b>
              <i> closely with developers to bring designs to life.</i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:chiragmattu23@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chirag-mattu-4a40981b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* will add leetcode and hacker rank profiles */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
