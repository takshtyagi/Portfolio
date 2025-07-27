import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taksh Tyagi </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I love turning creative ideas into interactive, responsive, and user-friendly web experiences. 
            <br />
            I have completed Bachelors in computer applications (BCA) at Amity
            Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Taksh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard; 

