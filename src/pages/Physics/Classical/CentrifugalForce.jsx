import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function CentrifugalForce() {
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [M, setM] = useState(null);
    const [R, setR] = useState(null);
    const [V, setV] = useState(null);
    const [F, setF] = useState(0);


    const calculate = () => {
        if (R && V && M !== null) {
            const f = M * Math.pow(V, 2) / R;;
            setF(f.toPrecision(5));
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (R && V && M !== 0) {
           setM(0);
           setV(0);
           setR(0);
           setF(0);

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
                    <h2 className='text-center fw-bold'> Centrifigual Force Calculator</h2>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Mass</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={M}
                                        onChange={(event) => setM(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={R}
                                        onChange={(event) => setR(parseFloat(event.target.value))}  /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity(v):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={V}
                                        onChange={(event) => setV(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Centrifugal Force (f):</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{F.toString().substring(0, 9)}</button></Col>
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
                                <dt>Centrifugal Force(f): = Mass(m) * Velocity(v)² / Radius(r)<br /></dt>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default CentrifugalForce;