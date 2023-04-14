import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function MachNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Mach Number (M):');

    // main
    const [M, setM] = useState(null);
    const [A, setA] = useState(null);
    const [V, setV] = useState(null);

    // main states
    const [Vvalue, setVvalue] = useState(0)
    const [Avalue, setAvalue] = useState(0)
    const [Mvalue, setMvalue] = useState(0)
    // flowrate
     const Mcalculator = () => {
        if(V && A !== null){
        const m =  V / A;
        setMvalue(m.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
     }
     function McalculatorReset() {
        if(V && A !== 0){
        setV(0);
        setA(0);
        setVvalue(0);
        setAvalue(0);
        setMvalue(0)
        setM(0);
    }
    else{
        setShowPopup(true);
    }
     }
    const Acalculator = ()=> {
        if(V && M !== null){
        const a = V / M;
        setAvalue(a.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function AcalculatorReset() {
        if(V && M !== 0){
            setV(0);
            setA(0);
            setVvalue(0);
            setAvalue(0);
            setMvalue(0)
            setM(0);
        }
        else{
            setShowPopup(true);
        }
     }
     const Vcalculator = ()=> {
        if(V && M !== null){
        const v = M * A;
        setVvalue(v.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function VcalculatorReset() {
        if(M && A !== 0){
            setV(0);
            setA(0);
            setVvalue(0);
            setAvalue(0);
            setMvalue(0)
            setM(0);
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
                    <h2 className='text-center fw-bold'> Mach Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Mach Number (M):" className='value-dropdown'>Mach Number (M): </option>
                                    <option value='Speed of Sound (a):' className='value-dropdown' >Speed of Sound (a):</option>
                                    <option value='Object Speed (v):' className='value-dropdown' >Object Speed (v):</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Mach Number (M):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Object Speed (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Speed of Sound (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Mach Number (M):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Mvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Mcalculator} />
                                    <ButtonA text="Reset" onClick={McalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}

                            {/* ////////////////////////////////////  Speed of Sound (a): /////////////////////////////// */}
                            {selectCondition === "Speed of Sound (a):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Object Speed (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mach Number (M):</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                        <Input value={M}
                                            onChange={(e) => setM(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Speed of Sound (a):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator} />
                                    <ButtonA text="Reset" onClick={AcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////////////////////////////  Object Speed (v): /////////////////////////////// */}
                            {selectCondition === "Object Speed (v):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Speed of Sound (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mach Number (M)</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={M}
                                            onChange={(e) => setM(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Object Speed (v):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Vcalculator} />
                                    <ButtonA text="Reset" onClick={VcalculatorReset} />
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
                                <Example heading="step by step solution"
                                    title={<>Calculate the Match Number for the given details.<br />
                                        Object Speed (v) = 25 m/s<br />Speed of Sound (a) = 20 m/s<br /></>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="Q = A*v"
                                    step1value={<>M = v/a<br />M = 25/20<br />M = 1.25</>}
                                    step2="Mach Number (M) = 1.25" 
                                    /></div>
                            }</div>

                    </div>
                    <div className='mt-2'>
                        Mach Number is a dimensionless value that is measured as a ratio of the speed of an object to the speed of sound in the surrounding area. The Mach number is denoted by the symbol 'M'. The Mach number comes after the unit i.e. the second Mach number is "Mach 2" instead of "2 Mach" or Machs.<br />

                        Mach Number is commonly used to represent the speed of an object when it is traveling close to or above the speed of sound. Mach number is used both with objects that travel at high speed in a fluid, and with high-speed fluid flows inside channels such as nozzles, diffusers or wind tunnels.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Mach Number :<br /> <span>M = v/a</span></dt>
                                <dt>Object Speed :<br /><span>v = M*a   </span> </dt>
                                <dt>Speed of Sound :<br /> <span>a = v/M</span> </dt>
                                <dt>Where, </dt>
                                M = Mach Number,<br/>
                                v = Object Speed,<br/>
                                a = Speed of Sound.<br/>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default MachNumber