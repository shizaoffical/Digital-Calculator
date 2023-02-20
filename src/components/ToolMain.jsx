import React from 'react'
// import ToolText from './ToolText'

function ToolMain(props) {
    return (
        <>
            <span  className='tool-main-div'> <img src={props.image} alt="" className='tool-main-image me-2' />{props.title} </span>
           
        </>
    )
}

export default ToolMain