import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function Experience() {
  
 
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />


        <Row>
        <h1 class="vw-page-title">Experience</h1>
   
        </Row>

        <Row>
        
        <h3>Heartland Business Systems</h3>
        
   
   <p>November 2016 – Present<br/>Software Engineer<br/><br/>I develop and maintain websites primarily using Kentico Experience and the .net stack. I also have used many other CMS tools including WordPress and Sitecore.</p>
   
        </Row>

      
      </Container>
    </div>
  );
}

export default Experience;
