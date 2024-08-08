
import React from "react";


export default function WPBlog({ post }) {



  return (
  
<div class="project-card col-md-4">
  <div class="project-card-view card">
    <div class="card-body">
      <div class="card-title h5">{post.title.rendered}</div>
      <p class="card-text" style="text-align: justify;">{{ __html: post.excerpt.rendered }}</p>
      
      <a role="button" tabindex="0" href="" class="btn btn-primary">Read More</a>

</div>
</div>
</div>

  );
}