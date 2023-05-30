import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function CentripitalAccerlation() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Centripetal Acceleration (a):');
    const [CA, setCA] = useState(null);
    const [R, setR] = useState(null);
    const [V, setV] = useState(null);
    const [CAvalue, setCAvalue] = useState(0);
    const [Rvalue, setRvalue] = useState(0);
    const [Vvalue, setVvalue] = useState(0);


    // SNcalculator
    const CAcalculator = () => {
        if (V && R !== null) {
            const ca = Math.pow(V, 2) / R;
            setCAvalue(ca.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function CAcalculatorReset() {
        if (V && R !== 0) {
            setCA(0);
            setR(0);
            setV(0);
            setCAvalue(0);
            setRvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // KVcalculatorReset
    const Vcalculator = () => {
        if (CA && R !== null) {
            const v = Math.sqrt(CA * R);
            setCAvalue(v.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function VcalculatorReset() {
        if (CA && R !== 0) {
            setCA(0);
            setR(0);
            setV(0);
            setCAvalue(0);
            setRvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // MDcalculatorReset
    const Rcalculator = () => {
        if (CA && V !== null) {
            const r = Math.pow(V, 2) / CA;
            setCAvalue(r.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function RcalculatorReset() {
        if (V && CA !== 0) {
            setCA(0);
            setR(0);
            setV(0);
            setCAvalue(0);
            setRvalue(0);
            setVvalue(0);
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

    useEffect(() => {
        if (textShow) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [textShow]);

    return (


        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> Centripital Accerlation Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Centripetal Acceleration (a):" className='value-dropdown'>
                                    Centripetal Acceleration (a):</option>
                                <option value='Velocity' className='value-dropdown' >Velocity </option>
                                <option value='Radius (r):' className='value-dropdown' >Radius (r):</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {selectCondition === "Centripetal Acceleration (a):" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >

                                    <Input value={V}
                                        onChange={(e) => setV(e.target.value)} text="m/s" />
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
                                <Col md={6} sm={12} xs={12}><dt>Centripetal Acceleration (a):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{CAvalue.toString().substring(0, 6)} m/s</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={CAcalculator} text="Calculate" />
                                <ButtonA onClick={CAcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Velocity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Centripetal Acceleration (a):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={CA}
                                        onChange={(e) => setCA(e.target.value)} text="m/s" />
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
                                <Col md={6} sm={12} xs={12}><dt>Velocity (v):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)} m/s</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={Vcalculator} text="Calculate" />
                                <ButtonA onClick={VcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Radius (r):" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Centripetal Acceleration (a):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={CA}
                                        onChange={(e) => setCA(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={V}
                                        onChange={(e) => setV(e.target.value)} text="m/s" />

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
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {textShow && <>
                            {selectCondition === "Centripetal Acceleration (a):" &&
                                <div ref={divRef}>
                                    <Example heading="Centripetal Acceleration (a)"
                                        title="step by step solution"
                                        step1="Data : " step1heading="  v = 67 , a = ? , r = 45"
                                        step2="Formula" step2heading="a = v2 / r"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                            = (67)2 / 45<br />
                                            = 4489 / 45</>}
                                        step4="  = 99.76"
                                    /></div>
                            }
                            {selectCondition === "Velocity" &&
                                <div ref={divRef}>
                                    <Example heading="Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="  v = ? , a = 99.76 , r = 45"
                                        step2="Formula" step2heading=" r =  a x r "
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value=" = 99.76 x 45"
                                        step4=" = 4489.2"
                                    /></div>
                            }
                            {selectCondition === "Radius (r):" &&
                                <div ref={divRef}>
                                    <Example heading="Average Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="v = 4489.2 , a = 99.76 , r = ?"
                                        step2="Formula" step2heading="r = v2 / a"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                           = (4489.2)2 / 99.76<br />
                                           = 20152916.64 / 99.76</>}
                                        step4="  = 202014"
                                    /></div>
                            }
                        </>}</div>
                </div>
                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>Centripetal Acceleration Formula </dt>
                            <dt> Centripetal Acceleration : </dt>
                            a = v2/r
                            <dt>Radius : </dt>
                            r = v2/a
                            <dt>Velocity :</dt>
                            v = √ar
                            <dt>Where,</dt>
                            r = Circular Radius,
                            v =Velocity
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                <center> <dt className='fs-3'> Acceleration Calculator</dt> </center>
                Centripetal acceleration calculator also known as circular motion calculator or tangential acceleration calculator. Centripetal Acceleration refers to the acceleration towards the center that holds a satellite in elliptical orbit. Centripetal acceleration is defined as the rate of change of tangential velocity. Centripetal describes the force on the object that is directed toward the centre of the circle which causes a constant change in the object's direction and thus its acceleration. The Centripetal Acceleration is also called as centrifugal force or acceleration. <br />
                Centripetal Acceleration is that acceleration of an object that is in uniform circular motion and is always towards the center of the circle or circular path. This advanced online Centripetal Acceleration Calculator is used to calculate the acceleration towards the circular motion.<br />
                <dt  className='fs-3'>How to find centripetal acceleration?</dt>
                <dt  className='fs-5'> Example:</dt>
                Calculate the Centripetal Acceleration for the given details.<br />
                Radius(r) = 10<br />
                Velocity (v) = 5 m/s<br />
                <dt  className='fs-5'>Solution: </dt>
                <dt> Apply formula: </dt>
                a = v2/r<br />
                a = 52/10<br />
                a = 2.5 m/s2<br />
                <dt>Centripetal Acceleration (a) = 2.5 m/s2</dt>
            </div>
        </Container >
        </div >
    )
}

export default CentripitalAccerlation