import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
        <h1>Michelle Smith</h1>
        <h2>Full-Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hello!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
           
            <p>
              This is a Portfolio of my work as a Full-Stack Web Developer.
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
