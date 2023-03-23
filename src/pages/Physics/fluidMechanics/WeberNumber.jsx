import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function WeberNumber() {

    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('weber number');

    const [WN, setWN] = useState(23);
    const [V, setV] = useState(15);
    const [D, setD] = useState(35);
    const [CL, setCL] = useState(26);
    const [ST, setST] = useState(14);

    // main states
    const [WNvalue, setWNvalue] = useState(0)
    const [Vvalue, setVvalue] = useState(0)
    const [Dvalue, setDvalue] = useState(0)
    const [CLvalue, setCLvalue] = useState(0)
    const [STvalue, setSTvalue] = useState(0)

    // functionality
    const WNcalculator = () => {
        const WN =Math.round(((D*V*V*CL)/ST)*100)/100;
        setWNvalue(WN.toPrecision(6));
    }
    function WNcalculatorReset() {
        setWNvalue(0);
        setV(0);
        setD(0);
        setCL(0);
        setST(0);
    }
    // VELOCITY
    const Vcalculator = () => {
        const V = Math.round((Math.sqrt((WN*ST)/(D*CL)))*100)/100;
        setVvalue(V.toPrecision(6));
    }
    function VcalculatorReset() {
        setVvalue(0);
        setWN(0);
        setD(0);
        setCL(0);
        setST(0);
    }
    // DENSITY
    const Dcalculator = () => {
        const D = Math.round(((WN*ST)/(V*V*CL))*100)/100;
        setDvalue(D.toPrecision(6));
    }
    function DcalculatorReset() {
        setDvalue(0);
        setWN(0);
        setV(0);
        setCL(0);
        setST(0);
    }
    // heat capacity
    // DENSITY
    const STcalculator = () => {
        const ST =Math.round(((D*V*V*CL)/WN)*100)/100;
        setSTvalue(ST.toPrecision(6));
    }
    function STcalculatorReset() {
        setSTvalue("");
        setWN(0);
        setV(0);
        setCL(0);
        setD(0);
    }
    // CHARACTER LENGTH
    const CLcalculator = () => {
        const CL = Math.round(((WN*ST)/(D*V*V))*100)/100;
        setCLvalue(CL.toPrecision(6));
    }
    function CLcalculatorReset() {
        setCLvalue("");
        setWN(0);
        setV(0);
        setST(0);
        setD(0);
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
                    <h2 className='text-center fw-bold'> Weber Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value='weber number' className='value-dropdown' >weber number</option>
                                    <option value="density" className='value-dropdown'>density</option>
                                    <option value='velocity' className='value-dropdown' >velocity</option>
                                    <option value='Surface Tension' className='value-dropdown' >Surface Tension</option>
                                    <option value='character length' className='value-dropdown' >character length</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  peclet number /////////////////////////////// */}
                            {selectCondition === "weber number" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={V}
                                            onChange={(e) => setV(e.target.value)} />m/s
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density (p):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={D}
                                            onChange={(e) => setD(e.target.value)} />kg/m3
                                    </Col>
                                </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />m
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={ST}
                                            onChange={(e) => setST(e.target.value)} />N/m
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Weber number</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{WNvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={WNcalculator} />
                                    <ButtonA text="Reset" onClick={WNcalculatorReset} />
                                </div>
                            </>}
                            {/* /////////////////////////////////// VELOCITY  /////////////////////// */}
                            {selectCondition === "velocity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density (p):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={D}
                                            onChange={(e) => setD(e.target.value)} />kg/m3
                                    </Col>
                                </Row>
                                  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />m
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={ST}
                                            onChange={(e) => setST(e.target.value)} />N/m
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Velocity :</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Vcalculator} />
                                    <ButtonA text="Reset" onClick={VcalculatorReset} />
                                </div>
                            </>}
                            {/* ////////////////////  Density   /////////////////// */}
                            {selectCondition === "density" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={V}
                                            onChange={(e) => setV(e.target.value)} />m/s
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />m
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={ST}
                                            onChange={(e) => setST(e.target.value)} />N/m
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Density :</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Dvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Dcalculator} />
                                    <ButtonA text="Reset" onClick={DcalculatorReset} />
                                </div>
                            </>}
                            {/* ////////////  heat capacity //////////////// */}
                            {selectCondition === "Surface Tension" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={V}
                                            onChange={(e) => setV(e.target.value)} />m/s
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={D}
                                            onChange={(e) => setD(e.target.value)} />kg/m3
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />m
                                    </Col>
                                </Row> 

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Surface Tension</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{STvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={STcalculator} />
                                    <ButtonA text="Reset" onClick={STcalculatorReset} />
                                </div>
                            </>}
                            {/* ////////////  CHARACTER LENGTH //////////////// */}
                            {selectCondition === "character length" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={V}
                                            onChange={(e) => setV(e.target.value)} />m/s
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={D}
                                            onChange={(e) => setD(e.target.value)} />kg/m3
                                    </Col>
                                </Row>
                                 <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={ST}
                                            onChange={(e) => setST(e.target.value)} />W/m-K
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Characteristic Length (D):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{CLvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={CLcalculator} />
                                    <ButtonA text="Reset" onClick={CLcalculatorReset} />
                                </div>
                            </>}
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }}
                                className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        <div>
                            {textShow &&

                                <Example heading="Example"
                                    title={<>Calculate the Weber Number for the given details.<br/>
                                        Density (ρ) = 5 kg/m3<br/>
                                        Velocity (v) = 10 m/s<br/>
                                        Characteristic Length (L) = 15 m<br/>
                                        Surface Tension (σ) = 20 N/m<br/></>}
                                    step1={<>Solution : <br /> Apply Formula</>} step1heading="We = ρv2L/σ"
                                    step2="Weber Number (We) = 375" />
                            }
                        </div>

                    </div>
                    <div className='mt-2'>
                    The Weber Number is especially used for multiphase flows with strongly curved surfaces.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Weber Number : </dt>
                                We = ρv2L/σ
                               <dt> Density : </dt>
                                ρ = Weσ/v2L
                                <dt>Velocity : </dt>
                                v= √Weσ/ ρL
                                 <dt>Characteristic Length :</dt>
                                L = Weσ/ ρv2
                                 <dt>Surface Tension :</dt>
                                σ = ρv2L/We
                                <dt>Where, </dt>
                                We = Weber Number,<br/>
                                ρ = Density,<br/>
                                v = Velocity,<br/>
                                L = Characteristic Length,<br/>
                                σ = Surface Tension.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default WeberNumber