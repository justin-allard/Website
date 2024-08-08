import React, { useEffect, useState }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./BlogCards";
import WPBlog from "./WPBlog";
import Particle from "../Particle";
import axios from "axios"


function Blog() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://justinallard.net/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
       
       
         <div>
      {posts.map((item) => (
        <WPBlog
          post={item}
        />
      ))}
    </div>
       
       
       
       
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
              description="Has your website held its own during the COVID-19 Pandemic? Are there features that you wish you would have had in place to make your life easier?"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={true}
              title="Tips for Working Remotely"
              description="I have found this to be one of the most important things to do when working remotely. A routine will help you get into a rhythm and stay productive throughout the day."
              ghLink="/blog/tips-for-working-remotely"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
