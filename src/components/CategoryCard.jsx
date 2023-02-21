import React from 'react'
import { Link } from 'react-router-dom'
function CategoryCard(props) {
  return (
    <>
       <Link className='category-card-link' to={`${props.path}`}>
      <div className='category-card'>
          <img src={props.image} alt=""  className='category-card-image'/>
          <p className='category-card-title'>{props.title}</p>
      </div>

</Link>
    </>
  )
}

export default CategoryCard