import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I live in a small town in central Wisconsin with my Wife. I graduated from the University of Wisconsin-Green Bay in 2016 with a Bachelors of Science degree in Information Science and Computer Science. I am currently a member of the Adams-Friendship Area School District Board of Education. In my free time I enjoy spending time outside and volunteering for the A-F Snack Pack Program and as a Hunter Safety Instructor.
          </p>

          <p style={{ textAlign: "justify" }}>
          I am currently employed as a Software Engineer at Heartland Business Systems. I focus on working in the web space with Kentico Experience CMS. I have worked with a variety of different technologies including C#, .NET, MVC, HTML, CSS, JavaScript, SQL, PHP, and Web Forms.
          </p>
         

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
