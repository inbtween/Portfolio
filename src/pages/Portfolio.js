import React, { Component } from "react";

import Card from "../components/Card";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

//import image
import image1 from "../images/note-taker-app.png";
import image2 from "../images/weather-dashboard.png"

class Portfolio extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next Image to be displayed
  componentDidMount() {
    
  }


 

  render() {
    return (
      <div>
           <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
        <h1>Michelle Smith</h1>
        <h2>Full-Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
            <h3 className="text-center">
              Note-Taker
            </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <br></br>
        <h3 className="text-center">
              Weather Dashboard
            </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <br></br>
        <h3 className="text-center">
              Password Generator
            </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
          </Col>
          <Col size="md-6">
          <h3 className="text-center">
              Medical Call
            </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <br></br>
        <h3 className="text-center">
              Task Ya Later
            </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <br></br>
        <h3 className="text-center">
              Hamburger Eater
            </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
          </Col>
        </Row>
      </Container>
        
       
      </div>
    );
  }
}

export default Portfolio;
