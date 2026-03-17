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
import ev from "../../Assets/Projects/ev.png";
import figmacricket from "../../Assets/Projects/figmacricket.png";
import watchfigma from "../../Assets/Projects/watchfigma.png";
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
              imgPath={figmacricket}
              isBlog={false}
              title="Cricket Streaming Mobile App – UI/UX Design"
              description="This project is a modern UI design created using Figma, focusing on building a clean, user-friendly interface and improving overall user experience. The goal of this project was to design an intuitive digital interface that helps users easily navigate through the application while maintaining a visually appealing layout."
              figmaLink="https://www.figma.com/design/W3x5ppO8jg6xkGxZf3IjE1/Untitled?node-id=0-1&t=lyjmqvrsY2kuEtC9-1"
                />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchfigma}
              isBlog={false}
              title="E-commerce Watch Store Website – UI/UX Design"
              description="This project is a UI/UX design prototype for a watch sales e-commerce website created using Figma. The goal of the project was to design a modern and visually appealing online platform where users can easily explore and purchase watches."
              figmaLink="https://www.figma.com/design/2JDyTdcpHLCrMzLFub5z84/Untitled?node-id=0-1&t=jwZ4WqFHUik8KevL-1"
                />
          </Col>



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
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ev}
              isBlog={false}
              title="EV trip optimization app"
              description="Created an EV trip optimization app using Android studio and machine learning to suggest optimal routes and charging stops."
              ghLink="https://github.com/pran-17/Ev-charging-app.git"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
