import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
import Formula from '../../../components/Formula';
function SUAVT() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Time');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [s, sets] = useState(null);
    const [u, setu] = useState(null);
    const [v, setv] = useState(null);
    const [a, seta] = useState(null);
    const [t, sett] = useState(null);
    const [S, setS] = useState(0);
    const [U, setU] = useState(0);
    const [V, setV] = useState(0);
    const [A, setA] = useState(0);
    const [T, setT] = useState(0);
    // ECcalculate
    const Tcalculate = () => {
        if (a && u && v  !== null) {
            const t = ( v - u / a).toPrecision(6);
            setT(t);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const Treset = () => {
        if (a && u && v && s  !== 0) {
            setA(0);
            setS(0);
            setv(0);
            setT(0);
            setU(0);
            sets(0);
            sett(0);
            seta(0);
            setU(0);
            setv(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const Scalculate = () => {
        if (a && u && v && t  !== null) {
            const s = ( (u*t) + 0.5 * (a* Math.sqrt(t))).toPrecision(6);
            setS(s);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const Sreset = () => {
        if (a && u && v && t  !== 0) {
            setA(0);
            setS(0);
            setv(0);
            setT(0);
            setU(0);
            sets(0);
            sett(0);
            seta(0);
            setU(0);
            setv(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const Vcalculate = () => {
        if (a && u && t && s  !== null) {
            const v = ( (s + 0.5 * (a* Math.sqrt(t))) / t ).toPrecision(6);
            setV(v);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const Vreset = () => {
        if (a && u && t && s !== 0) {
            setA(0);
            setS(0);
            setv(0);
            setT(0);
            setU(0);
            sets(0);
            sett(0);
            seta(0);
            setU(0);
            setv(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const Acalculate = () => {
        if (t && u && v && s  !== null) {
            const a = ( Math.sqrt(v) - Math.sqrt(u)  / ( 2*s)).toPrecision(6);
            setA(a);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const Areset = () => {
        if (t && u && v && s  !== 0) {
            setA(0);
            setS(0);
            setv(0);
            setT(0);
            setU(0);
            sets(0);
            sett(0);
            seta(0);
            setU(0);
            setv(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const Ucalculate = () => {
        if (a && t && v && s  !== null) {
            const u = ((s - 0.5 * (a* Math.sqrt(t))) / t ).toPrecision(6);
            setU(u);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const Ureset = () => {
        if (a && t && v && s  !== 0) {
            setA(0);
            setS(0);
            setv(0);
            setT(0);
            setU(0);
            sets(0);
            sett(0);
            seta(0);
            setU(0);
            setv(0);
        }
        else {
            setShowPopup(true);
        }
    }

    //    togglePopup
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
        documentTitle: <div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
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
                    <h2 className='text-center fw-bold'>SUVAT Calculator</h2>
                    <p>Choose the unknown term and enter the required values in this SUVAT calculator.</p>
                    <div className='polygon-calculator-div '>
                        {/* dropdown */}
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >      <option value='Time' className='value-dropdown' >Time</option>
                                    <option value="Displacement" className='value-dropdown'>Displacement</option>
                                    <option value='Final Velocity' className='value-dropdown' >Final Velocity</option>
                                    <option value='Accerlation' className='value-dropdown' >Accerlation</option>
                                    <option value='Initial Velocity' className='value-dropdown' >Initial Velocity</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {
                                selectCondition === "Time" && <>
                                <Formula fornula="t = v - u / a"/>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Initial velocity (u):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={u}
                                                onChange={(event) => setu(parseFloat(event.target.value))}  />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Final velocity (v):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={v}
                                                onChange={(event) => setv(parseFloat(event.target.value))}  />
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Acceleration (a):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={a}
                                                onChange={(event) => seta(parseFloat(event.target.value))} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Time(t):</dt> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{T.toString().substring(0, 7)} </button></Col>
                                    </Row>

                                    <div className='text-center'>
                                        <ButtonA onClick={Tcalculate} text="Calaulate" />
                                        <ButtonA onClick={Treset} text="Reset" />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>

                                </>
                            }
                            {selectCondition === "Displacement" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Final velocity (v):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={v}
                                            onChange={(event) => setv(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Initial velocity (u):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={u}
                                            onChange={(event) => setu(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Acceleration (a):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={a}
                                            onChange={(event) => seta(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={t}
                                            onChange={(event) => sett(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Displacement (s):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{S.toString().substring(0, 7)} </button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={Scalculate} text="Calaulate" />
                                    <ButtonA onClick={Sreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>
                            }
                            {selectCondition === "Final Velocity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Displacement (s):</label> </Col>
                                    <Col md={6} sm={12} xs={12}  >
                                        <Input value={s}
                                            onChange={(event) => sets(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Acceleration (a):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={a}
                                            onChange={(event) => seta(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={t}
                                            onChange={(event) => sett(parseFloat(event.target.value))} />
                                    </Col>
                                </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Initial velocity (u):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={u}
                                            onChange={(event) => setu(parseFloat(event.target.value))} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Final velocity (v):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{V.toString().substring(0, 7)} </button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={Vcalculate} text="Calaulate" />
                                    <ButtonA onClick={Vreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Accerlation" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Final velocity (v):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={v}
                                            onChange={(event) => setv(parseFloat(event.target.value))} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Initial velocity (u):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={u}
                                            onChange={(event) => setu(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Displacement (s):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={s}
                                            onChange={(event) => sets(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={t}
                                            onChange={(event) => sett(parseFloat(event.target.value))} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Acceleration (a):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{A.toString().substring(0, 7)} </button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={Acalculate} text="Calaulate" />
                                    <ButtonA onClick={Areset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Initial Velocity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Displacement (s):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={s}
                                            onChange={(event) => sets(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Final velocity (v):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={v}
                                            onChange={(event) => setv(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Acceleration (a):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={a}
                                            onChange={(event) => seta(parseFloat(event.target.value))} />
                                    </Col>
                                </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Time (t):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={t}
                                            onChange={(event) => sett(parseFloat(event.target.value))}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Initial velocity (u):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{U.toString().substring(0, 7)} </button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={Ucalculate} text="Calaulate" />
                                    <ButtonA onClick={Ureset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        {
                            textShow &&
                            <div ref={divRef}>
                                <Example heading="Example"
                                    title={<>
                                        Calculate the capacitance for the cylindrical capacitor by the given details.
                                        Permittivity (ε) = 5 F/m
                                        Length of Conductors (L) = 4 m<br />
                                        Outer Conductor Diameter (b) = 3 m<br />
                                        Inner Conductor Diameter (a) =2 m<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading={<>C = 2π εL/In ( b/a)<br />
                                        C = 2*3.14*5*4/ (3/2)<br /></>}
                                    step1value="  C = 309.77 F"
                                    step2=" Capacitance (C) = C = 309.77 F" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        Cylindrical Capacitor refers to a capacitor that is made up of two concentric metal cylinders of the same length, with dielectric filling the space between the cylinders. The cylindrical capacitor is also known as coaxial capacitor.

                        The advanced online Cylindrical Capacitor Calculator is used to calculate the capacitance for cylindrical capacitor.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Capacitance :</dt>
                                C = 2π εL/In( b/a)
                                <dt>Permittivity :</dt>
                                ε = Cln (b/a)/2πL
                                <dt> Length of Conductors :</dt>
                                L = Cln(b/a)/2π ε
                                <dt>Outer Conductor Diameter :</dt>
                                b = ae (2πL/C)
                                <dt> Inner Conductor Diameter :</dt>
                                a = b/e (2π L/C)
                                <dt> Where,</dt>
                                C = Capacitance,
                                ε = Permittivity,
                                L = Length of Conductors,
                                b = Outer Conductor Diameter,
                                a = Inner Conductor Diameter.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default SUAVT;