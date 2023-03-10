import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function FlowRate() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Flow Rate');

    // main
    const [V, setV] = useState(23);
    const [A, setA] = useState(15);
    const [R, setR] = useState(25);

    // main states
    const [FV, setFV] = useState(0)
    const [FA, setFA] = useState(0)
    const [FR, setFR] = useState(0)
    // flowrate
    const flowRate = () => {
        const flowrate = Math.round(A * V)
        setFR(flowrate);
    }
    function flowRateReset() {
        setFR("")
    }

    // flowrate
    const flowArea = () => {
        const flowarea = Math.round(R / V)
        setFA(flowarea);
    }
    function flowAreaReset() {
        setFA("")
    }
    
    // flowrate
    const flowVelocity = () => {
        const flowvelocity = Math.round(R / A)
        setFV(flowvelocity);
    }
    function flowVelocityReset() {
        setFV("")
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
                    <h2 className='text-center fw-bold'> Flow Rate Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Flow Rate" className='value-dropdown'>Flow Rate </option>
                                    <option value='Flow Area' className='value-dropdown' >Flow Area</option>
                                    <option value='Flow Velocity' className='value-dropdown' >Flow Velocity</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Flow Rate" && <>
                            <div className='text-center'> <dt>Formula</dt> <span>Q = A * V</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Flow Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3 me-2' value={V}
                                                onChange={(e) => setV(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Flow Area (A):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3 me-2' value={A}
                                                onChange={(e) => setA(e.target.value)} />
                                        </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Flow Rate</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{FR.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={flowRate} />
                                    <ButtonA text="Reset" onClick={flowRateReset} />

                                </div>
                            </>}

                            {/* ////////////////////////////////////  FLOW Area /////////////////////////////// */}
                            {selectCondition === "Flow Area" && <>
                            <div className='text-center'> <dt>Formula</dt> <span>A = Q / V</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Flow Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3 me-2' value={V}
                                                onChange={(e) => setV(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Flow Rate (R):  </label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3 me-2' value={R}
                                                onChange={(e) => setR(e.target.value)} />
                                      </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Flow Area</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{FA.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={flowArea} />
                                    <ButtonA text="Reset" onClick={flowAreaReset} />

                                </div>
                            </>}
                            {/* ////////////////////////////////////  FLOW Velocity /////////////////////////////// */}
                            {selectCondition === "Flow Velocity" && <>
                            <div className='text-center'> <dt>Formula</dt> <span>V = Q / A</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Flow Area (A): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3 me-2' value={A}
                                                onChange={(e) => setA(e.target.value)} />
                                       </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Flow Rate(R):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3 me-2' value={R}
                                                onChange={(e) => setR(e.target.value)} />
                                        </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Flow Velocity</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{FV.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={flowVelocity} />
                                    <ButtonA text="Reset" onClick={flowVelocityReset} />

                                </div>
                            </>}
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }}
                                className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        <div>
                            {
                                textShow &&
                                <Example heading="Flow Rate or Discharge"
                                    title={<>Calculate the Flow Rate for the given details..<br />
                                        Flow Area (A) = 25 m2<br />Flow Velocity (v) = 15 m/s<br /></>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="Q = A*v"
                                    step1value="Q = 25 /15"
                                    step2="Q = 375 m3/s" />
                            }</div>

                    </div>
                    Flow rate refers to the amount of fluid that flows in a given time. The online advanced Flow Rate Calculator is used to calculate the flow rate, flow area and flow velocity of the fluid.<br />

                    The flow rate calculator is used to measure the flow rate of the fluid passing through the given matter or container.<br />
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Flow Rate :<br /> <span>Q = A*v</span></dt>
                                <dt>Flow Area :<br /><span>A= Q/v</span> </dt>
                                <dt>Flow Velocity :<br /> <span>v = Q/A</span> </dt>
                                <dt>Where, </dt>
                                Q = Flow Rate,<br />
                                A = Flow Area,<br />
                                v = Flow Velocity..<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default FlowRate