import React from 'react'
import { Link } from 'react-router-dom'

function NewComponentsText(props) {
  return (
    <>
      <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title}</Link></p>
    { props.title1 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title1}</Link></p>}
    { props.title2 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title2}</Link></p>}
    { props.title3 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title3}</Link></p>}
    { props.title4 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title4}</Link></p>}
    { props.title5 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title5}</Link></p>}
    { props.title6 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title6}</Link></p>}
    { props.title7 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title7}</Link></p>}
    { props.title6 &&  <p className={`new-calculator-list ${props.border}`}><Link to={`${props.path}`}>{props.title8}</Link></p>}
    </>
  )
}

export default NewComponentsText