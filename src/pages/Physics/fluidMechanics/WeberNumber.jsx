import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function WeberNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('weber number');

    const [WN, setWN] = useState(null);
    const [V, setV] = useState(null);
    const [D, setD] = useState(null);
    const [CL, setCL] = useState(null);
    const [ST, setST] = useState(null);

    // main states
    const [WNvalue, setWNvalue] = useState(0)
    const [Vvalue, setVvalue] = useState(0)
    const [Dvalue, setDvalue] = useState(0)
    const [CLvalue, setCLvalue] = useState(0)
    const [STvalue, setSTvalue] = useState(0)

    // functionality
    const WNcalculator = () => {
        if(D && V && CL && ST !== null){
        const WN = Math.round(((D * V * V * CL) / ST) * 100) / 100;
        setWNvalue(WN.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function WNcalculatorReset() {
        if(D && V && CL && ST !== 0){
        setWNvalue(0);
        setV(0);
        setD(0);
        setCL(0);
        setST(0);
        setWN(0);
        setCLvalue(0);
        setDvalue(0);
        setSTvalue(0);
        setVvalue(0);
    }
    else{
        setShowPopup(true);
    }
    }
    // VELOCITY
    const Vcalculator = () => {
        if(D && WN && CL && ST !== null){
        const V = Math.round((Math.sqrt((WN * ST) / (D * CL))) * 100) / 100;
        setVvalue(V.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function VcalculatorReset() {
        if(D && WN && CL && ST !== 0){
            setWNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setST(0);
            setWN(0);
            setCLvalue(0);
            setDvalue(0);
            setSTvalue(0);
            setVvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // DENSITY
    const Dcalculator = () => {
        if(WN && V && CL && ST !== null){
        const D = Math.round(((WN * ST) / (V * V * CL)) * 100) / 100;
        setDvalue(D.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function DcalculatorReset() {
        if(WN && V && CL && ST !== 0){
            setWNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setST(0);
            setWN(0);
            setCLvalue(0);
            setDvalue(0);
            setSTvalue(0);
            setVvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // heat capacity
    // DENSITY
    const STcalculator = () => {
        if(D && V && CL && WN !== null){
        const ST = Math.round(((D * V * V * CL) / WN) * 100) / 100;
        setSTvalue(ST.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function STcalculatorReset() {
        if(D && V && CL && WN !== 0){
            setWNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setST(0);
            setWN(0);
            setCLvalue(0);
            setDvalue(0);
            setSTvalue(0);
            setVvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // CHARACTER LENGTH
    const CLcalculator = () => {
        if(D && V && WN && ST !== 0){
        const CL = Math.round(((WN * ST) / (D * V * V)) * 100) / 100;
        setCLvalue(CL.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function CLcalculatorReset() {
        if(D && V && WN && ST !== 0){
            setWNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setST(0);
            setWN(0);
            setCLvalue(0);
            setDvalue(0);
            setSTvalue(0);
            setVvalue(0);
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
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density (p):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={D}
                                            onChange={(e) => setD(e.target.value)} text="kg/m3"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={ST}
                                            onChange={(e) => setST(e.target.value)} text="N/m"/>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* /////////////////////////////////// VELOCITY  /////////////////////// */}
                            {selectCondition === "velocity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density (p):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={D}
                                            onChange={(e) => setD(e.target.value)} text="kg/m3"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={ST}
                                            onChange={(e) => setST(e.target.value)} text="N/m"/>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////////////  Density   /////////////////// */}
                            {selectCondition === "density" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={ST}
                                            onChange={(e) => setST(e.target.value)} text="N/m"/>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////  heat capacity //////////////// */}
                            {selectCondition === "Surface Tension" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={D}
                                            onChange={(e) => setD(e.target.value)} text="kg/m3"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////  CHARACTER LENGTH //////////////// */}
                            {selectCondition === "character length" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Weber Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={WN}
                                            onChange={(e) => setWN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m/s" />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={D}
                                            onChange={(e) => setD(e.target.value)} text="kg/m3"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Surface Tension (σ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={ST}
                                            onChange={(e) => setST(e.target.value)} text="W/m-K"/>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }
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
                                        title={<>Calculate the Weber Number for the given details.<br />
                                            Density (ρ) = 5 kg/m3<br />
                                            Velocity (v) = 10 m/s<br />
                                            Characteristic Length (L) = 15 m<br />
                                            Surface Tension (σ) = 20 N/m<br /></>}
                                        step1={<>Solution : <br /> Apply Formula</>} step1heading="We = ρv2L/σ"
                                        step2="Weber Number (We) = 375" /></div>
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
                                We = Weber Number,<br />
                                ρ = Density,<br />
                                v = Velocity,<br />
                                L = Characteristic Length,<br />
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