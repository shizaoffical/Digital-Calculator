import React from 'react'
import { Link } from 'react-router-dom'
function CategoryCard(props) {
  return (
    <>

      <div className='category-card'>
          <img src={props.image} alt=""  className='category-card-image'/>
          <Link className='category-card-link' to={`${props.path}`}><p className='category-card-title'>{props.title}</p></Link>
      </div>


    </>
  )
}

export default CategoryCard