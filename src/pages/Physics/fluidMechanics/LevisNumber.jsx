import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function LevisNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Lewis Number');

    const [LE, setLE] = useState(23);
    const [A, setA] = useState(15);
    const [DC, setDC] = useState(25);

    // main states
    const [LEvalue, setLEvalue] = useState(0)
    const [Avalue, setAvalue] = useState(0)
    const [DCvalue, setDCvalue] = useState(0)
    // functionality
    const LEcalculator = () => {
        const LE = A / DC;
        setLEvalue(LE.toPrecision(6));
    }
    function LEcalculatorReset() {
        setLEvalue(0);
        setA(0);
        setDC(0);
    }
    const Acalculator = () => {
        const a = LE* DC;
        setAvalue(a.toPrecision(6));
    }
    function AcalculatorReset() {
        setAvalue(0);
        setLE(0);
        setDC(0);
    }
    const DCcalculator = () => {
        const dc= A/LE;
        setDCvalue(dc.toPrecision(6));
    }
    function DCcalculatorReset() {
        setDCvalue(0);
        setLE(0);
        setA(0);
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
                    <h2 className='text-center fw-bold'> Lewis Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Lewis Number" className='value-dropdown'>Lewis Number </option>
                                    <option value='Thermal Diffusivity' className='value-dropdown' >Thermal Diffusivity</option>
                                    <option value='Mass Diffusivity' className='value-dropdown' >Mass Diffusivity</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Lewis Number" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>Lewis Number (Le) = α / Dc</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Diffusivity (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={A}
                                            onChange={(e) => setA(e.target.value)} />m/s2
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mass Diffusivity (Dc):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={DC}
                                            onChange={(e) => setDC(e.target.value)} />m/s2
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Lewis Number (Le)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{LEvalue.toString().substring(0, 6)}gpm</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={LEcalculator} />
                                    <ButtonA text="Reset" onClick={LEcalculatorReset} />
                                </div>
                            </>}

                            {/* ////////////////////////////////////  FLOW Area /////////////////////////////// */}
                            {selectCondition === "Thermal Diffusivity" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>Thermal Diffusivity (α) = Le * Dc</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Mass Diffusivity (Dc):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={DC}
                                            onChange={(e) => setDC(e.target.value)} />m/s2
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Lewis Number (Le):  </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number me-2" className='ms-3 me-2' value={LE}
                                            onChange={(e) => setLE(e.target.value)} /> gpm
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Thermal Diffusivity (a):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator} />
                                    <ButtonA text="Reset" onClick={AcalculatorReset} />
                                </div>
                            </>}
                            {/* ////////////////////////////////////  FLOW Velocity /////////////////////////////// */}
                            {selectCondition === "Mass Diffusivity" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>Mass Diffusivity (Dc) = α / Le</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Thermal Diffusivity (a): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={A}
                                            onChange={(e) => setA(e.target.value)} />m/s2
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Lewis Number (Le):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={LE}
                                            onChange={(e) => setLE(e.target.value)} />gpm
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Mass Diffusivity (Dc)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{DCvalue.toString().substring(0, 6)} ms-2</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={DCcalculator} />
                                    <ButtonA text="Reset" onClick={DCcalculatorReset} />
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
                                {selectCondition === "Lewis Number" &&
                                <div ref={divRef}>
                                    <Example heading="Lewis Number"
                                        title="step by step solution"
                                        step1="Data : " step1heading="Le = ? , α = 12 , Dc = 16"
                                        step2="Formula" step2heading="Lewis Number (Le) = α / Dc "
                                        step3="Solution:" step3heading={<>By putting Values in the above formula:
                                        <br/>Lewis Number (Le) = 12 / 16</>} step4="Lewis Number (Le) = 0.75 gpm"/></div>
                                }
                                {selectCondition === "Work Horsepower" &&
                                <div ref={divRef}>
                                       <Example heading="Lewis Number"
                                       title="step by step solution"
                                       step1="Data : " step1heading="α = ? , Le = 21 , Dc = 16"
                                       step2="Formula" step2heading="Thermal Diffusivity (α) = Le * Dc"
                                       step3="Solution:" step3heading={<>By putting Values in the above formula:
                                       <br/>Thermal Diffusivity (α) = 21 * 16</>} step4="Thermal Diffusivity (α) = 336 ms-2"
                                       /></div>
                                }
                                {selectCondition === "Total Head" &&
                                <div ref={divRef}>
                                    <Example heading="Total Head"
                                        title="step by step solution"
                                        step1="Data : " step1heading="wh = 10 , pe = 10 , frd = 10 , th = ?"
                                        step2="Formula" step2heading="th = (((3960*wh*pe)/(frd*100))*100)/100 "
                                        step3="396" 
                                       /></div>
                                } </>}
                        </div>

                    </div>
                    <div className='mt-1'>
                        The Lewis Number is a dimensionless number. Lewis Number refers to the study of combined heat and mass transfer. Lewis number is defined as the ratio of thermal diffusivity to mass diffusivity. The Lewis Number is denoted by the symbol 'Le'. Here, diffusion describes the movement of a chemical species A through a binary mixture of A and B due to the presence of a concentration gradient.<br />

                        The measurement of Lewis Number is equal to the thermal diffusivity that is divided by the diffusion coefficient. The advanced online Lewis Number Calculator is useful in calculating the ratio of thermal and mass diffusivity.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Lewis Number :<br /> <span>Le = α/ Dc</span></dt>
                                <dt>Thermal Diffusivity :<br /><span>α = Le* Dc</span> </dt>
                                <dt>Mass Diffusivity :<br /> <span>Dc = α/Le</span> </dt>
                                <dt>Where, </dt>
                                Le = Lewis Number,<br />
                                α = Thermal Diffusivity,<br />
                                Dc = Mass Diffusivity.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default LevisNumber