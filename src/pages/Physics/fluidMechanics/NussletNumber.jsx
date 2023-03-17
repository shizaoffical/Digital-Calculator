import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function NussletNumber() {


    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Nusselt Number');
    // main states
    const [NU, setNU] = useState(19);
    const [H, setH] = useState(0.65);
    const [L, setL] = useState(73);
    const [K, setK] = useState(23);
    // work states
    const [NUvalue, setNUvalue] = useState(0)
    const [Hvalue, setHvalue] = useState(0)
    const [Lvalue, setLvalue] = useState(0)
    const [Kvalue, setKvalue] = useState(0)
    // NU VALUE
    const NUcalculator = () => {
        const nu = (H * L ) / K;
        setNUvalue(nu);
    }
    function NUcalculatorReset() {
        setH(0);
        setL(0);
        setK(0)
        setNUvalue(0)
    }
    // hvalue
    const Hcalculator = () => {
        const H = (NU * K ) / L;
        setHvalue(H);
    }
    function HcalculatorReset() {
        setK(0);
        setL(0);
        setNU(0)
        setHvalue(0)
    }
    // Lvalue
    const Lcalculator = () => {
        const L =  (NU * K) /H 
        setLvalue(L);
    }
    function LcalculatorReset() {
        setH(0);
        setK(0);
        setNU(0)
        setLvalue(0)
    }
    //pecalculator
    const Kcalculator = () => {
        const K = (H  * L) / NU;
        setKvalue(K);
    }
    function KcalculatorReset() {
        setL(0);
        setH(0);
        setNU(0)
        setKvalue(0)
    }

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
                                            <input type="number" className='ms-3' value={H}
                                                onChange={(e) => setH(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Characteristic Length (L): </label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={L}
                                                onChange={(e) => setL(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Thermal Conductivity of the Fluid (k):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={K}
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
                                            <input type="number" className='ms-3' value={L}
                                                onChange={(e) => setL(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Thermal Conductivity of the Fluid (k):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Nusselt Number (Nu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={NU}
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
                                            <input type="number" className='ms-3' value={H}
                                                onChange={(e) => setH(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Thermal Conductivity of the Fluid (k):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Nusselt Number (Nu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={NU}
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
                                            <input type="number" className='ms-3' value={K}
                                                onChange={(e) => setK(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Characteristic Length (L):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={L}
                                                onChange={(e) => setL(e.target.value)} />
                                        </Col> 
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Nusselt Number (Nu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={NU}
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
                                    <Example heading="Nusselt Number"
                                        title="step by step solution"
                                        step1="Data : " step1heading="h = 70 , L = 32 , k = 5.65 , Nu = ?"
                                        step2="Formula" step2heading="nu = h * l / k"
                                        step3="Putting Vales" step3heading=" 70 * 32 / 5.65" 
                                        step4="396.46"/>
                                }
                                {selectCondition === "Convection Heat Transfer Coefficient" &&
                                    <Example heading="Convection Heat Transfer Coefficient"
                                        title="step by step solution"
                                        step1="Data : " step1heading="h = ? , L = 32 , k = 5.65 , Nu = 396.4600"
                                        step2="Formula" step2heading="h = Nu * k * L"
                                        step3="Putting Value" step3heading="396.4600 * 5.65 * 32" 
                                        step4="71679.968"/>
                                }
                                {selectCondition === "Characteristic Length" &&
                                    <Example heading="Characteristic Length"
                                        title="step by step solution"
                                        step1="Data : " step1heading="h = 71679.9680 , L = ? , k = 5.65 , Nu = 396.4600"
                                        step2="Formula" step2heading="nu * k / h"
                                        step3="Putting value" step3heading="396.4600 * 5.65 / 71679.9680"
                                        step4="0.0312"/>
                                }
                                {selectCondition === "Thermal Conductivity of Fluidy" &&
                                    <Example heading="Thermal Conductivity of Fluid"
                                        title="step by step solution"
                                        step1="Data : " step1heading="h = 71679.9680 , L = 0.0312 , k = ? , Nu = 396.4600"
                                        step2="Formula" step2heading="e = h * l / nu"
                                        step3="Putting value"   step3hrading="71679.9680 * 0.0312 /  396.4600" 
                                        step4="5.641" />
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
                </div>
            </Container >
        </div >
    )
}

export default NussletNumber