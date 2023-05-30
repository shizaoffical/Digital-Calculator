import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function BatterLife() {
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [COB, setCOB] = useState(null);
    const [COD, setCOD] = useState(null);
     const [EBL , setEBL] = useState(0);


    const calculate = () => {
        if (COB && COD !== null) {
            const ebl = COB / COD * 0.70;
            setEBL(ebl.toPrecision(5));
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (COD && COB !== 0) {
            setCOD(0);
            setCOB(0);
            setEBL(0);
           
        }
        else { setShowPopup(true); }
    };
    const togglePopup = () => {
        setShowPopup(!showPopup);
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
                    <h2 className='text-center fw-bold'> Battery Life Calculator</h2>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Enter the capacity rating of battery:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={COB}
                                        onChange={(event) => setCOB(parseFloat(event.target.value))} text="Milli Amp Hours"/> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Enter the consumption of device:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={COD}
                                        onChange={(event) => setCOD(parseFloat(event.target.value))} text="Milli Amps"/> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Estimated batery life:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{EBL.toString().substring(0, 9)}  Hours</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>

                    </div>
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>BLT= Capacity of battery / Consumption of the device * 0.70</dt>

                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                    <div className='mt-2'>
                        An electrical battery is one or more electrochemical cells that convert stored chemical energy into electrical energy. There are two types of batteries. Primary batteries or disposable batteries, which are designed to be used once and discarded, and secondary batteries or rechargeable batteries, which are designed to be recharged and used multiple times. The life of the battery depends on the capacity rating of battery and consumption device. The Capacity of a battery is defined in terms of Ampere Hour.<br />
                        This advanced online Battery Life Calculator is used to calculate the life of the battery by applying the formula.<br />

                        <dt>Example: </dt>
                        Calculate the battery life for the given details.<br />
                        Enter the capacity rating of battery:  25 Milli Amp Hours<br />
                        Enter the consumption of device: 15 Milli Amps<br />
                        <dt>Solution:</dt>
                        <dt >Formula:</dt>
                        BLT= Capacity of battery / Consumption of the device * 0.70
                        BLT = 25/15*0.70
                        <dt>BLT = 1.1666 Hours</dt>
                    </div>
                    {/* ***************   formula ********** */}


                </div>
            </Container>
        </div >

    )
}

export default BatterLife;