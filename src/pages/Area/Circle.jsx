import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../images/header-logo.png";
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';

function Circle() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // states
    // const [resetCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [radius, setRadius] = useState(null);
    const [diameter, setDiameter] = useState(0);
    const [circumference, setCircumference] = useState(0)
    const [area, setArea] = useState(0);
    const calculate = () => {
        if(radius!==null){
            const r = parseFloat(radius);
            setDiameter(2 * r);
            setCircumference(2 * Math.PI * r);
            setArea(Math.PI * r * r); 
            console.log("code");
        }
        else{
            setShowPopup(true);
           console.log('pop')
        }   
    }
    const handleResetClick = () => {
        if (circumference && diameter && area !==  0) {
            setRadius(null)
            setCircumference(0);
            setDiameter(0)
            setArea(0)
         console.log("hello")
        }
        else{
            setShowPopup(true);
           console.log("popup");
        }
      };
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: <div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
    })
 
    return (

        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'>Circle calculate</h2>
                    <p>Fill out the necessary input boxes and press the calculate button to use the circle calculator.
                    </p>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* {print && <img src={logo} alt="" /> } */}

                            <Row style={{ alignItems: "center", textAlign: "center" }}>
                                <Col md={12} sm={12} xs={12} >
                                    <label>  Number of Sides:<br /><input type="number" value={radius}
                                        onChange={(event) => setRadius(event.target.value)} /> </label></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Areaof Circle</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{area.toString().substring(0, 5)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}> <dt>Diameter of Circle</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{diameter.toString().substring(0, 5)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>circumference of Circle</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{circumference.toString().substring(0, 5)}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            {showPopup && <Popup />}
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup />}

                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        {
                            textShow &&
                            <Example heading="Circle Example" title="Find the area, diameter and circumference of a circle with the given radius 4."
                                step1="Step 1 : " step1heading=": Find the area" step1value=" Area = πr² = 3.14 * 4² = 3.14 * 16 = 50.24"
                                step2="Step 2 : " step2heading="Find the diameter" step2value="  Diameter = 2r = 2 *4 = 8"
                                step3="Step 3 : " step3heading="Find the circumference." step3value=" Circumference = πd = 3.14 *8 = 25.12  " />
                        }

                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt className='Fw-bold'>Area of Circle </dt>= πr²<br />
                                <dt>Circumference of Circle </dt>= 2πr = πd<br />
                                <dt>Area of Sector</dt>= πr² (θ/360) = ½ *arc * (angle in degree)<br />
                                <dt> where,</dt>r = radius <br />π = 3.14<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default Circle;