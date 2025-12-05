import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nlp from "../../Assets/Projects/nlp.jpg";
import leaf from "../../Assets/Projects/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.jpg";
import education  from "../../Assets/Projects/education.png";
import bitsOfCode from "../../Assets/Projects/blog.jpg";
import soccer from "../../Assets/Projects/soccer.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tour booking website"
              description="A website where people can easily find and book travel tours to different places"
              ghLink="https://github.com/pran-17/world-adventure-website-.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hotel booking prediction"
              description="Predicts future room bookings to help hotels manage staff, pricing, and availability more efficiently"
              ghLink="https://github.com/pran-17/hotel-prediction.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Car sales prediction"
              description="Forecasts future car sales using past data to help dealers and manufacturers make smarter decisions about inventory, pricing, and marketing."
              ghLink="https://github.com/pran-17/carsales-prediction.git"
                          
            />
          </Col>
         
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Object Detection and Classification"
              description="Developed a real-time object detection system using MobileNet-SSD deep learning model and OpenCV, capable of detecting people, vehicles, animals, and daily objects from a live webcam feed with high accuracy."
              ghLink="https://github.com/pran-17/Object-Detection.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restaurant Menu Booking  system"
              description="Built a fully responsive Restaurant Web Application using React.js with a clean, modern component-based MERN architecture."
              ghLink="https://github.com/pran-17/restaurant-food-booking.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soccer}
              isBlog={false}
              title="Performance Analysis and Injury Prediction System"
              description="built a Soccer Performance & Injury Prediction System using Python, Streamlit, and XGBoost, integrating FIFA player stats, match history, and injury records to extract workload and physiological features. •"
              ghLink="https://github.com/rithishvellingiri/injury-prediction-for-soccer.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> 

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={education}
              isBlog={false}
              title="Education Management   system"
              description="Developed a fully responsive Education Management Web Application using the MEAN architecture with modular components and role-based dashboards for Admin, Teacher, and Student workflows."
              ghLink="https://github.com/pran-17/education-angular.git"
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="Interview Assistant  system"
              description="Created AI interview assistance sytem using NLP"
              ghLink="https://github.com/pran-17/interview-assistance.git"
              
            />
          </Col>
          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
