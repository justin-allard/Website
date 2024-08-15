import axios from "axios";
import React, { useEffect, useState } from "react";


export default function WPBlog({ post }) {

  const [featuredImage, setFeaturedimage] = useState();

  const getImage = () => {
    axios
     .get(post?._links["wp:featuredmedia"][0]?.href)
     .then((response) => {
      setFeaturedimage(response.data.source_url);
    });
  };




  return (
  
<div class="project-card col-md-4">
  <div class="project-card-view card">
    <div class="card-body">
      <div class="card-title h5">{post.title.rendered}</div>
      <p className="blog-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <img src={featuredImage} alt="featured image" class="mask" />
      <p class="card-text" style={{textAlign: 'justify'}}>{{__html:post.excerpt.rendered}}</p>
      
      <a role="button" tabindex="0" href="/" class="btn btn-primary">Read More</a>

</div>
</div>
</div>

  );
}