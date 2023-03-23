import React from 'react';
import ButtonA from './ButtonA';

function Popup(props) {
    return (
        <>
            <div className="popupContainer">
                <div className="popup">
                    <div className='d-flex justify-content-between '>
                        <h1>Error</h1>
                        <ButtonA onClick={props.onClick} text={<i class="fa-solid fa-xmark"></i>} />
                    </div>

                    <h5>Please fill the required input</h5>
                    <p>Having input? please contact us</p>
                </div>
            </div>
        </>
    )
}

export default Popup