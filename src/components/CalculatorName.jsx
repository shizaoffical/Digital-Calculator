import React from 'react'
import { Link } from 'react-router-dom'

function CalculatorName(props) {
  return (
    <Link to={`${props.path}`} className="text-decoration-none text-dark"><div className='calculator-name'>{props.CalculatorName}
    </div></Link>
  )
}

export default CalculatorName