import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function Renold() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('renolds number');

    const [V, setV] = useState(15);
    const [D, setD] = useState(35);
    const [CL, setCL] = useState(26);
    const [VS, setVS] = useState(16);
    const [RN, setRN] = useState(14);

    // main states
    const [RNvalue, setRNvalue] = useState(0)
    const [Vvalue, setVvalue] = useState(0)
    const [Dvalue, setDvalue] = useState(0)
    const [CLvalue, setCLvalue] = useState(0)
    const [VSvalue, setVSvalue] = useState(0)

    // REYNOLD NUMBER
    const RNcalculator = () => {
        const RN = Math.round(((D * V * CL) / VS) * 100) / 100;
        setRNvalue(RN.toPrecision(6));
    }
    function RNcalculatorReset() {
        setRNvalue(0);
        setV(0);
        setD(0);
        setCL(0);
        setVS(0)
    }
    // VELOCITY
    const Vcalculator = () => {
        const V = Math.round(((RN * VS) / (D * CL)) * 100) / 100;
        setVvalue(V.toPrecision(6));
    }
    function VcalculatorReset() {
        setVvalue(0);
        setD(0);
        setCL(0);
        setVS(0);
        setRN(0);
    }
    // DENSITY
    const Dcalculator = () => {
        const D = Math.round(((RN * VS) / (V * CL)) * 100) / 100;
        setDvalue(D.toPrecision(6));
    }
    function DcalculatorReset() {
        setDvalue(0);
        setV(0);
        setRN(0);
        setCL(0);
        setVS(0);
    }
    // VISCIOCITY
    const VScalculator = () => {
        const VS = (((D * V * CL) / RN) * 100) / 100;
        setVSvalue(VS.toPrecision(6));
    }
    function VScalculatorReset() {
        setVSvalue(0);
        setV(0);
        setRN(0);
        setCL(0);
        setD(0);
    }
    // CHARACTER LENGTH
    const CLcalculator = () => {
        const CL = Math.round(((RN * VS) / (D * V)) * 100) / 100;
        setCLvalue(CL);
    }
    function CLcalculatorReset() {
        setCLvalue("");
        setRN(0);
        setV(0);
        setVS(0);
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
                    <h2 className='text-center fw-bold'> Reynolds Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value='renolds number' className='value-dropdown' >renolds number</option>
                                    <option value="density" className='value-dropdown'>density</option>
                                    <option value='velocity' className='value-dropdown' >velocity</option>
                                    <option value='viscosity' className='value-dropdown' >VISCOSITY</option>
                                    <option value='character length' className='value-dropdown' >character length</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  peclet number /////////////////////////////// */}
                            {selectCondition === "renolds number" && <>
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
                                        <label>Viscosity (μ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={VS}
                                            onChange={(e) => setVS(e.target.value)} />Ns/m2
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
                                    <Col md={6} sm={12} xs={12}><dt>Renolds Number</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{RNvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={RNcalculator} />
                                    <ButtonA text="Reset" onClick={RNcalculatorReset} />
                                </div>
                            </>}
                            {/* /////////////////////////////////// VELOCITY  /////////////////////// */}
                            {selectCondition === "velocity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Renolds Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={RN}
                                            onChange={(e) => setRN(e.target.value)} />
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
                                        <label>Viscosity (μ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={VS}
                                            onChange={(e) => setVS(e.target.value)} />Ns/m2
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
                                        <label>Renolds Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={RN}
                                            onChange={(e) => setRN(e.target.value)} />
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
                                        <label>Viscosity (μ): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={VS}
                                            onChange={(e) => setVS(e.target.value)} />Ns/m2
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
                            {/* ////////////  CHARACTER LENGTH //////////////// */}
                            {selectCondition === "character length" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Renolds Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={RN}
                                            onChange={(e) => setRN(e.target.value)} />
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
                                        <label>Viscosity (μ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={VS}
                                            onChange={(e) => setVS(e.target.value)} />Ns/m2
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
                            {/* /////////////////////// VISCOISITY ////////////// */}
                            {selectCondition === "viscosity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Renolds Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={RN}
                                            onChange={(e) => setRN(e.target.value)} />
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
                                        <label>Character Length(L) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />Ns/m2
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Characteristic Length (D):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{VSvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={VScalculator} />
                                    <ButtonA text="Reset" onClick={VScalculatorReset} />
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
                                <div ref={divRef}>
                                    <Example heading="Example"
                                        title={<>If a fluid is flowing with a velocity of <dt>5.2 m,</dt>  having viscosity of
                                            <dt>0.2 Ns/m2, </dt> density of  <dt>500 kg/m3,</dt>  in a pipe with a diameter of
                                            <dt>6 m,</dt> find the Reynolds number for the fluid?<br /></>}
                                        step1={<>Solution : <br /> step 1 :</>} step1heading="Identify and write down the values."
                                        step1value={<>
                                            μ = 0.2 Ns/m2<br />
                                            u = 5.2 m<br />
                                            ρ = 500 kg/m3<br />
                                            L = 6 m</>}
                                        step2="Step 2: "
                                        step2heading="Place the values in equation of Reynolds number and solve the equation."
                                        step2value={<>
                                            Re = ρ u L / μ<br />
                                            Re = (500 × 5.2 × 6) / 0.2<br />
                                            Re = 78,000</>} /></div>
                            }
                        </div>

                    </div>
                    <div className='mt-1'>
                        Reynolds number calculator is an online tool used in fluid mechanics for
                        <span className='fw-b'>  Reynolds number calculation.</span> It can be used to calculate the:
                        <ul>
                            <li>Reynolds number</li>
                            <li>Density</li>
                            <li>Velocity</li>
                            <li>Viscosity, and</li>
                            <li>Characteristic length</li>
                        </ul>
                        Let’s find out Reynolds number definition, how to find Reynolds number, formula of Reynolds number, and the difference between laminar flow and turbulent flow.
                        <dt>What is Reynolds number?</dt>
                        The <span style={{ color: "#F58648" }}>Reynolds number</span>  is a ratio that helps predict flow patterns in different fluid flow conditions. At high Reynolds numbers, flows tend to be turbulent, whereas at low Reynolds numbers, flows tend to be dominated by laminar flow.
                        There are no Reynolds number units because it is a dimensionless parameter. In other words, Reynolds number is a unit less quantity.
                        <dt>Laminar vs turbulent flow</dt>
                        The laminar flow refers to the flow of a fluid streaming in parallel layers. In laminar flow, fluid flows without having any disruption. While, turbulent flow refers to the fluid not flowing in parallel layers due to the change in <span style={{ color: "#F58648" }}>velocity,</span>  pressure, etc. It flows in mixed layers across the tube.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <span>The Reynolds number equation can be expressed as:</span>
                                <dt>Re = ρ u L / μ</dt>
                                <span>And</span>
                                <dt>Re = u L / ν</dt>
                                <dt>Where</dt>
                                Re represents Reynolds Number,
                                ρ refers to the density,
                                L is the characteristic length,
                                u is the velocity,
                                μ is the dynamic viscosity,
                                ν = μ / ρ = kinematic viscosity.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Renold