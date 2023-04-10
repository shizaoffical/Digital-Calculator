import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function PecletNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('peclet number');

    const [PN, setPN] = useState(null);
    const [V, setV] = useState(null);
    const [D, setD] = useState(null);
    const [CL, setCL] = useState(null);
    const [K, setK] = useState(null);
    const [HC, setHC] = useState(null);

    // main states
    const [PNvalue, setPNvalue] = useState(0)
    const [Vvalue, setVvalue] = useState(0)
    const [Dvalue, setDvalue] = useState(0)
    const [CLvalue, setCLvalue] = useState(0)
    const [Kvalue, setKvalue] = useState(0)
    const [HCvalue, setHCvalue] = useState(0)

    // functionality
    const PNcalculator = () => {
        if( V && D && HC && CL && K !== null ){
        const PN = V * D * HC * CL / K;
        setPNvalue(PN.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function PNcalculatorReset() {
        if( V && D && HC && CL && K !== 0 ){
        setPNvalue(0);
        setV(0);
        setD(0);
        setCL(0);
        setK(0);
        setHC(0);
        setPN(0);
        setCLvalue(0);
        setDvalue(0);
        setHCvalue(0);
        setVvalue(0);
        setKvalue(0);
    }
    else{
        setShowPopup(true);
    }
    }
    // VELOCITY
    const Vcalculator = () => {
        if( PN&& D && HC && CL && K !== null ){
        const V = PN * K / D * HC / CL;
        setVvalue(V.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function VcalculatorReset() {
        if( PN && D && HC && CL && K !== 0 ){
            setPNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setK(0);
            setHC(0);
            setPN(0);
            setCLvalue(0);
            setDvalue(0);
            setHCvalue(0);
            setVvalue(0);
            setKvalue(0);
        }
        else{
            setShowPopup(true);
        }
       
    }
    // DENSITY
    const Dcalculator = () => {
        if( V && PN && HC && CL && K !== null ){
        const D = PN * K / V * HC * CL;
        setDvalue(D.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function DcalculatorReset() {
        if( V && PN && HC && CL && K !== 0 ){
            setPNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setK(0);
            setHC(0);
            setPN(0);
            setCLvalue(0);
            setDvalue(0);
            setHCvalue(0);
            setVvalue(0);
            setKvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // heat capacity
    // DENSITY
    const HCcalculator = () => {
        if( V && D && PN && CL && K !== null ){
        const HC = PN * K / V * D * CL;
        setHCvalue(HC.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function HCcalculatorReset() {
        if( V && D && PN && CL && K !== 0 ){
            setPNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setK(0);
            setHC(0);
            setPN(0);
            setCLvalue(0);
            setDvalue(0);
            setHCvalue(0);
            setVvalue(0);
            setKvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // CHARACTER LENGTH
    const CLcalculator = () => {
        if( V && D && HC && PN && K !== null){
        const CL = PN * K / V * D * HC;
        setCLvalue(CL.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function CLcalculatorReset() {
        if( V && D && HC && PN && K !== 0 ){
            setPNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setK(0);
            setHC(0);
            setPN(0);
            setCLvalue(0);
            setDvalue(0);
            setHCvalue(0);
            setVvalue(0);
            setKvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // CHARACTER LENGTH
    const kcalculator = () => {
        if( V && D && HC && CL && PN !== null ){
        const K = V * D * HC * CL / PN;
        setKvalue(K.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function kcalculatorReset() {
        if( V && D && HC && CL && PN !== 0 ){
            setPNvalue(0);
            setV(0);
            setD(0);
            setCL(0);
            setK(0);
            setHC(0);
            setPN(0);
            setCLvalue(0);
            setDvalue(0);
            setHCvalue(0);
            setVvalue(0);
            setKvalue(0);
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
                    <h2 className='text-center fw-bold'> Peclet Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value='peclet number' className='value-dropdown' >peclet number</option>
                                    <option value="density" className='value-dropdown'>density</option>
                                    <option value='velocity' className='value-dropdown' >velocity</option>
                                    <option value='heat capacity' className='value-dropdown' >heat capacity</option>
                                    <option value='character length' className='value-dropdown' >character length</option>
                                    <option value='thermal conductivity' className='value-dropdown' >thermal conductivity</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  peclet number /////////////////////////////// */}
                            {selectCondition === "peclet number" && <>
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
                                            onChange={(e) => setD(e.target.value)} text="kg/m3" />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Heat Capacity (Cp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HC}
                                            onChange={(e) => setHC(e.target.value)} text="J/kg-K"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Conductivity (k):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={K}
                                            onChange={(e) => setK(e.target.value)} text="W/m-K"/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>peclet number</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PNvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PNcalculator} />
                                    <ButtonA text="Reset" onClick={PNcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* /////////////////////////////////// VELOCITY  /////////////////////// */}
                            {selectCondition === "velocity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Peclet Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PN}
                                            onChange={(e) => setPN(e.target.value)} />
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
                                        <label>Heat Capacity (Cp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HC}
                                            onChange={(e) => setHC(e.target.value)} text="J/kg-K"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Conductivity (k):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={K}
                                            onChange={(e) => setK(e.target.value)} text="W/m-K"/>
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
                                        <label>Peclet Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PN}
                                            onChange={(e) => setPN(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="mm/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Heat Capacity (Cp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HC}
                                            onChange={(e) => setHC(e.target.value)} text="J/kg-K"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Conductivity (k):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={K}
                                            onChange={(e) => setK(e.target.value)} text="W/m-K"/>
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
                            {selectCondition === "heat capacity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Peclet Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PN}
                                            onChange={(e) => setPN(e.target.value)}  />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)}  text="m/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={D}
                                            onChange={(e) => setD(e.target.value)}  text="kg/m3"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)} text="m" />
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Conductivity (k):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={K}
                                            onChange={(e) => setK(e.target.value)}  text="W/m-K"/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Heat Capacity (Cp):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{HCvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={HCcalculator} />
                                    <ButtonA text="Reset" onClick={HCcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////  CHARACTER LENGTH //////////////// */}
                            {selectCondition === "character length" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Peclet Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PN}
                                            onChange={(e) => setPN(e.target.value)} />
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
                                        <label>Heat Capacity (Cp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HC}
                                            onChange={(e) => setHC(e.target.value)} text="J/kg-K"/>
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Conductivity (k):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={K}
                                            onChange={(e) => setK(e.target.value)} text="W/m-K"/>
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
                            {/* ////////////  THERMAL CONDUVTIVITY //////////////// */}
                            {selectCondition === "thermal conductivity" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Peclet Number :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PN}
                                            onChange={(e) => setPN(e.target.value)}/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Velocity :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)}  text="m/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={D}
                                            onChange={(e) => setD(e.target.value)} text="kg/m3" />
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Heat Capacity (Cp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HC}
                                            onChange={(e) => setHC(e.target.value)} text="J/kg-K" />
                                    </Col>
                                </Row>  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Characteristic Length (D):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={CL}
                                            onChange={(e) => setCL(e.target.value)}  text="m"/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Thermal Conductivity (k):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Kvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={kcalculator} />
                                    <ButtonA text="Reset" onClick={kcalculatorReset} />
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
                                        title={<>Calculate the Peclet Number for the given details.<br />
                                            Velocity (v) = 5 m/s<br />Density (ρ) = 5 kg/m3<br />Heat Capacity (cp) = 10 J/kg-K
                                            <br />Characteristic Length (D) = 25 m<br />Thermal Conductivity (k) = 20 W/m-K</>}
                                        step1={<>Solution : <br /> Apply Formula</>} step1heading="Pe = vρcp D/k"
                                        step2="Peclet Number (Pe) = 937.5" /></div>
                            }
                        </div>

                    </div>
                    <div className='mt-1'>
                        Peclet number is a measure of the relative importance of advection to diffusion. It is named after the French physicist Jean Claude Eugene Peclet. In other words, Peclet Number is termed as a dimensionless group that is used to determine the chemical reaction similitude for the scale-up from pilot-plant data to commercial-sized units.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Peclet Number :<br /> <span>Pe = vρcp D/k</span></dt>
                                <dt>Velocity :<br /><span>v= Pek/ρcpD</span> </dt>
                                <dt>Density :<br /> <span>ρ = Pek/vcpD</span> </dt>
                                <dt>Heat Capacity :<br /> <span>cp = Pek/vρD</span> </dt>
                                <dt>Characteristic Length :<br /> <span>D = Pek/vρcp</span> </dt>
                                <dt>Thermal Conductivity<br /> <span>k =vρcpD/Pe</span> </dt>
                                <dt>Where, </dt>
                                Pe = Peclet Number,<br />
                                v = Velocity,<br />
                                ρ = Density,<br />
                                cp = Heat Capacity,<br />
                                D = Characteristic Length,<br />
                                k = Thermal Conductivity<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default PecletNumber