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
 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat aperiam at odio sapiente corrupti, molestias sunt id omnis ab dolore eaque consectetur, a tempora qui esse ipsam libero cumque!
                    {props.title1 && <p>1</p>}
                    {props.title2 && <p >2</p>}

                </div>
            </div>
        </>
    )
}

export default Popup