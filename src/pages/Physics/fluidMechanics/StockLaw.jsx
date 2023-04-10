import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function StockLaw() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Acceleration of Gravity (g):');
    // main states
    const [SV, setSV] = useState(null);
    const [AG, setAG] = useState(null);
    const [DM, setDM] = useState(null);
    const [VM, setVM] = useState(null);
    const [PD, setPD] = useState(null);
    const [PA, setPA] = useState(null);
    // work states
    const [SVvalue, setSVvalue] = useState(0);
    const [AGvalue, setAGvalue] = useState(0);
    const [DMvalue, setDMvalue] = useState(0);
    const [VMvalue, setVMvalue] = useState(0);
    const [PDvalue, setPDvalue] = useState(0);
    const [PAvalue, setPAvalue] = useState(0
    );
    // sv VALUE
    const SVcalculator = () => {
        if(AG && PA && PD && DM && VM !== null){
        const SV = Math.round(((AG * PA * PA * (PD - DM)) / (18 * VM)) * 100) / 100;
        setSVvalue(SV.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function SVcalculatorReset() {
        if(AG && PA && PD && DM && VM !== 0){
        setAG(0)
       setSV(0)
       setPD(0);
       setPA(0);
       setDM(0);
       setVM(0);
       setAGvalue(0)
       setSVvalue(0)
       setPDvalue(0);
       setPAvalue(0);
       setDMvalue(0);
       setVMvalue(0);
    }
    else{
        setShowPopup(true);
    }
    }
    // AG VALUE
    const AGcalculator = () => {
        if(SV && PA && PD && DM && VM !== null){
        const AG = Math.round(((18 * VM * SV) / (PA * PA * (PD - DM))) * 100) / 100;
        setAGvalue(AG.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function AGcalculatorReset() {
        if(SV && PA && PD && DM && VM !== 0){
            setAG(0)
           setSV(0)
           setPD(0);
           setPA(0);
           setDM(0);
           setVM(0);
           setAGvalue(0)
           setSVvalue(0)
           setPDvalue(0);
           setPAvalue(0);
           setDMvalue(0);
           setVMvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // PA VALUE
    const PAcalculator = () => {
        if(AG && SV && PD && DM && VM !== null){
        const PA = Math.round((Math.sqrt((18 * VM * SV) / (AG * (PD - DM)))) * 100) / 100;
        setAGvalue(PA.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function PAcalculatorReset() {
        if(AG && SV && PD && DM && VM !== 0){
            setAG(0)
           setSV(0)
           setPD(0);
           setPA(0);
           setDM(0);
           setVM(0);
           setAGvalue(0)
           setSVvalue(0)
           setPDvalue(0);
           setPAvalue(0);
           setDMvalue(0);
           setVMvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // DM VALUE
    const DMcalculator = () => {
        if(AG && PA && PD && SV && VM !== 0){
        const DM = Math.round((PD - ((18 * VM * SV) / (AG * PA * PA))) * 100) / 100;
        setDMvalue(DM.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function DMcalculatorReset() {
        if(AG && PA && PD && SV && VM !== 0){
            setAG(0)
           setSV(0)
           setPD(0);
           setPA(0);
           setDM(0);
           setVM(0);
           setAGvalue(0)
           setSVvalue(0)
           setPDvalue(0);
           setPAvalue(0);
           setDMvalue(0);
           setVMvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // PD VALUE
    const PDcalculator = () => {
        if(AG && PA && SV && DM && VM !== null){
        const PD = Math.round((((18 * VM * SV) / (AG * PA * PA)) + (DM)) * 100) / 100;
        setPDvalue(PD.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function PDcalculatorReset() {
        if(AG && PA && SV && DM && VM !== 0){
            setAG(0)
           setSV(0)
           setPD(0);
           setPA(0);
           setDM(0);
           setVM(0);
           setAGvalue(0)
           setSVvalue(0)
           setPDvalue(0);
           setPAvalue(0);
           setDMvalue(0);
           setVMvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // VM VALUE
    const VMcalculator = () => {
        if(AG && PA && PD && DM && SV !== null){
        const VM = Math.round(((AG * PA * PA * (PD - DM)) / (18 * SV)) * 100) / 100;
        setVMvalue(VM.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function VMcalculatorReset() {
        if(AG && PA && PD && DM && SV !== 0){
            setAG(0)
           setSV(0)
           setPD(0);
           setPA(0);
           setDM(0);
           setVM(0);
           setAGvalue(0)
           setSVvalue(0)
           setPDvalue(0);
           setPAvalue(0);
           setDMvalue(0);
           setVMvalue(0);
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
                    <h2 className='text-center fw-bold'> Stock Law Calculator</h2>
                    <span>To calculate nusselt number enter values in given input box by using this nusselt number calculator.</span>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Acceleration of Gravity (g):">Acceleration of Gravity (g):</option>
                                    <option value="Particle Diameter (d):">Particle Diameter (d):</option>
                                    <option value="Density of Medium (ρm):">Density of Medium (ρm):</option>
                                    <option value="Particle Density (ρp):">Particle Density (ρp):</option>
                                    <option value="Viscosity of Medium (µ):">Viscosity of Medium (µ):</option>
                                    <option value="Fall or Settling Velocity (Vt):">Fall or Settling Velocity (Vt):</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  Acceleration of Gravity (g): /////////////////////////////// */}
                            {selectCondition === "Acceleration of Gravity (g):" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Particle Diameter (d):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PA}
                                            onChange={(e) => setPA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density of Medium (ρm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DM}
                                            onChange={(e) => setDM(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Particle Density (ρp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PD}
                                            onChange={(e) => setPD(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Viscosity of Medium (µ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={VM}
                                            onChange={(e) => setVM(e.target.value)} />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Fall or Settling Velocity (Vt):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SV}
                                            onChange={(e) => setSV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Acceleration of Gravity (g):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{AGvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={AGcalculator} />
                                    <ButtonA text="Reset" onClick={AGcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }

                                </div>
                            </>}
                            {/* //////////////////////////////////// Particle Diameter (d): /////////////////////////////// */}
                            {selectCondition === "Particle Diameter (d):" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Acceleration of Gravity (g):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={AG}
                                            onChange={(e) => setAG(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density of Medium (ρm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DM}
                                            onChange={(e) => setDM(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Particle Density (ρp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PD}
                                            onChange={(e) => setPD(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Viscosity of Medium (µ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={VM}
                                            onChange={(e) => setVM(e.target.value)} />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Fall or Settling Velocity (Vt):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SV}
                                            onChange={(e) => setSV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Particle Diameter (d):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PAvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PAcalculator} />
                                    <ButtonA text="Reset" onClick={PAcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }

                                </div>
                            </>}
                            {/* ////////////////////////////// Density of Medium (ρm): /////////////////////////////// */}
                            {selectCondition === "Density of Medium (ρm):" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Acceleration of Gravity (g):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={AG}
                                            onChange={(e) => setAG(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Particle Diameter (d):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PA}
                                            onChange={(e) => setPA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Particle Density (ρp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PD}
                                            onChange={(e) => setPD(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Viscosity of Medium (µ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={VM}
                                            onChange={(e) => setVM(e.target.value)} />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Fall or Settling Velocity (Vt):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SV}
                                            onChange={(e) => setSV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Density of Medium (ρm):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{DMvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={DMcalculator} />
                                    <ButtonA text="Reset" onClick={DMcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }

                                </div>
                            </>}
                            {/* //////////////////////////////////// Particle Diameter (d): /////////////////////////////// */}
                            {selectCondition === "Particle Density (ρp):" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Acceleration of Gravity (g):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={AG}
                                            onChange={(e) => setAG(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Particle Diameter (d):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PA}
                                            onChange={(e) => setPA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density of Medium (ρm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DM}
                                            onChange={(e) => setDM(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Viscosity of Medium (µ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={VM}
                                            onChange={(e) => setVM(e.target.value)} />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Fall or Settling Velocity (Vt):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SV}
                                            onChange={(e) => setSV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Particle Density (ρp):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PDvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PDcalculator} />
                                    <ButtonA text="Reset" onClick={PDcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }

                                </div>
                            </>}
                            {/* //////////////////////////////////// Viscosity of Medium (µ): /////////////////////////////// */}
                            {selectCondition === "Viscosity of Medium (µ):" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Acceleration of Gravity (g):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={AG}
                                            onChange={(e) => setAG(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Particle Diameter (d):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PA}
                                            onChange={(e) => setPA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density of Medium (ρm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DM}
                                            onChange={(e) => setDM(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Particle Density (ρp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PD}
                                            onChange={(e) => setPD(e.target.value)} />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Fall or Settling Velocity (Vt):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={SV}
                                            onChange={(e) => setSV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Viscosity of Medium (µ):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{VMvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={VMcalculator} />
                                    <ButtonA text="Reset" onClick={VMcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////////////////////////// Fall or Settling Velocity (Vt): ///////////////////////// */}
                            {selectCondition === "Fall or Settling Velocity (Vt):" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>nu = h * l / k</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Acceleration of Gravity (g):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={AG}
                                            onChange={(e) => setAG(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Particle Diameter (d):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PA}
                                            onChange={(e) => setPA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density of Medium (ρm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={DM}
                                            onChange={(e) => setDM(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Particle Density (ρp):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PD}
                                            onChange={(e) => setPD(e.target.value)} />
                                    </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Viscosity of Medium (µ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={VM}
                                            onChange={(e) => setVM(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>  Fall or Settling Velocity (Vt):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{SVvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={SVcalculator} />
                                    <ButtonA text="Reset" onClick={SVcalculatorReset} />
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
                                        title={<>
                                            Calculate the fall or settling velocity (Vt) for the given details through Stoke's Law formula.<br/>
                                            Acceleration of Gravity (g) = 25 m/s2<br/>
                                            Particle Diameter (d) = 15 m<br/>
                                            Density of Medium (ρm) = 5 kg/m4<br/>
                                            Particle Density (ρp) = 10 kg/m3<br/>
                                            Viscosity of Medium (μ) = 20 kg/m-s<br/>
                                        </>}
                                        step1="Solution"
                                        step1heading="Vt = gd2 (ρp - ρm)/18μ"
                                        step1value=" V t= 25*15 (10-5)/18*20"
                                        step2="Fall or Settling Velocity (Vt) = 78.13 m/s" />
                                </div>}
                        </div>

                    </div>
                    <div className='mt-2'>
                        Stoke's law states that at low velocities the frictional force on a spherical body moving through a fluid at constant velocity is equal to 6 π times the product of the velocity, the fluid viscosity, and the radius of the sphere.

                        In short, a sphere moving through a viscous fluid is directly proportional to the velocity of the sphere as well as the radius of the sphere, and the viscosity of the fluid.

                        Stoke's Law is defined as the basis of the falling - sphere viscometer. In the viscometer the fluid is stationary in a vertical glass tube. This online Stokes Law Calculator is useful in calculating various parameters of fluid in viscometer.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Fall or Settling Velocity : </dt>
                                Vt = gd2 (ρp - ρm)/18μ
                                <dt>Acceleration of Gravity :</dt>
                                g= 18 μ Vt /d2(ρp - ρm)
                                <dt>Particle Diameter :</dt>
                                d= √18 μ Vt /g (ρp - ρm)
                                <dt> Density of Medium : </dt>
                                ρm = ρp - 18 μ Vt/ d2
                                <dt>Particle Density : </dt>
                                ρp = 18 μ Vt /d2+ ρm
                                <dt>Viscosity of Medium : </dt>
                                μ = gd2( ρp - ρm)/18 Vt
                                <dt>Where, </dt>
                                Vt = Fall or Settling Velocity,
                                g = Acceleration of Gravity,
                                d = Particle Diameter,
                                ρm = Density of Medium,
                                ρp = Particle Density,
                                μ = Viscosity of Medium.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default StockLaw