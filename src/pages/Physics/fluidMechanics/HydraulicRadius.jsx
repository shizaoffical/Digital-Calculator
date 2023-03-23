import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function HydraulicRadius() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Hydraulic Radius');

    // main states 
    const [HR, setHR] = useState(4);
    const [A , setA] =useState(4);
    const [WP, setWP] = useState(5);
// VALUE STATES
const [HRvalue,setHRvalue] = useState(0);
const [Avalue,setAvalue] = useState(0);
const [WPvalue,setWPvalue] = useState(0);
//   HRvalue functionalty
const HRcalculator =() => {
  const hr = A / WP;
  setHRvalue(hr.toPrecision(6));
}
function HRcalculatorReset() {
 setA(0)
 setWP(0)
 setHRvalue(0)
}
//   avalue functionalty
const Acalculator =() => {
    const a = HR * WP;
    setAvalue(a.toPrecision(6));
  }
  function AcalculatorReset() {
   setHR(0)
   setWP(0)
   setAvalue(0)
  }
  //   HRvalue functionalty
const WPcalculator =() => {
    const wp = A / HR;
    setWPvalue(wp.toPrecision(6));
  }
  function WPcalculatorReset() {
   setA(0)
   setHR(0)
   setWPvalue(0)
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
                                    <option value="Hydraulic Radius" className='value-dropdown'>Hydraulic Radius</option>
                                    <option value='Area Of Section Flow' className='value-dropdown' >Area Of Section Flow</option>
                                    <option value='Wetted Perimeter' className='value-dropdown' >Wetted Perimeter</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Hydraulic Radius" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>Q = A * V</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Area of Section Flow (A):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={A}
                                        onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Wetted Perimeter (Pw):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WP}
                                        onChange={(e) => setWP(e.target.value)}/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Hydraulic Radius (Rh)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{HRvalue.toString().substring(0,6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={HRcalculator}/>
                                    <ButtonA text="Reset"  onClick={HRcalculatorReset}/>

                                </div>
                            </>}
                                  {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                                  {selectCondition === "Area Of Section Flow" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>Q = A * V</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Hydraulic Radius (Rh):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={HR}
                                        onChange={(e) => setHR(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} >
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Wetted Perimeter (Pw):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WP}
                                        onChange={(e) => setWP(e.target.value)}/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Area Of Section Flow</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0,6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator}/>
                                    <ButtonA text="Reset"  onClick={AcalculatorReset}/>

                                </div>
                            </>}
                                  {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                                  {selectCondition === "Wetted Perimeter" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>Q = A * V</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Area of Section Flow (A):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={A}
                                        onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Hydraulic Radius (Rh):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={HR}
                                        onChange={(e) => setHR(e.target.value)}/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Wetted Perimeter</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{WPvalue.toString().substring(0,6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={WPcalculator}/>
                                    <ButtonA text="Reset"  onClick={WPcalculatorReset}/>

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
                                <Example heading="step by step solution"
                                    title={<>Calculate the hydraulic radius for the given details.<br />
                                        Area of Section Flow (A) = 25 m2<br />Wetted Perimeter (Pw) = 20 m<br /></>}
                                    step1={<>Solution <br /> Apply Formula : </>} step1heading="Rh = A/Pw"
                                    step1value="Rh = 25/20"
                                    step2="Hydraulic Radius (Rh) = 1.25 m" />
                            }</div>

                    </div>
                    <div className='mt-3'>
                        Hydraulic radius refers to the ratio of the cross-sectional area of a conduit or a stream channel in which a fluid is flowing to the inner perimeter of the conduit or stream channel. Hydraulic Radius is based on the principle that higher the ratio, the more efficient is the channel in transmitting water.<br/>

                        Hydraulic radius is the measure of channel efficiency. This online advanced Hydraulic Radius Calculator is useful in calculating the hydraulic radius by putting the values Area of Section Flow (A) and Wetted Perimeter (Pw) in respective boxes.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Hydraulic Radius :<br /> <span>Rh = A/Pw</span></dt>
                                <dt>Area of Section Flow :<br /><span>A= Rh* Pw</span> </dt>
                                <dt>Wetted Perimeter :<br /> <span>Pw = A/ Rh</span> </dt>
                                <dt>Where, </dt>
                                Rh = Hydraulic Radius,<br />
                                A = Area of Section Flow,<br />
                                Pw = Wetted Perimeter.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default HydraulicRadius