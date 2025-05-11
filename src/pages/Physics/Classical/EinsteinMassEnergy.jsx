import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function EinsteinMassEnergy() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Energy');

    const [PR, setPR] = useState(null);
    const [A, setA] = useState(null);
    const [V, setV] = useState(null);

    // main states
    const [PRvalue, setPRvalue] = useState(0)
    const [Avalue, setAvalue] = useState(0)
    const [Vvalue, setVvalue] = useState(0)
    // functionality
    const PRcalculator = () => {
        if (V && A !== null) {
            const PR = V / A;
            setPRvalue(PR.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function PRcalculatorReset() {
        if (V && A !== 0) {
            setPRvalue(0);
            setA(0);
            setV(0);
            setPR(0);
            setAvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    const Acalculator = () => {
        if (V && PR !== null) {
            const a = V / PR;
            setAvalue(a.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function AcalculatorReset() {
        if (V && PR !== 0) {
            setPRvalue(0);
            setA(0);
            setV(0);
            setPR(0);
            setAvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    const Vcalculator = () => {
        if (PR && A !== null) {
            const V = PR * A;
            setVvalue(V.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function VcalculatorReset() {
        if (PR && A !== 0) {
            setPRvalue(0);
            setA(0);
            setV(0);
            setPR(0);
            setAvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // handle change
    const handleSelectChange = (event) => {
        setSelectCondition(event.target.value);
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

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
                    <h2 className='text-center fw-bold'> Einstein Mass Energy Calculator</h2>
                    <p>To find the unknown term of Einstein's mass-energy equation, select the unknown term, enter values, and hit the calculate button</p>

                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Energy" className='value-dropdown'>Energy </option>
                                    <option value='Mass' className='value-dropdown' >Mass</option>
                                    <option value='Speed of Light in a Vacuum' className='value-dropdown' >
                                        Speed of Light in a Vacuum:</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  Prandtl Number (Pr) /////////////////////////////// */}
                            {selectCondition === "Energy" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Kinematic Viscosity (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m2/s" />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Diffusivity (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} text="m2/s" />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Prandtl Number (Pr)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PRvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PRcalculator} />
                                    <ButtonA text="Reset" onClick={PRcalculatorReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}

                            {/* ////////////////////////////////////  Kinematic Viscosity (v) /////////////////////////////// */}
                            {selectCondition === "Mass" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Thermal Diffusivity (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} text="m/s2" />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Prandtl Number (Pr): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PR}
                                            onChange={(e) => setPR(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Kinematic Viscosity (v)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)} m2/s</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Vcalculator} />
                                    <ButtonA text="Reset" onClick={VcalculatorReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {/* ////////////////////////////////////  Thermal Diffusivity (a) /////////////////////////////// */}
                            {selectCondition === "Speed of Light in a Vacuum" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Kinematic Viscosity (v): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m2/s" />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Prandtl Number (Pr):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PR}
                                            onChange={(e) => setPR(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Thermal Diffusivity (a)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0, 6)} ms/2</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator} />
                                    <ButtonA text="Reset" onClick={AcalculatorReset} />
                                    {showPopup && <Popup onClick={togglePopup} />}
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
                                {selectCondition === "Energy" &&
                                    <div ref={divRef}>
                                        <Example heading="Prandtl Number (Pr)"
                                            title="step by step solution"
                                            step1="Data : "
                                            step1heading="Prandtl Number (Pr) = ? , Kinematic Viscosity (v) = 12 , Thermal Diffusivity (a) = 15"
                                            step2="Formula" step2heading="pr=v/a"
                                            step3="Solution:" step3heading={<>By putting Values in the above formula:
                                                <br />pr = 12 / 5</>} step4="Pr = 0.80000"
                                        /></div>
                                }
                                {selectCondition === "Mass" &&
                                    <div ref={divRef}>
                                        <Example heading="Kinematic Viscosity (v)"
                                            title="step by step solution"
                                            step1="Data : "
                                            step1heading="Kinematic Viscosity (v) = ? , Prandtl Number (Pr) = 18 , Thermal Diffusivity (a) = 15"
                                            step2="Formula" step2heading="v = Pr * a"
                                            step3="Solution:" step3heading={<>By putting Values in the above formula:
                                                <br />v = 18 * 15</>} step4="v = 270m2/s"
                                        /></div>

                                }
                                {selectCondition === "Speed of Light in a Vacuum" &&
                                    <div ref={divRef}>
                                        <Example heading="Thermal Diffusivity (a)"
                                            title="step by step solution"
                                            step1="Data : "
                                            step1heading="Thermal Diffusivity (a) = ? , Kinematic Viscosity (v) = 12 , Prandtl Number (Pr) = 18"
                                            step2="Formula" step2heading="a =  12 / 18 "
                                            step3="Solution:" step3heading={<>By putting Values in the above formula:
                                                <br />a = 12 / 18 </>} step4="a = 0.66667m2/s"
                                        /></div>
                                } </>}
                        </div>

                    </div>
                    <div className='mt-1'>
                        Einstein Mass Energy law states the principle that mass (m) and energy (E) are equivalent according to the equation E = mc2, where c is the velocity of light. When energy is removed from a system then mass is always removed along with the energy.

                        This advanced online Einstein Mass Energy Calculation is used to calculate and find the Energy (E), Mass (M) and Speed of Light in a Vacuum for the given details.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Energy:</dt>
                                <p>E = mc2</p>
                                <dt>Mass:</dt>
                                <p>m = E/c2</p>
                                <dt>Speed of Light in a Vacuum:<br /> <span>c = √E/m</span> </dt>
                                <dt>Where, </dt>
                                <p>E = Energy,<br />
                                    m = Mass,<br />
                                    c = Speed of Light in a Vacuum.</p>
                            </div>
                            : null}

                    </div>
                    {/* ***************   formula end and example start ********** */}
                    <dt>Example</dt>
                    <p>  Calculate the Einstein Mass energy for the given details.<br/>
                        Mass (m) = 25 kg<br/>
                        Speed of Light in a Vacuum(c) = 5 m/s</p>
                    <dt>  Solution:</dt>
                    <dt>  Apply formula:</dt>
                    <p>E = mc2<br />
                        E = 25*52<br />
                        E = 25*25<br />
                        E = 625 J</p>
                    <dt> Energy (E) = 625 J</dt>

                </div>
            </Container >
        </div >

    )
}

export default EinsteinMassEnergy