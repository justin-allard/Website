import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Blog/BlogCards";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function RecentBlogs() {
  
 
  return (
    <div>
      <Container fluid className="interior-section blog-post">
        <Particle />


        <Row>
        <h2 class="purple">Recent Blog Posts</h2>

        </Row>
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

        </Row>

      
      </Container>
    </div>
  );
}

export default RecentBlogs;
