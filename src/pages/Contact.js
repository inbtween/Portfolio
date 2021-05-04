import React from "react";

import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import ButtonMailto from "../components/ButtonMail/ButtonMail.js"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailto: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("submit", this.state);

  }


  render() {
    return (
      <div className="Contact">
        <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
          {/* <h1>Michelle Smith</h1>
        <h2>Full-Stack Web Developer</h2> */}
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-6">
              <h5>Send A Message</h5>
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name"
                    placeholder="Your Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" id="email"
                    placeholder="Enter a valid email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Col>
            <Col size="md-6">
              <h5>Get in Touch</h5>
              <p>

              </p>
              <br />
              <p>
                Check me out below:
            </p>
              <p><a href="https://www.linkedin.com/in/michelle-smith-94a5871b9">LinkedIn</a>
                <br></br>
                <a href="https://github.com/inbtween">Github</a>
                <br></br>
                <ButtonMailto label="E-Mail" mailto="mailto:smith.michelle.a@gmail.com" />
                <br></br>


              </p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }


}

export default Contact;