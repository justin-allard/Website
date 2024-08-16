import React, { useEffect, useState }  from "react";
import { Container} from "react-bootstrap";
import WPBlogDetail from "./WPBlogDetail";
import Particle from "../Particle";
import axios from "axios"


function BlogDetail() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://justinallard.net/wp-json/wp/v2/posts?slug=justin-elected-for-another-year")
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
    
    
       
       
         <div class="row">
      {posts.map((item) => (
        <WPBlogDetail
          post={item}
        />
      ))}
    </div>
       
      </Container>
    </Container>
  );
}

export default BlogDetail;
