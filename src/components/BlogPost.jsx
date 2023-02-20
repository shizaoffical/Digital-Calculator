import React from 'react'
import { Link } from 'react-router-dom'

function BlogPost(props) {
  return (
    <>
       <div >
           <small  className='blog-post-date '>{props.date}</small>
           <div className=' d-flex '>   
           <h1 className='blog-post-number'>{props.number}</h1>

           <Link to={`${props.path}`} className='blog-post-text'><p >{props.text}</p></Link>
           </div>
    
       </div> 
    
    </>
  )
}

export default BlogPost