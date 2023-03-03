import React from 'react'

function Example(props) {
    return (
        <div>
            <div className='text-center'>
                <h4 className='fw-bold'>{props.heading}</h4><br />{ props.title}<br />
                {props.step1 && <div className='my-2'><span className='fw-bold ' style={{ color: "#F58648" }}>{props.step1} </span>{props.step1heading}<br />
                    {props.step1value}<br /> </div>}
                {props.step2 && <div className='my-2'>
                    <span className='fw-bold ' style={{ color: "#F58648" }}>{props.step2} </span>{props.step2heading}<br />
                    {props.step2value}<br />
                </div>}
                {props.step3 && <div className='my-2'>
                    <span className='fw-bold ' style={{ color: "#F58648" }}>{props.step3}</span>{props.step3heading}<br />
                    {props.step3value}
                    </div>}
                    {props.step4 && <div className='my-2'>
                    <span className='fw-bold ' style={{ color: "#F58648" }}>{props.step4}</span>{props.step4heading}<br />
                    {props.step4value}
                    </div>} 
                    {props.step4 && <div className='my-2'>
                    <span className='fw-bold ' style={{ color: "#F58648" }} >{props.step5}</span>{props.step5heading}<br />
               {props.step5value}
                    </div>}

            </div>
        </div>
    )
}

export default Example