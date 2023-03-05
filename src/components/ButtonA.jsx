import React from 'react'

function ButtonA(props) {
  return (
    <button className="polygon-calculator-btn mb-2" onClick={props.onClick}>{props.text}</button>
  )
}

export default ButtonA;