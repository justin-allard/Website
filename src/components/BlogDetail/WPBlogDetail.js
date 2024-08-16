import React from "react";


export default function WPBlogDetail({ post }) {


  return (
  
<div class="project-card col-md-4">
  <div class="project-card-view card">
    <div class="card-body">
      <div class="card-title blogTitle">{post.title.rendered}</div>
      
  
      <p
          className="card-text"
          style={{textAlign: 'justify'}}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      
      <a role="button" tabindex="0" href="/" class="btn btn-primary">Read More</a>

</div>
</div>
</div>

  );
}