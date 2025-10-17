import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import burgerLicious from "../../Assets/Projects/burgerLicious.png";
import carouselAnimation from "../../Assets/Projects/carouselAnimation.png";
const ProjectCard = React.lazy(() => import("./ProjectCards"));
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={burgerLicious}
                isBlog={false}
                title="BurgerLicious"
                description="A high-fidelity design prototype for a modern food ordering app. Features intuitive menu browsing, customizable orders, real-time order tracking, seamless checkout, and user-friendly navigation. Designed in Figma with a focus on clean UI, accessibility, and engaging user experience."
                demoLink="https://www.figma.com/proto/qMVUJfEuWp4w7GVzr1Gd4s/BurgerLicious?node-id=5-11&t=bkIXqHNFwMP7zUCi-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A507&starting-point-node-id=5%3A11"
              />
            </Suspense>
          </Col>
          <Col md={4} className="project-card">
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectCard
                imgPath={carouselAnimation}
                isBlog={false}
                title="Carousel Animation"
                description="A 3D Carousel Animation prototype created in Figma that explores motion, depth, and smooth transitions. This experiment focuses on UI motion design, 3D animation, and interaction design, using Smart Animate, layered prototyping, and microinteractions to make interfaces feel more dynamic and engaging."
                demoLink="https://www.figma.com/proto/i4UkUbEA4Q4NCnbRgsoQbz/Valorant-3D-carousel-animation?node-id=48-2&t=RkCy3WJEUPiIIBTk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=48%3A2"
              />
            </Suspense>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
