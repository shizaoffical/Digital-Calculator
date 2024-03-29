import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Reference from '../../../components/Reference';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';

function NussletNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Nusselt Number');
    // main states
    const [NU, setNU] = useState(null);
    const [H, setH] = useState(null);
    const [L, setL] = useState(null);
    const [K, setK] = useState(null);
    // work states
    const [NUvalue, setNUvalue] = useState(0)
    const [Hvalue, setHvalue] = useState(0)
    const [Lvalue, setLvalue] = useState(0)
    const [Kvalue, setKvalue] = useState(0)
    // NU VALUE
    const NUcalculator = () => {
        if (H && K && L !== null) {
        const nu = (H * L) / K;
        setNUvalue(nu.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function NUcalculatorReset() {
        if (H && K && L !== 0) {
            setNU(0);
            setH(0);
            setL(0);
            setK(0)
            setHvalue(0);
            setLvalue(0);
            setKvalue(0);
            setNUvalue(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // hvalue
    const Hcalculator = () => {
        if (NU && K && L !== null) {
        const H = (NU * K) / L;
        setHvalue(H.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function HcalculatorReset() {
        if (NU && K && L !== 0) {
            setNU(0);
            setH(0);
            setL(0);
            setK(0)
            setHvalue(0);
            setLvalue(0);
            setKvalue(0);
            setNUvalue(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // Lvalue
    const Lcalculator = () => {
        if (H && K && NU !== null) {
        const L = (NU * K) / H
        setLvalue(L.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function LcalculatorReset() {
        if (H && K && NU !== 0) {
            setNU(0);
            setH(0);
            setL(0);
            setK(0)
            setHvalue(0);
            setLvalue(0);
            setKvalue(0);
            setNUvalue(0)
        }
        else {
            setShowPopup(true);
        }
    }
    //pecalculator
    const Kcalculator = () => {
        if (H && NU && L !== null) {
        const K = (H * L) / NU;
        setKvalue(K.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function KcalculatorReset() {
        if (H && NU && L !== 0) {
            setNU(0);
            setH(0);
            setL(0);
            setK(0)
            setHvalue(0);
            setLvalue(0);
            setKvalue(0);
            setNUvalue(0)
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
    }, [textShow])

    return (
        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'> Nusselt Number Calculator</h2>
                    <span>To calculate nusselt number enter values in given input box by using this nusselt number calculator.</span>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Nusselt Number" className='value-dropdown'>Nusselt Number </option>
                                    <option value='Convection Heat Transfer Coefficient' className='value-dropdown' >
                                        Convection Heat Transfer Coefficient</option>
                                    <option value='Characteristic Length' className='value-dropdown' >Characteristic Length </option>
                                    <option value='Thermal Conductivity of the Fluid (k)' className='value-dropdown' >
                                        Thermal Conductivity of the Fluid (k) </option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  Nusselt Number /////////////////////////////// */}
                            {
                                selectCondition === "Nusselt Number" && <>
                                    <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Convection Heat Transfer Coefficient (h):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={H}
                                                onChange={(e) => setH(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Characteristic Length (L): </label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={L}
                                                onChange={(e) => setL(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Thermal Conductivity of the Fluid (k):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Nusselt Number</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{NUvalue.toString().substring(0, 6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={NUcalculator} />
                                        <ButtonA text="Reset" onClick={NUcalculatorReset} />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>
                                </>}


                            {/* //////////////////////////////////// Convection Heat Transfer Coefficient  /////////////////////////////// */}
                            {
                                selectCondition === "Convection Heat Transfer Coefficient" && <>
                                    <div className='text-center'> <dt>Formula</dt> <span> h = nu * k / l</span></div>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Characteristic Length (L):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={L}
                                                onChange={(e) => setL(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Thermal Conductivity of the Fluid (k):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Nusselt Number (Nu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={NU}
                                                onChange={(e) => setNU(e.target.value)} />
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Convection Heat Transfer Coefficient</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{Hvalue.toString().substring(0, 6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={Hcalculator} />
                                        <ButtonA text="Reset" onClick={HcalculatorReset} />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>
                                </>}
                            {/* //////////////////////////////////// Characteristic Length  /////////////////////////////// */}
                            {
                                selectCondition === "Characteristic Length" && <>
                                    <div className=' text-center'> <dt>Formula</dt> <span>L = NU *K / H</span></div>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Convection Heat Transfer Coefficient (h):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={H}
                                                onChange={(e) => setH(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Thermal Conductivity of the Fluid (k):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Nusselt Number (Nu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={NU}
                                                onChange={(e) => setNU(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Characteristic Length</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{Lvalue.toString().substring(0, 6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={Lcalculator} />
                                        <ButtonA text="Reset" onClick={LcalculatorReset} />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>
                                </>}

                            {/* //////////////////////////////////// Pump Efficiency /////////////////////////////// */}
                            {
                                selectCondition === "Thermal Conductivity of the Fluid (k)" && <>
                                    <div className=' text-center'> <dt>Formula</dt> <span> k = h * l / nu</span></div>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Convection Heat Transfer Coefficient (h):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Characteristic Length (L):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={L}
                                                onChange={(e) => setL(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Nusselt Number (Nu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={NU}
                                                onChange={(e) => setNU(e.target.value)} />
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Thermal Conductivity of the Fluid (k):</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{Kvalue.toString().substring(0, 6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={Kcalculator} />
                                        <ButtonA text="Reset" onClick={KcalculatorReset} />
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
                                {selectCondition === "Nusselt Number" &&
                                    <div ref={divRef}>
                                        <Example heading="Nusselt Number"
                                            title="step by step solution"
                                            step1="Data : " step1heading="h = 70 , L = 32 , k = 5.65 , Nu = ?"
                                            step2="Formula" step2heading="nu = h * l / k"
                                            step3="Putting Vales" step3heading=" 70 * 32 / 5.65"
                                            step4="396.46"
                                        /></div>
                                }
                                {selectCondition === "Convection Heat Transfer Coefficient" &&
                                    <div ref={divRef}>
                                        <Example heading="Convection Heat Transfer Coefficient"
                                            title="step by step solution"
                                            step1="Data : " step1heading="h = ? , L = 32 , k = 5.65 , Nu = 396.4600"
                                            step2="Formula" step2heading="h = Nu * k * L"
                                            step3="Putting Value" step3heading="396.4600 * 5.65 * 32"
                                            step4="71679.968"
                                        /></div>
                                }
                                {selectCondition === "Characteristic Length" &&
                                    <div ref={divRef}>
                                        <Example heading="Characteristic Length"
                                            title="step by step solution"
                                            step1="Data : " step1heading="h = 71679.9680 , L = ? , k = 5.65 , Nu = 396.4600"
                                            step2="Formula" step2heading="nu * k / h"
                                            step3="Putting value" step3heading="396.4600 * 5.65 / 71679.9680"
                                            step4="0.0312"
                                        /></div>
                                }
                                {selectCondition === "Thermal Conductivity of Fluidy" &&
                                    <div ref={divRef}>
                                        <Example heading="Thermal Conductivity of Fluid"
                                            title="step by step solution"
                                            step1="Data : " step1heading="h = 71679.9680 , L = 0.0312 , k = ? , Nu = 396.4600"
                                            step2="Formula" step2heading="e = h * l / nu"
                                            step3="Putting value" step3hrading="71679.9680 * 0.0312 /  396.4600"
                                            step4="5.641"
                                        /></div>
                                }  </>}</div>

                    </div>
                    <div className='mt-2'>
                        The Nusselt Number is a dimensionless number that is used in the study of mass transfer. The Nusselt Number is denoted by the symbol 'Nu'. The Nusselt number is the ratio of convective to conductive heat transfer across the boundary. This advanced online Nusselt Number Calculator is used to calculate the various parameters of Nusselt Number by using various formulas.<br />

                        In short, the Nusselt number is a dimensionless parameter used in calculations of heat transfer between a moving fluid and a solid body.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Nusslet Number<br /> <span>Nu = hL/k</span></dt>
                                <dt>Convection Heat Transfer Coefficient :<br /><span>k = Nuk/L</span> </dt>
                                <dt>Characteristic Length :<br /> <span>L = Nuk/h</span> </dt>
                                <dt>Thermal Conductivity of the Fluid :<br /><span>k = hL/Nu</span> </dt>
                                <dt>Where,</dt>
                                Nu = Nusselt Number,<br />
                                h = Convection Heat Transfer Coefficient,<br />
                                L = Characteristic Length,<br />
                                k = Thermal Conductivity of the Fluid.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                    <Reference
                        step1={<>Nusselt Number - an overview | Topics. <Link className='Reference-link'
                            to="https://www.sciencedirect.com/topics/chemical-engineering/nusselt-number"
                            target="_blank">Sciencedirect.com.</Link> </>}
                        step2={<><Link className='Reference-link'
                            to="https://www.engineersedge.com/heat_transfer/nusselt_number_13856.htm"
                            target="_blank">Nusselt Number</Link> for Forced Convection | Engineers Edge | Engineersedge.com</>}
                        step3={<>The Nusselt Number.<Link className='Reference-link'
                            to="https://pages.jh.edu/virtlab/heat/nusselt/nusselt.htm"
                            target="_blank">p.eduages.jh</Link> </>} />
                </div>
            </Container >
        </div >
    )
}

export default NussletNumber