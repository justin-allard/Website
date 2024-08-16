import React, { useEffect, useState }  from "react";
import { Container} from "react-bootstrap";
import WPBlogDetail from "./WPBlogDetail";
import Particle from "../Particle";
import axios from "axios"


function BlogDetail() {

  const queryParams = new URLSearchParams(window.location.search);
  const blogSlug = queryParams.get("slug");

var apiURL = "https://justinallard.net/wp-json/wp/v2/posts?slug="+blogSlug;


  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(apiURL.toString())
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
