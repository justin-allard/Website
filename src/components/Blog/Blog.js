import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./BlogCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
//import chatify from "../../Assets/Projects/chatify.png";
//import suicide from "../../Assets/Projects/suicide.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";

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
              //imgPath={chatify}
              isBlog={false}
              title="Justin Elected for Another Year"
              description="Justin Allard was reelected to the AFASD school board. He received the 4th most votes and will therefore receive one more year on the board."
              //ghLink=""
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title="A-F School Board Candidate Forum Held"
              description="Justin Allard participated in a School Board candidate forum."
              //ghLink=""
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="Allard Announces Candidacy for AFASD School Board"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={leaf}
              isBlog={false}
              title="A-F Referendum Calculator"
              description="I have created this tool to help property owners within the Adams-Friendship school district find how much the school portion of their property taxes will be with a referendum. "
              //ghLink=""
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={suicide}
              isBlog={false}
              title="Preparing Your Website for the Next Disaster"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={emotion}
              isBlog={false}
              title="Tips for Working Remotely"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              //ghLink="/blog//tips-for-working-remotely"
              demoLink="/blog//tips-for-working-remotely"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
