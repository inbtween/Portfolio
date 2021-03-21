import React from "react";
import axios from "axios";
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
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3003/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
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
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra.
            </p>
            <br />
            <p>
             Check me out below:
            </p>
            <p><a href="https://www.linkedin.com/in/michelle-smith-94a5871b9">LinkedIn</a> 
            <br></br>
            <a href="https://github.com/inbtween">Giithub</a></p>
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