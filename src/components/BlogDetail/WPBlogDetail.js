import React from "react";
import { Row, Col} from "react-bootstrap";


export default function WPBlogDetail({ post }) {


  return (
  <div class="blogDetail">


<Row>
        <Col xs={12} md={12}>
        <h1>{post.title.rendered}</h1>
      </Col>
        </Row>

        <Row>
        <Col xs={12} md={12}>
        <p
          className="card-text"
          style={{textAlign: 'justify'}}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </Col>
        </Row>

        <Row>
        <Col xs={12} md={12}>
        <a role="button" tabindex="0" href="/blog" class="btn btn-primary">More Blogs</a>
      </Col>
        </Row>





      
      



</div>

  );
}