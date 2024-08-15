import React from "react";
import { Row } from "react-bootstrap";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <Col xs={12} md={12} className="tech-icons">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Education
      </h1>
      </Col>
      <Col xs={12} md={6} className="tech-icons">
        <p>University of Wisconsin Green Bay</p>
      </Col>
      <Col xs={12} md={6} className="tech-icons">
        Adams-Friendship Area School District
      </Col>
    </Row>
  );
}

export default Education;
