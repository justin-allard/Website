import React from "react";
import { Col, Row } from "react-bootstrap";
import greendevil from "../../Assets/afhs.png";
import uwgb from "../../Assets/UWGB.png";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <Col xs={12} md={12}>
      <h2>
        Education
      </h2>
      </Col>
      <Col xs={12} md={6}>
      <img src={uwgb} alt="UWGB Logo" className="img-fluid educationLogo" />
        <h4>University of Wisconsin Green Bay</h4>
        <p>Bachelors of Science<br/>Graduated: 2016<br/>
        Major: Information Science<br/>
        Minor: Computer Science</p>
      </Col>
      <Col xs={12} md={6}>
      <img src={greendevil} alt="AFHS Logo" className="img-fluid educationLogo" />
      <h4>Adams-Friendship High School</h4>
      <p>High School Diploma<br/>
      Graduated: 2012</p>
      </Col>
    </Row>
  );
}

export default Education;
