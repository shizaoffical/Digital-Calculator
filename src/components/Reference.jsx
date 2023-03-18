import React from 'react'

function Reference(props) {
    return (
        <div className='referenec-bg-color p-2'>
            <h5  style={{ color: "#F58648" }}>Reference</h5>
            {props.step1 && <div >1.{props.step1}</div>}
            {props.step2 && <div >2.{props.step2}</div>}
            {props.step3 && <div >3.{props.step3}</div>}
            {props.step4 && <div >4.{props.step4}</div>}
        </div>
    )
}

export default Reference