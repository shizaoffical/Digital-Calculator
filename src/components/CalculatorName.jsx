import React from 'react'
import { Link } from 'react-router-dom'

function CalculatorName(props) {
  return (
    <div className='CalculatorName'><Link to={`${props.CalculatorNamePath}`}>{props.CalculatorName}</Link></div>
  )
}

export default CalculatorName