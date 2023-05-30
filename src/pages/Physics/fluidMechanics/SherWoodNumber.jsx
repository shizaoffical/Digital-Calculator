import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function SherWoodNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('sherwood number');

    // main states 
    const [SH, setSH] = useState(null);
    const [TC, setTC] = useState(null);
    const [CL, setCL] = useState(null);
    const [DC, setDC] = useState(null);
    // VALUE STATES
    const [SHvalue, setSHvalue] = useState(0);
    const [TCvalue, setTCvalue] = useState(0);
    const [CLvalue, setCLvalue] = useState(0);
    const [DCvalue, setDCvalue] = useState(0);
    //   HRvalue functionalty
    
//   SHcalculator
const SHcalculator =() => {
    if(TC && CL && DC !== null){
     const SH = (((TC*CL)/DC)*100)/100;
     setSHvalue(SH.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
}
function SHcalculatorReset() {
    if(TC && CL && DC !== 0){
    setSH(0);
    setTC(0);
    setDC(0);
    setCL(0);
 setSHvalue(0);
 setDCvalue(0);
 setTCvalue(0);
 setCLvalue(0);
}
else{
    setShowPopup(true);
}
}
// TCcalculator
const TCcalculator =() => {
    if(SH && DC && CL!== null){
    const TC =(((SH*DC)/CL)*100)/100;
    setTCvalue(TC.toPrecision(6));
}
else{
    setShowPopup(true);
}
}
function TCcalculatorReset(){
    if(SH && DC && CL !== 0){
        setSH(0);
        setTC(0);
        setDC(0);
        setCL(0);
     setSHvalue(0);
     setDCvalue(0);
     setTCvalue(0);
     setCLvalue(0);
    }
    else{
        setShowPopup(true);
    }
}
// CLcalculator
const CLcalculator =() => {
    if(TC && SH && DC !== null){
    const CL =(((SH*DC)/TC)*100)/100;
    setCLvalue(CL.toPrecision(6));
}
else{
    setShowPopup(true);
}
}
function CLcalculatorReset(){
    if(TC && SH && DC !== 0){
        setSH(0);
        setTC(0);
        setDC(0);
        setCL(0);
     setSHvalue(0);
     setDCvalue(0);
     setTCvalue(0);
     setCLvalue(0);
    }
    else{
        setShowPopup(true);
    }   
}
// DCcalculatorReset
const DCcalculator = () => {
    if(TC && CL && SH !== null){
  const DC = (((TC*CL)/SH)*100)/100;
  setDCvalue(DC.toPrecision(6));
}
else{
    setShowPopup(true);
}
}
function DCcalculatorReset() {
    if(TC && CL && SH !== 0){
        setSH(0);
        setTC(0);
        setDC(0);
        setCL(0);
     setSHvalue(0);
     setDCvalue(0);
     setTCvalue(0);
     setCLvalue(0);
    }
    else{
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
                                        <Input value={TC}
                                            onChange={(e) => setTC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (L):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Diffusion Coefficient (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DC}
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                             {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                             {selectCondition === "mass Transfer Coefficient" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Sherwood Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SH}
                                            onChange={(e) => setSH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (L):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Diffusion Coefficient (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DC}
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                             {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                             {selectCondition === "Characteristic Length" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Sherwood Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SH}
                                            onChange={(e) => setSH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mass Transfer Coefficient</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={TC}
                                            onChange={(e) => setTC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Diffusion Coefficient (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DC}
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                             {/* ////////////////////////////////////  sherwood number /////////////////////////////// */}
                             {selectCondition === "Diffusion Coefficient" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Sherwood Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SH}
                                            onChange={(e) => setSH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mass Transfer Coefficient</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={TC}
                                            onChange={(e) => setTC(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} />
                                    </Col>
                                </Row>

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
                                <div ref={divRef}>
                                <Example heading="step by step solution"
                                    title={<>Calculate the Sherwood Numbers for the given details.<br />
                                        Mass Transfer Coefficient (k) = 5 m/s<br />
                                        Characteristic Length (L) = 15 m<br />
                                        Diffusion Coefficient (D) = 10 m2/s<br /></>}
                                    step1={<>Solution <br /> Apply Formula : </>} step1heading={<>Sh = kl/D<br />
                                        Sh = 5*15/10</>} step1value="Sh = 7.5"
                                    step2="Sherwood Number (Sh) = 7.5" /></div>
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