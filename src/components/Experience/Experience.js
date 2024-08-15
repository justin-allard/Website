import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
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

        <Col xs={12} md={4}>

      </Col>
      <Col xs={12} md={8}>
      <h3>Heartland Business Systems</h3>
        
   
        <p>November 2016 – Present<br/>Software Engineer<br/><br/>I develop and maintain websites primarily using Kentico Experience and the .net stack. I also have used many other CMS tools including WordPress and Sitecore.</p>
        
</Col>
        
        
        </Row>

        <Row>

<Col xs={12} md={4}>

</Col>
<Col xs={12} md={8}>
<h3>Heartland Business Systems</h3>


<p>November 2016 – Present<br/>Software Engineer<br/><br/>I develop and maintain websites primarily using Kentico Experience and the .net stack. I also have used many other CMS tools including WordPress and Sitecore.</p>

</Col>


</Row>

<Row>

<Col xs={12} md={4}>

</Col>
<Col xs={12} md={8}>
<h3>UW-Green Bay</h3>


</Col>


</Row>


<Row>

<Col xs={12} md={4}>

</Col>
<Col xs={12} md={8}>
<h3>Free Lance Web Developer</h3>


</Col>


</Row>


<Row>

<Col xs={12} md={4}>

</Col>
<Col xs={12} md={8}>
<h3>Adams-Columbia Electric Cooperative</h3>


</Col>


</Row>


<Row>

<Col xs={12} md={4}>

</Col>
<Col xs={12} md={8}>
<h3>UW – Green Bay</h3>


</Col>


</Row>

<Row>

<Col xs={12} md={4}>

</Col>
<Col xs={12} md={8}>
<h3>Wisconsin Space Grant Consortium</h3>


</Col>


</Row>


<hr/>

        <Techstack />

      
      </Container>
    </div>
  );
}

export default Experience;
