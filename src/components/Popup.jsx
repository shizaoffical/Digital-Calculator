import React, { useState } from 'react';
import ButtonA from './ButtonA';

function Popup() {
    const [showPopup, setShowPopup] = useState(true);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    return (
        <>
            {showPopup && (
                <div className="popupContainer">
                    <div className="popup">
                        <div className='d-flex justify-content-between '>
                            <h1>Error</h1>
                            <ButtonA onClick={togglePopup} text={<i class="fa-solid fa-xmark"></i>} />
                        </div>

                        <h2>This is a Popup</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique velit vel massa fermentum, at euismod libero aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer blandit orci a dapibus ullamcorper.</p>

                    </div>
                </div>
            )}
        </>
    )
}

export default Popup