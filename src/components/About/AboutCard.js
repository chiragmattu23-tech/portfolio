import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chirag </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently employed as a UI/UX Designer at Mentorplus.
            <br />
            <br />
            I am a passionate designer with a knack for creating user-friendly
            and visually appealing digital experiences.
            <br />
            <br />
            Apart from designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dedicated to creating impactful and meaningful digital
            experiences!"
          </p>
          <footer className="blockquote-footer">Chirag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
