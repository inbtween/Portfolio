import React, { Component } from "react";

import Card from "../components/Card";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

//import image
import image1 from "../images/note-taker-app.png";
import image2 from "../images/weather-dashboard.png";
import image3 from "../images/password-generator.png";
import image4 from "../images/project-1-medical-call.png";
import image5 from "../images/project-2-task-ya-later.png";
import image6 from "../images/google-book-search.png";


class Portfolio extends Component {
  state = {
    image: ""
  };

  // When the component mounts, load the next Image to be displayed
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
          {/* <h1>Michelle Smith</h1>
          <h2>Full-Stack Web Developer</h2> */}
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-6">
              <h3 className="text-center">
                Note-Taker
            </h3>
              <p>An app that can be used to write and save notes and deployed using Heroku.</p>
              <a href="https://github.com/inbtween/note-taker-2" style={{ display: 'inline-block', color: 'black', margin: '20px' }} >Github Link</a>
              <a href="https://peaceful-everglades-02412.herokuapp.com/" style={{ color: 'black' }} >Deployed Link</a>
              <Card image={image1} handleBtnClick={this.handleBtnClick}
                href="https://peaceful-everglades-02412.herokuapp.com/" />
              <br></br>
              <h3 className="text-center">
                Weather Dashboard
            </h3>
              <p>An app that a traveler can use to see the weather outlook for multiple cities and plan accordingly.</p>
              <a href="https://github.com/inbtween/Weather-Dashboard" style={{ display: 'inline-block', color: 'black', margin: '20px' }} >Github Link</a>
              <a href="https://inbtween.github.io/Weather-Dashboard/" style={{ color: 'black' }} >Deployed Link</a>
              <Card image={image2} handleBtnClick={this.handleBtnClick}
                href="https://inbtween.github.io/Weather-Dashboard/" />
              <br></br>
              <h3 className="text-center">
                Password Generator
            </h3>
              <Card image={image3} handleBtnClick={this.handleBtnClick}
                href="https://inbtween.github.io/generate-password/" />
            </Col>
            <Col size="md-6">
              <h3 className="text-center">
                Medical Call
            </h3>
              <p>Our website and app will allow you to locate any hospital including the bed count for each hospital near you.</p>
              <a href="https://github.com/janesferr/Project1-MedicalCall/" style={{ display: 'inline-block', color: 'black', margin: '20px' }} >Github Link</a>
              <a href="https://janesferr.github.io/Project1-MedicalCall/" style={{ color: 'black' }} >Deployed Link</a>
              <Card image={image4} handleBtnClick={this.handleBtnClick}
                href="https://janesferr.github.io/Project1-MedicalCall/" />
              <br></br>
              <h3 className="text-center">
                Task Ya Later
            </h3>
              <Card image={image5} handleBtnClick={this.handleBtnClick}
                href="https://project-two-ljm.herokuapp.com/" />
              <br></br>
              <h3 className="text-center">
                Google Book Search
            </h3>
              <Card image={image6} handleBtnClick={this.handleBtnClick}
                href="https://dry-fjord-99010.herokuapp.com/"
                style={{

                }} />

            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default Portfolio;
