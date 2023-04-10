import React from 'react'

function Input(props) {
  return (
    <div>
        <input type="number" value={props.value}
    onChange={props.onChange} /> 
    <span className="ps-2 ">{props.text}</span>
    </div>
  )
}

export default Input