import React from 'react';
import Card from "react-bootstrap/Card";



export default function Posts() {
    const posts = useFetch('https://justinallard.net/wp-json/wp/v2/posts');
  return (
    <div container>
      {posts && posts.map((post, index) => (
      <div item xs={4} key={index}>
         <Card className="project-card-view">
    
    <Card.Body>
      <Card.Title>{{__html: post.title.rendered}}</Card.Title>
      <CgCalendar />
      <Card.Text style={{ textAlign: "justify" }}>
      {{__html: post.content.rendered}}
      </Card.Text>

    </Card.Body>
  </Card>
      </div>
      ))}
    </div>
  );
}