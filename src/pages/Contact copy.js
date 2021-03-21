import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(
      <div className="Contact">
          <Hero backgroundImage="https://user-images.githubusercontent.com/76419703/111890668-14c44580-89c2-11eb-86fa-b63d200c0a19.jpg">
        <h1>Michelle Smith</h1>
        <h2>Full-Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
          <h5>Send A Message</h5>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control"  id="name"
              placeholder="Your Name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" id="email"
              placeholder="Please enetr a valid email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" placeholder="Message"></textarea> value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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
</Container>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}

export default Contact;