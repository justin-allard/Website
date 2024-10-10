import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import golfCode from "../../Assets/golfcode.png";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Justin Allard</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={golfCode}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        
        </Container>
      </Container>
       <Home2/>
    </section>
  );
}

export default Home;
