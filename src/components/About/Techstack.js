import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiUikit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiFlask,
  SiGooglecloud,
  SiFastapi,
  SiExpress,
  SiFigma,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import {
  FaRegLightbulb,
  FaUsers,
  FaRegObjectGroup,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineLeaderboard } from "react-icons/md";
import { BsUiChecksGrid } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { BiTestTube } from "react-icons/bi";
import TextTitle from "./TextTitle";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers />
        <TextTitle text="User Experience" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineLeaderboard />
        <TextTitle text="Data-Driven Design" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <TextTitle text="Figma" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegLightbulb />
        <TextTitle text="UX Research" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsUiChecksGrid />
        <TextTitle text="User Interface" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineDesignServices />
        <TextTitle text="Prototyping" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRegObjectGroup />
        <TextTitle text="Interaction Design" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <TextTitle text="Generative AI in UX" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUsers />
        <TextTitle
          text="User Experience Design"
          style={{ textAlign: "center" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineLeaderboard />
        <TextTitle text="UX Strategy" style={{ textAlign: "center" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiTeamLine />
        <TextTitle
          text="Cross-functional Team Leadership"
          style={{ textAlign: "center" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <TextTitle
          text="Design Systems Development"
          style={{ textAlign: "center" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChalkboardTeacher />
        <TextTitle
          text="Human-Centered Design (HCD)"
          style={{ textAlign: "center" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineDesignServices />
        <TextTitle
          text="Prototyping & Wire framing"
          style={{ textAlign: "center" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiTestTube />
        <TextTitle text="Usability Testing" style={{ textAlign: "center" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
