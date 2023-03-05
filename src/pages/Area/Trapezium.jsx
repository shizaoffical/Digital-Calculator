import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Trapezium() {

 
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area of Trapezium');
    // Area of Trapezium
     const [Psidea, setPsidea] = useState(4);
     const [Psideb, setPsideb] = useState(6);
     const [PsideDistance, setPsideDistance] = useState(12);
     const [AreaTrapezium, setAreaTrapezium] = useState(0);
    // Perimeter OF Tapezium 
    const [A, setA] = useState(3);
    const [B, setB] = useState(4);
    const [C, setC] = useState(5);
    const [D, setD] = useState(6);
    const [PerimeterTrapezium, setPerimeterTrapezium] = useState(0)
   
   // Area of Trapezium
 const areaTrapezium =() => {
    const TrapeziumArea = 1/2 * (Psidea + Psideb) * PsideDistance;
    setAreaTrapezium(TrapeziumArea)
 }
 function areaTrapeziumReset() {
    setPsidea(0);
    setPsideb(0);
  setPsideDistance(0);
    setAreaTrapezium("")
 }

const perimeterTrapezium =() => {
   const perimeter = A+ B + C + D;
   setPerimeterTrapezium(perimeter);
} 
function perimeterTrapeziumReset() {
    setA(0);
    setB(0);
    setC(0);
    setD(0);
 setPerimeterTrapezium("")
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
    <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> Trapezium Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Area of Trapezium " className='value-dropdown'>Area of Trapezium </option>
                                <option value='Perimeter OF Trapezium ' className='value-dropdown' >Perimeter of Trapezium </option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////  Area of Trapezium  /////////////////////////////// */}
                        {
                            selectCondition === "Area of Trapezium" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Parallel side 1 (a):
                                            <input type="number" className='ms-3' value={Psidea}
                                            onChange={(e) => setPsidea(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label>Parallel side 1 (b):
                                            <input type="number" className='ms-3' value={Psideb}
                                           onChange={(e) => setPsideb(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label>Distance between parallel sides: (h):
                                            <input type="number" className='ms-3' value={PsideDistance}
                                          onChange={(e)=> setPsideDistance(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Area of Trapezium: </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{AreaTrapezium.toString().substring(0,6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA  text="Calculate" onClick={areaTrapezium}/>
                                    <ButtonA   text="Reset" onClick={areaTrapeziumReset}/>

                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Perimeter OF Trapezium  ////////////////////////////// */}

                        {
                            selectCondition === "Perimeter OF Trapezium " && <>
                            <dt className='text-center'> Enter the length of a side</dt>
                           
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> a:
                                            <input type="number" className='ms-3' value={A}
                                           onChange={(e)=> setA(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label>b:
                                            <input type="number" className='ms-3' value={B}
                                          onChange={(e)=> setB(e.target.value)}  />
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> c:
                                            <input type="number" className='ms-3' value={C}
                                           onChange={(e) => setC(e.target.value)}/>
                                        </label></Col>
                                </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> d:
                                            <input type="number" className='ms-3'value={D}
                                           onChange={(e) => setD(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Perimeter of Trapezium: </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                        {parseFloat(PerimeterTrapezium).toString().substring(0,6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA  text="Calculate" onClick={perimeterTrapezium}/>
                                    <ButtonA text="Reset" onClick={perimeterTrapeziumReset}/>

                                </div>
                            </>

                        }</div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {
                            textShow &&
                            <>
                                {selectCondition === "Area of Trapezium" &&
                                    <Example heading="Area of Trapezium"
                                        title="step by step solution"
                                        step1="Data : " step1heading="Area = ? , a = 4 , b = 6 , h = 12"
                                        step2="Formula" step2heading="Area  = a + b /2 * h"
                                        step3="Solution: " step3heading={<> Now we have to put values in above formula: <br />
                                        A = ((4) + (6) / 2 ) * 12<br/>A = (10 / 2 ) * 12</>}
                                        step4="Area of trapezium = 60" />
                                }
                                {selectCondition === "Perimeter OF Trapezium " &&
                                    <Example heading="Perimeter OF Trapezium "
                                        title="step by step solution"
                                        step1="Data" step1heading="Perimeter = ? , a = 3 , b = 4 , c = 5 , d = 6"
                                        step2="Formula " step2heading="Perimeter = (a + b) + (c + d)"
                                        step3="Solution: " step3heading={<>Now we have to put values in above formula:<br />
                                        Perimeter = (3 + 4) + (5 + 6)<br />Perimeter = 7 + 11</>}
                                        step4="Area of trapezium = 18.000000 " />
                                }

                            </>

                        }</div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(true)} text="Formula"/>
                    {show ?
                        <div className='formula-backside'>

                            <dt>Area of Trapezium<span> = ½×(a + b)×h </span></dt>
                            <dt>where,</dt>
                            <span>a, b = sides, h = height</span><br />
                            <dt>Perimeter of Trapezium (trapezoid calc: find p) <span>= a + b + c + d  </span></dt>
                            <dt>where,</dt>
                            <span>a, b, c, d = sides</span><br />
                            <ButtonA onClick={() => setShow(false)} text="Close  Formula" />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >

  )
}

export default Trapezium