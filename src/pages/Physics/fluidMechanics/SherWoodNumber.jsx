import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function SherWoodNumber() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('sherwood number');

    // main states 
    const [SH, setSH] = useState(4);
    const [TC, setTC] = useState(4);
    const [CL, setCL] = useState(5);
    const [DC, setDC] = useState(5);
    // VALUE STATES
    const [SHvalue, setSHvalue] = useState(0);
    const [TCvalue, setTCvalue] = useState(0);
    const [CLvalue, setCLvalue] = useState(0);
    const [DCvalue, setDCvalue] = useState(0);
    //   HRvalue functionalty
    
//   SHcalculator
const SHcalculator =() => {
     const SH = (((TC*CL)/DC)*100)/100;
     setSHvalue(SH);
}
function SHcalculatorReset() {
 setSHvalue(0)
}
// TCcalculator
const TCcalculator =() => {
    const TC =(((SH*DC)/DC)*100)/100;
    setTCvalue(TC);
}
function TCcalculatorReset(){
    setTCvalue();
}
// CLcalculator
const CLcalculator =() => {
    const CL =(((SH*DC)/TC)*100)/100;
    setCLvalue(CL);
}
function CLcalculatorReset(){
 setCLvalue(0)    
}
// DCcalculatorReset
const DCcalculator = () => {
  const DC = (((TC*CL)/SH)*100)/100;
  setDCvalue(DC);
}
function DCcalculatorReset() {
  setDCvalue(0)
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
                    <h2 className='text-center fw-bold'>Sherwood Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="sherwood number" className='value-dropdown'>sherwood number</option>
                                    <option value='mass Transfer Coefficient' className='value-dropdown' >mass Transfer Coefficient</option>
                                    <option value='Characteristic Length' className='value-dropdown' >Characteristic Length</option>
                                    <option value='Diffusion Coefficient' className='value-dropdown' >Diffusion Coefficient (D):</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                            {selectCondition === "sherwood number" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mass Transfer Coefficient (K):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={TC}
                                            onChange={(e) => setTC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (L):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Diffusion Coefficient (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={DC}
                                            onChange={(e) => setDC(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>sherwood number</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{SHvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={SHcalculator} />
                                    <ButtonA text="Reset" onClick={SHcalculatorReset} />
                                </div>
                            </>}
                             {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                             {selectCondition === "mass Transfer Coefficient" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Sherwood Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={SH}
                                            onChange={(e) => setSH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (L):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Diffusion Coefficient (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={DC}
                                            onChange={(e) => setDC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Mass Transfer Coefficient</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{TCvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={TCcalculator} />
                                    <ButtonA text="Reset" onClick={TCcalculatorReset} />
                                </div>
                            </>}
                             {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                             {selectCondition === "Characteristic Length" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Sherwood Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={SH}
                                            onChange={(e) => setSH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mass Transfer Coefficient</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={TC}
                                            onChange={(e) => setTC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Diffusion Coefficient (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={DC}
                                            onChange={(e) => setDC(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Characteristic Length (L):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{CLvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={CLcalculator} />
                                    <ButtonA text="Reset" onClick={CLcalculatorReset} />
                                </div>
                            </>}
                             {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                             {selectCondition === "Diffusion Coefficient" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Sherwood Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={SH}
                                            onChange={(e) => setSH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mass Transfer Coefficient</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={TC}
                                            onChange={(e) => setTC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={CL}
                                            onChange={(e) => setCL(e.target.value)} />
                                    </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Diffusion Coefficient</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{DCvalue.toString().substring(0, 6)}</button></Col>
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
                            {
                                textShow &&
                                <Example heading="step by step solution"
                                    title={<>Calculate the Sherwood Numbers for the given details.<br />
                                        Mass Transfer Coefficient (k) = 5 m/s<br />
                                        Characteristic Length (L) = 15 m<br />
                                        Diffusion Coefficient (D) = 10 m2/s<br /></>}
                                    step1={<>Solution <br /> Apply Formula : </>} step1heading={<>Sh = kl/D<br />
                                        Sh = 5*15/10</>} step1value="Sh = 7.5"
                                    step2="Sherwood Number (Sh) = 7.5" />
                            }</div>

                    </div>
                    <div className='mt-3'>
                        The Sherwood Numbers is defined as a relationship between a mass transfer coefficient and a characteristic length, such as pipe diameter and a coefficient of diffusion. Sherwood Number is named in the honor of Thomas Kilgore Sherwood.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                 <dt>Sherwood Number :</dt>
                                Sh = kl/D
                                <dt>Mass Transfer Coefficient : </dt>
                                k = ShD/L
                                 <dt>Characteristic Length :</dt>
                                L = ShD/k
                                <dt>Diffusion Coefficient : </dt>
                                D = kl/Sh
                                 <dt>Where,</dt>
                                Sh = Sherwood Number,
                                k = Mass Transfer Coefficient,
                                L = Characteristic Length,
                                D = Diffusion Coefficient.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default SherWoodNumber