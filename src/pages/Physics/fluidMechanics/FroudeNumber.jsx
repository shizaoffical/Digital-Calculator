import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function FroudeNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    
    const [showPopup, setShowPopup] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Froude Number');
    // main states 
    const [F, setF] = useState(null);
    const [V, setV] = useState(null);
    const [G, setG] = useState(null);
    const [HM, setHM] = useState(null);
    // states 
    const [FNvalue, setFNvalue] = useState(0);
    const [Vvalue, setVvalue] = useState(0);
    const [MDvalue, setMDvalue] = useState(0)
    const [AGvalue,setAGvalue] = useState(0)
    // FNcalculator
    const FNcalculator = () => {
        if(V && G && HM !== null){
        const FN = V / Math.sqrt(G * HM);
        setFNvalue(FN.toPrecision(6));
    }
    else {
      setShowPopup(true);
    }
    }
    function FNcalculatorReset() {
        if(V && G && HM !== 0){
           setF(0);
        setV(0);
        setG(0);
        setHM(0);
        setVvalue(0);
        setMDvalue(0);
        setAGvalue(0);
        setFNvalue(0) 
        }
        else{
            setShowPopup(true);
        }
    }
    // FNcalculator
    const Vcalculator = () => {
        if(F && G && HM !== null){
        const V = F * (Math.sqrt(G * HM));
        setVvalue(V.toPrecision(6));
    }
    else {
      setShowPopup(true);
    }
    }
    function VcalculatorReset() {
        if(F && G && HM !== 0){
            setF(0);
         setV(0);
         setG(0);
         setHM(0);
         setVvalue(0);
         setMDvalue(0);
         setAGvalue(0);
         setFNvalue(0) 
         }
         else{
             setShowPopup(true);
         }
    }
     // FNcalculator
     const MDcalculator = () => {
        if(V && G && F !== null){
        const MD= (V * V)/ (G * (F* F));
        setMDvalue(MD.toPrecision(6));
    }
    else {
      setShowPopup(true);
    }
    }
    function MDcalculatorReset() {
        if(V && G && F !== 0){
            setF(0);
         setV(0);
         setG(0);
         setHM(0);
         setVvalue(0);
         setMDvalue(0);
         setAGvalue(0);
         setFNvalue(0) 
         }
         else{
             setShowPopup(true);
         }
    }
     // FNcalculator
     const AGcalculator = () => {
        if(V && F && HM !== null){
        const AG= (V * V)/ (HM * (F* F));
        setAGvalue(AG.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function AGcalculatorReset() {
        if(V && F && HM !== 0){
            setF(0);
         setV(0);
         setG(0);
         setHM(0);
         setVvalue(0);
         setMDvalue(0);
         setAGvalue(0);
         setFNvalue(0) 
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
                    <h2 className='text-center fw-bold'> Froude Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Froude Number" className='value-dropdown'>Froude number</option>
                                    <option value='Flow Velocity' className='value-dropdown' >Flow Velocity</option>
                                    <option value='Mean Depth' className='value-dropdown' >Mean Depth</option>
                                    <option value='Accerlation of gravity' className='value-dropdown' >Accerlation of gravity</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  Froude Number /////////////////////////////// */}
                            {
                                selectCondition === "Froude Number" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Flow Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={V}
                                                onChange={(e) => setV(e.target.value)} text="m/s"/>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Acceleration of Gravity (g):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={G}
                                                onChange={(e) => setG(e.target.value)} text="m/s2"/>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Mean Depth (hm):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={HM}
                                                onChange={(e) => setHM(e.target.value)} text="ft"/>
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-1">
                                        <Col md={6} sm={12} xs={12}><dt>Frounder Number</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{FNvalue.toString().substring(0, 4)}m</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={FNcalculator} />
                                        <ButtonA text="Reset" onClick={FNcalculatorReset} />
                                        {showPopup &&<Popup onClick={togglePopup} /> }

                                    </div>
                                </>}

                            {/* ////////////////////////////////////  Froude Number /////////////////////////////// */}
                            {
                                selectCondition === "Flow Velocity" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Acceleration of Gravity (g):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={G}
                                                onChange={(e) => setG(e.target.value)} />m/s
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Mean Depth (hm):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={HM}
                                                onChange={(e) => setHM(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Froude Number (F):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={F}
                                                onChange={(e) => setF(e.target.value)} />m
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-1">
                                        <Col md={6} sm={12} xs={12}><dt>Flow Velocity (V)</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{Vvalue.toString().substring(0, 5)}m/s</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={Vcalculator} />
                                        <ButtonA text="Reset" onClick={VcalculatorReset} />
                                        {showPopup &&<Popup onClick={togglePopup} /> }
                                    </div>
                                </>}
                            {/* //////////////////////////////////// Mean Depth /////////////////////////////// */}
                            {
                                selectCondition === "Mean Depth" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Flow Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={V}
                                             onChange={(e) => setV(e.target.value)} text="m/s"/>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Acceleration of Gravity (g):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={G}
                                            onChange={(e) => setG(e.target.value)}  text="m/s2"/>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Froude Number (F):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={F}
                                           onChange={(e) => setF(e.target.value) }  text="ft" />
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-1">
                                        <Col md={6} sm={12} xs={12}><dt>Mean Depth (hm)</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{MDvalue.toString().substring(0, 5)}ft</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={MDcalculator} />
                                        <ButtonA text="Reset" onClick={MDcalculatorReset} />
                                        {showPopup &&<Popup onClick={togglePopup} /> }
                                    </div>
                                </>}
                            {/* ////////////////////////////////////  Froude Number /////////////////////////////// */}
                            {
                                selectCondition === "Accerlation of gravity" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Flow Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={V}
                                            onChange={(e) => setV(e.target.value)}  text="m/s"/>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Mean Depth (hm):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={HM}
                                            onChange={(e) => setHM(e.target.value) } text="ft"/>
                                        </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Froude Number (F):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <Input value={F}
                                             onChange={(e) => setF(e.target.value)} text="m"/>
                                        </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-1">
                                        <Col md={6} sm={12} xs={12}><dt>Acceleration of Gravity (g)</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{AGvalue.toString().substring(0,5)}ms</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={AGcalculator} />
                                        <ButtonA text="Reset" onClick={AGcalculatorReset} />
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
                            {
                                textShow &&
                                <div ref={divRef}>
                                <Example heading="Flow Rate or Discharge"
                                    title={<>Calculate the Froude Number for the given details.<br />
                                        Flow Velocity (V) = 20 m/s<br />Acceleration of Gravity (g) = 15 m/s2<br />
                                        Mean Depth (hm) = 10 m</>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading={<>F = V/ √ ghm<br />F = 20/√15*10
                                        <br />F = 1.63</>}
                                    step2="Froude Number (F) = 1.63" /></div>
                            }</div>

                    </div>
                    <div className='mt-3'>
                        Froude Number refers to the dimensionless number which is a ratio of a characteristic velocity to a gravitational wave velocity. In short, the Froude number is defined as the ratio of a body's inertia to gravitational forces. It is expressed by the symbol 'Fr'. The Froude Number is used in hydrodynamics to indicate how well a particular model works in relation to a real system<br />
                        This Online Advanced Froude Number Calculator is useful in calculating the Froude Number by putting the values Flow Velocity (V), Acceleration of Gravity (g) and Mean Depth (hm) and apply the formula.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Froude Number :<br /> <span>F = V/√ ghm</span></dt>
                                <dt>Flow Velocity :<br /><span>V = F√ ghm</span> </dt>
                                <dt>Mean Depth :<br /> <span>hm= V2/gF2</span> </dt>
                                <dt>Acceleration of Gravity :<br /><span>g = V2/ hmF2</span> </dt>
                                <dt>Where, </dt>
                                F = Froude Number,<br />
                                V = Flow Velocity,<br />
                                g = Acceleration of Gravity,<br />
                                hm = Mean Depth.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default FroudeNumber