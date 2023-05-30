import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import Reference from '../../../components/Reference';
function Accerlation() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Initial Velocity (vo):');

    // main states 
    const [IV, setIV] = useState(null);
    const [V, setV] = useState(null);
    const [T, setT] = useState(null);
    const [A, setA] = useState(null);
    // VALUE STATES
    const [IVvalue, setIVvalue] = useState(0);
    const [Vvalue, setVvalue] = useState(0);
    const [Tvalue, setTvalue] = useState(0);
    const [Avalue, setAvalue] = useState(0);
    //   HRvalue functionalty

    //   SHcalculator
    const IVcalculator = () => {
        if (V && T && A !== null) {
            const IV = V - (A * T) ;
            setIVvalue(IV.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function IVcalculatorReset() {
        if (V && T && A !== 0) {
            setIV(0)
            setV(0)
            setT(0)
            setA(0)
            setIVvalue(0)
            setVvalue(0)
            setTvalue(0)
            setAvalue(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // TCcalculator
    const Vcalculator = () => {
        if (IV && T && A !== null) {
            const v =  IV + (A * T);
            setVvalue(v.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function VcalculatorReset() {
        if (IV && T && A !== 0) {
            setIV(0)
            setV(0)
            setT(0)
            setA(0)
            setIVvalue(0)
            setVvalue(0)
            setTvalue(0)
            setAvalue(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // CLcalculator
    const Tcalculator = () => {
        if (V && IV && A !== null) {
            const t = V - IV / A ;
            setTvalue(t.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function TcalculatorReset() {
        if (V && IV && A !== 0) {
            setIV(0)
            setV(0)
            setT(0)
            setA(0)
            setIVvalue(0)
            setVvalue(0)
            setTvalue(0)
            setAvalue(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // DCcalculatorReset
    const Acalculator = () => {
        if (V && IV && T !== null) {
            const a = V - IV / T;
            setAvalue(a.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function AcalculatorReset() {
        if (V && T && IV !== 0) {
            setIV(0)
            setV(0)
            setT(0)
            setA(0)
            setIVvalue(0)
            setVvalue(0)
            setTvalue(0)
            setAvalue(0)
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
        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'> Accerlation Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Initial Velocity (vo):" className='value-dropdown'>Initial Velocity </option>
                                    <option value='Velocity (v):' className='value-dropdown' >Velocity (v):</option>
                                    <option value='Time (t):' className='value-dropdown' >Time (t):</option>
                                    <option value='Acceleration (a):' className='value-dropdown' >Acceleration (a):</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                            {selectCondition === "Initial Velocity (vo):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={T}
                                            onChange={(e) => setT(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Acceleration (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Initial Velocity (vo):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{IVvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={IVcalculator} />
                                    <ButtonA text="Reset" onClick={IVcalculatorReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                            {selectCondition === "Velocity (v):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Initial Velocity (vo):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={IV}
                                            onChange={(e) => setIV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={T}
                                            onChange={(e) => setT(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Acceleration (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Velocity (v):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Vcalculator} />
                                    <ButtonA text="Reset" onClick={VcalculatorReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                            {selectCondition === "Time (t):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Initial Velocity (vo):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={IV}
                                            onChange={(e) => setIV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Acceleration (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Time (t):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Tvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Tcalculator} />
                                    <ButtonA text="Reset" onClick={TcalculatorReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                            {selectCondition === "Acceleration (a):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Initial Velocity (vo):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={IV}
                                            onChange={(e) => setIV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={T}
                                            onChange={(e) => setT(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Acceleration (a):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator} />
                                    <ButtonA text="Reset" onClick={AcalculatorReset} />
                                </div>
                            </>}


                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }}
                                className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        <div>
                            {textShow && <>
                                {selectCondition === "Initial Velocity (vo):" &&
                                    <div ref={divRef}>
                                        <Example heading="Initial Velocity (vo):"
                                            title="step by step solution"
                                            step1="Data : " step1heading="v0 = ? , a = 5.33 , t = 15.01 , v = 85"
                                            step2="Formula" step2heading="v0 = v - a x t"
                                            step3="Steps:" step3heading="Putting values "
                                            step3value="= 85 - 5.33 x 15.01"
                                            step4="= 5"
                                        /></div>
                                }
                                {selectCondition === "Velocity (v):" &&
                                    <div ref={divRef}>
                                        <Example heading="Velocity (v):"
                                            title="step by step solution"
                                            step1="Data : " step1heading="v0 = 5 , a = 5.33 , t = 15.01 , v = ?"
                                            step2="Formula" step2heading="v = v0 + a x t "
                                            step3="Steps:" step3heading="Putting values "
                                            step3value="= 5 + 5.33 x 15.01"
                                            step4="= 85"
                                        /></div>
                                }
                                {selectCondition === "Time (t):" &&
                                    <div ref={divRef}>
                                        <Example heading="Time (t):"
                                            title="step by step solution"
                                            step1="Data : " step1heading="v0 = 5 , a = 5.33 , t = ? , v = 85"
                                            step2="Formula" step2heading="    t = v - v0 / a "
                                            step3="Steps:" step3heading="Putting values "
                                            step3value={<>= 85 - 5 / 5.33<br />
                                                = 80 / 5.33</>}
                                            step4="  = 15.01"
                                        /></div>
                                }
                                {selectCondition === "Acceleration (a):" &&
                                    <div ref={divRef}>
                                        <Example heading="Acceleration"
                                            title="step by step solution"
                                            step1="Data : " step1heading=" v0 = 5 , a = ? , t = 15 , v = 85"
                                            step2="Formula" step2heading="    a = v - v0 / t "
                                            step3="Steps:" step3heading="Putting values "
                                            step3value={<>= 85 - 5 / 15<br />
                                                = 80 / 15</>}
                                            step4="  = 5.33"
                                        /></div>
                                }
                            </>}</div>

                    </div>
                    <div className='mt-3'>
                        Users can find the magnitude of acceleration, the rate at which <span style={{ color: "#F7941D" }}>velocity
                        </span>  changes through the Acceleration calculator. You can also see the full step-wise guide of calculation.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Initial Velocity (vo):</dt>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                    <dt>What is Acceleration?</dt>
                    A comprehensive  <span style={{ color: "#F7941D" }}><Link className='Reference-link'
                        to="https://www.physicsclassroom.com/class/1DKin/Lesson-1/Acceleration"
                        target="_blank">definition of acceleration </Link></span> would be:<br />
                    “Acceleration is a vector quantity that is defined as the rate at which an object changes its velocity.”<br />
                    The acceleration is usually used in the place of average acceleration. When one says the car accelerated with X ms-2, One is referring to the overall acceleration.<br />
                    <dt> Acceleration Formula: </dt>
                    The formula used for acceleration is:<br />
                    a =v - v0/t<br />
                    While in this equation:<br />
                    v is velocity or final velocity<br />
                    v0is the initial velocity<br />
                    t is time<br />
                    <dt>How to find acceleration?</dt>
                    The magnitude of acceleration can be calculated manually. While the direction of acceleration is the same as the net force.<br />
                    <dt>Example:</dt>
                    A ball has been rolling on the ground for 8 seconds. The initial velocity of the ball was 10 ms-2 and the final velocity is 2ms-2. Calculate the acceleration.<br />
                    <dt>Solution:</dt>
                    a =v - v0/t<br />
                    a = 2 - 10/8<br />
                    a = -1 ms-2<br />
                    <Reference
                        step1={<> The Negative Sign Indicate <Link className='Reference-link'
                            to="https://www.topperlearning.com/answer/what-is-retardation/38tihc44"
                            target="_blank">retradation</Link> </>}
                    />
                </div>
            </Container >
        </div >
    )
}

export default Accerlation