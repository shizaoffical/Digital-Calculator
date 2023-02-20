import React from 'react'
import { Link } from 'react-router-dom'

function Headings(props) {
  return (
    <h5  className='heading'><Link to={`${props.path}`}>{props.PopularCalculatorName}</Link></h5>
  )
}

export default Headings