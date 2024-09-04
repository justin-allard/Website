import React, { useEffect, useState }  from "react";
import { Container} from "react-bootstrap";
import WPBlog from "./WPBlog";
import Particle from "../Particle";
import axios from "axios"


function Blog() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://blog.justinallard.net/wp-json/wp/v2/posts")
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
        <h1>
          My Blog
        </h1>
    
       
       
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
