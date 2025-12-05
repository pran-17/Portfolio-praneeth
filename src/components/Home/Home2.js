import React, { useState } from "react"; // Added useState
import { Container, Row, Col, Form, Button } from "react-bootstrap"; // Added Form and Button
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Import emailjs
import emailjs from 'emailjs-com'; 

function Home2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    //const serviceID = process.env.REACT_APP_SERVICE_ID; 
//const templateID = process.env.REACT_APP_TEMPLATE_ID;
//const userID = process.env.REACT_APP_USER_ID;

    // Replace with YOUR EmailJS Service ID, Template ID, and Public Key (see step 3)
    const serviceID = "35praneeth"; 
    const templateID = "template_o8a3jfj";
    const userID = "i93uqYwyRujaJHBiw"; // This is your Public Key

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully! ✅');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again. ❌');
      });
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Original Row 1: Intro Text and Avatar */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> java,python,Html,css and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Analyst.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="profile" />
            </Tilt>
          </Col>
        </Row>
        
        <hr className="my-5" style={{ borderColor: '#6a0572' }} />
        
        {/* NEW Row 2: Contact Form Section */}
        <Row>
          <Col md={12} className="contact-form-section">
            <h1 className="text-center">CONTACT ME</h1>
            <p className="text-center">
              Send me a message, and I'll get back to you soon.
            </p>
            
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <Form onSubmit={handleSubmit} className="p-4 rounded shadow-lg contact-form-body">
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name" // Important: must match template variable
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email" // Important: must match template variable
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number (optional)"
                      name="phone" // Important: must match template variable
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter your message"
                      name="message" // Important: must match template variable
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mt-3">
                    Send Message
                  </Button>
                  
                  {status && (
                    <p className="mt-3 text-center" style={{ color: status.includes('successfully') ? 'lightgreen' : 'red' }}>
                      {status}
                    </p>
                  )}
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <hr className="my-5" style={{ borderColor: '#6a0572' }} />

        {/* Original Row 3: Find Me On Socials */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            {/* ... social links ... (content is unchanged) */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pran-17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/praneeth-va-550a562ab"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/praneeth_7975?igsh=MTBhZHgwb2x6OTNhOA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;