import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./BlogCards";
import Particle from "../Particle";


function Blog() {
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
              isBlog={true}
              title="Justin Elected for Another Year"
              description="Justin Allard was reelected to the AFASD school board. He received the 4th most votes and will therefore receive one more year on the board."
              ghLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="A-F School Board Candidate Forum Held"
              description="Justin Allard participated in a School Board candidate forum."
              ghLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="Allard Announces Candidacy for AFASD School Board"
              description="Justin Allard has formally announced his candidacy for a second term on the Adams-Friendship Area Schools Board of Education."
              ghLink="https://github.com/soumyajit4419/Editor.io"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="A-F Referendum Calculator"
              description="I have created this tool to help property owners within the Adams-Friendship school district find how much the school portion of their property taxes will be with a referendum. "
              ghLink="/blog/tips-for-working-remotely"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="Preparing Your Website for the Next Disaster"
              description="I have found this to be one of the most important things to do when working remotely. A routine will help you get into a rhythm and stay productive throughout the day."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="Tips for Working Remotely"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="/blog/tips-for-working-remotely"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
