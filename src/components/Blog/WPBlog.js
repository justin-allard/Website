
import React from "react";


export default function WPBlog({ post }) {



  return (
    <div class="container">
      <div class="blog-container">
        <p className="blog-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h2 className="blog-title">{post.title.rendered}</h2>
        <p
          className="blog-excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
  
      </div>
    </div>
  );
}