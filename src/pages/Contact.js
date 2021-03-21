import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
      <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
        <h1>Michelle Smith</h1>
        <h2>Full-Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
            <h5>Send A Message</h5>
            <div className="form-group">
              <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              />
              <br></br>
               <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Please enetr a valid email"
              />
               <br></br>
               <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              placeholder="Subject"
              />
               <br></br>
               <textarea
               name="message"
               className="form-control"
               placeholder="Message">
               </textarea>
               <button
               type="submit"
               className="button button-a button-big button-rouded">Send Message
              </button>
            </div>
          </Col>
          <Col size="md-6">
            <h5>Get in Touch</h5>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra.
            </p>
            <br />
            <p>
             Q tempus eget nibh.
            </p>
            <>
            <ul>
              <li href="https://www.linkedin.com/in/michelle-smith-94a5871b9">
              <span >
              <i className="social-linkedin">LinkedIn</i>
              </span> 
              </li>
            </ul>
            <ul>
              <li href="https://github.com/inbtween">
              <span >
              <i className="social-github">Github</i>
              </span> 
              </li>
            </ul>

              
            </>

          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Contact;
