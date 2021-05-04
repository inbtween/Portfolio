import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";


function Home() {
  return (
    <div>
      <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hello,</h1>
            <h2>I am Michelle Smith.</h2>
            <h2>I am a Full-Stack Web Developer and Fine Artist.</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h2>
              And this is a Portfolio of my work.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
