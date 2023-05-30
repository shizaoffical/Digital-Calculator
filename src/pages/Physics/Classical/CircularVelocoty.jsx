import React, { useRef, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function CircularVelocity() {
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Time Period (T)');
    const [CV, setCV] = useState(null);
    const [R, setR] = useState(null);
    const [TP, setTP] = useState(null);
    const [TPvalue, setTPvalue] = useState(0);
    const [Rvalue, setRvalue] = useState(0);
    const [CVvalue, setCVvalue] = useState(0);


    // SNcalculator
    const TPcalculator = () => {
        if (CV && R !== null) {
            const tp = Math.round(((6.28*R)/CV)*100)/100;
            setTPvalue(tp.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function TPcalculatorReset() {
        if (CV && R !== 0) {
            setTP(0);
            setR(0);
            setCV(0);
            setTPvalue(0);
            setRvalue(0);
            setCVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // KVcalculatorReset
    const CVcalculator = () => {
        if (TP && R !== null) {
            const cv = Math.round(((6.28*R)/TP)*100)/100;
            setCVvalue(cv.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function CVcalculatorReset() {
        if (TP && R !== 0) {
            setTP(0);
            setR(0);
            setCV(0);
            setTPvalue(0);
            setRvalue(0);
            setCVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // MDcalculatorReset
    const Rcalculator = () => {
        if (TP && CV !== null) {
            const r = Math.round(((CV*TP)/6.28)*100)/100;
            setRvalue(r.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function RcalculatorReset() {
        if (CV && TP !== 0) {
            setTP(0);
            setR(0);
            setCV(0);
            setTPvalue(0);
            setRvalue(0);
            setCVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    // handle change
    const handleSelectChange = (event) => {
        setSelectCondition(event.target.value);
    }
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'calculator',
        onafterprint: () => alert("print success"),
    })
    return (


        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> circular velocity Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Time Period (T)" className='value-dropdown'>
                                Time Period (T) </option>
                                <option value='Circular Velocity' className='value-dropdown' >Circular  Velocity (v)</option>
                                <option value='Radius (r):' className='value-dropdown' >Radius (r):</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {selectCondition === "Time Period (T)" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Circular Velocity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={CV}
                                        onChange={(e) => setCV(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius (r):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={R}
                                        onChange={(e) => setR(e.target.value)} text="m" />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Time Period (T)</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{TPvalue.toString().substring(0, 6)} m/s</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={TPcalculator} text="Calculate" />
                                <ButtonA onClick={TPcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Circular Velocity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Time Period (T):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={TP}
                                        onChange={(e) => setTP(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius (r):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={R}
                                        onChange={(e) => setR(e.target.value)} text="m" />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt> Circular Velocity (v):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{CVvalue.toString().substring(0, 6)} m/s</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={CVcalculator} text="Calculate" />
                                <ButtonA onClick={CVcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Radius (r):" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Time Period (r):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={TP}
                                        onChange={(e) => setTP(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Circular Velocity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={CV}
                                        onChange={(e) => setCV(e.target.value)} text="m/s" />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Radius (r):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Rvalue.toString().substring(0, 6)} m</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={Rcalculator} text="Calculate" />
                                <ButtonA onClick={RcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                    </div>
                </div>
                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> Circular Velocity : </dt>
                            v = 2πr/T<br />
                            <dt>Radius: </dt>
                            r = vT/2π<br />
                            <dt>Time Period : </dt>
                            T = 2πr/v<br />
                            <dt> Where,</dt>
                            r = Circular Radius,<br />
                            T =Time Period.<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                <center> <dt> Circular Velocity Calculator</dt> </center>
                Circular Velocity refers to the velocity at which a body must move in order to maintain an orbit at the outer edge of the earth's atmosphere. The circular velocity of a circular object is denoted by the symbol "v".<br />
                The advanced online Circular Velocity Calculator is used to calculate and find the circular velocity of a circular object when radius and time period of the object is known.<br />
                <dt> Example:</dt>
                Calculate the Circular velocity for the details of a circular object.<br/>
                Radius (r) = 10 m<br/>
                Time Period (T) = 20 s<br/>
                <dt>Solution: </dt>
                <dt> Apply formula: </dt>
                v = 2πr/T<br/>
                v = 2*3.14*10/20<br/>
                v = 3.14<br/>
                 <dt>Circular Velocity (v) = 3.14m/s</dt>
            </div>
        </Container >
        </div >
    )
}

export default CircularVelocity