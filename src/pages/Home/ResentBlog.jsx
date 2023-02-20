import React from 'react'
import BlogPost from '../../components/BlogPost';
import ToolMain from '../../components/ToolMain'
import image from "../../images/blog-post.svg";

function ResentBlog() {
  return (
    <div>
      <div className='right-tool '>
        <ToolMain title="Recent Blog Posts" image={image} />
        <BlogPost date="12/02/2023" number="1" text="Introduction to ordinary differential equations (ODE): Explained with examples." path="/blogpost1"/>
        <BlogPost date="13/02/2023" number="2" text="How to calculate work done using its formula?" path="/blogpost1"/>
        <BlogPost date="14/02/2023" number="3" text=" where is the centripital forces use in real life" path="/blogpost1"/>

      </div>
    </div>
  )
}

export default ResentBlog