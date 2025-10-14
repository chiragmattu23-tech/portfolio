import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPycharm,
  SiFigma,
  SiJira,
  SiNotion,
} from "react-icons/si";
import { FaRegStickyNote } from "react-icons/fa"; // Placeholder for Miro
import { MdOutlineQuiz } from "react-icons/md"; // Placeholder for Maze
import { BiTargetLock } from "react-icons/bi"; // Placeholder for Optimal Workshop
import TextTitle from "./TextTitle";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <TextTitle text="MacOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <TextTitle text="Figma" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <TextTitle text="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegStickyNote />
        <TextTitle text="Miro" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
        <TextTitle text="Notion" />
      </Col>
    </Row>
  );
}

export default Toolstack;
