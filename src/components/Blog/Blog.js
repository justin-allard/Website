import React, { useEffect, useState }  from "react";
import { Container} from "react-bootstrap";
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
          My Blog
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
       
       
         <div class="row">
      {posts.map((item) => (
        <WPBlog
          post={item}
        />
      ))}
    </div>
       
      </Container>
    </Container>
  );
}

export default Blog;
