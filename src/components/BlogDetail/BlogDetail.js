import React, { useEffect, useState, useCallback }  from "react";
import { Container} from "react-bootstrap";
import WPBlogDetail from "./WPBlogDetail";
import axios from "axios"


function BlogDetail() {

  const queryParams = new URLSearchParams(window.location.search);
  const blogSlug = queryParams.get("slug");

  const url = `https://justinallard.net/wp-json/wp/v2/posts?slug=${blogSlug}`;


  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      });
  }, [url]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);


  return (
    <Container fluid className="project-section">
      <Container>
    
    
       
       
         <div class="row">
      {posts.map((item) => (
        <WPBlogDetail
          post={item}
        />
      ))}
    </div>

    <div class="row">
      <div class="col-12">
      <a role="button" tabindex="0" href="/blog" class="btn btn-primary">More Blogs</a>
     
      </div>
      
        
    
    </div>
       
      </Container>
    </Container>
  );
}

export default BlogDetail;
