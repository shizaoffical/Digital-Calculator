import React from 'react'

function Input(props) {
  return (
    <div>
        <input type="number" value={props.value}
    onChange={props.onChange} /> 
    </div>
  )
}

export default Input