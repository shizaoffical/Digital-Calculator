import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Reference from '../../../components/Reference';
import { Link } from 'react-router-dom';

function CapacitanceCalculator() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Electrical Change');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [Q, setQ] = useState(null);
    const [V, setV] = useState(null);
    const [C, setC] = useState(null);
    const [EC, setEC] = useState(0);
    const [PD, setPD] = useState(0);
    const [CA, setCA] = useState(0);


    // ECcalculate
    const ECcalculate = () => {
        if(C && V !== null){
            const ec = C*V.toPrecision(6);
            setEC(ec);
        }
        else{
            setShowPopup(true);
        }
    }
    // ECreset
    const ECreset = () => {
        if(EC !== 0){
            setC(0);
            setV(0);
            setEC(0)
        }
        else{
            setShowPopup(true);
        }
    }
    // PDcalculate
    const PDcalculate = () => {
        if(C && Q !== null){
            const pd = Q / C.toPrecision(6);
            setPD(pd);
        }
        else{
            setShowPopup(true);
        }
    }
    // ECreset
    const PDreset = () => {
        if(EC !== 0){
            setC(0);
            setQ(0);
            setPD(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // CAcalculate
    const CAcalculate = () => {
        if(V&& Q !== null){
            const C = Q / V.toPrecision(6);
            setCA(C);
        }
        else{
            setShowPopup(true);
        }
    }
    // ECreset
    const CAreset = () => {
        if(CA !== 0){
            setV(0);
            setQ(0);
            setCA(0);
        }
        else{
            setShowPopup(true);
        }
    }
//    togglePopup
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
        documentTitle: <div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
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
                    <h2 className='text-center fw-bold'>Capacitiance calculate</h2>
                    <div className='polygon-calculator-div '>
                        {/* dropdown */}
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Electrical Change" className='value-dropdown'>Electrical Change</option>
                                    <option value='Potential Difference' className='value-dropdown' >Potential Difference</option>
                                    <option value='Capacitance' className='value-dropdown' >Capacitance</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {
                                selectCondition === "Electrical Change" && <>
                                  <div className='text-center'> <dt>Formula</dt> <span> Q = CV</span></div>
                                  <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Potential Difference (V):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={V}
                                        onChange={(event) => setV(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Capacitance (C):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={C}
                                        onChange={(event) => setC(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Electrical Charge (Q):</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{EC.toString().substring(0, 7)} q</button></Col>
                            </Row>
                        
                        <div className='text-center'>
                            <ButtonA onClick={ECcalculate} text="Calaulate" />
                            <ButtonA onClick={ECreset} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>

                                </>
                         }
                          { selectCondition === "Potential Difference" && <>
                          <div className='text-center'> <dt>Formula</dt> <span>V = Q / C</span></div>
                          <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Electrical Charge (Q):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={Q}
                                        onChange={(event) => setQ(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Capacitance (C):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={C}
                                        onChange={(event) => setC(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Potential Difference(v):</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{PD.toString().substring(0, 7)} v</button></Col>
                            </Row>
                        
                        <div className='text-center'>
                            <ButtonA onClick={PDcalculate} text="Calaulate" />
                            <ButtonA onClick={PDreset} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>
                        </> }
                        { selectCondition === "Capacitance" && <>
                        <div className='text-center'> <dt>Formula</dt> <span> C=Q / V </span></div>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Potential Difference (V):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={V}
                                        onChange={(event) => setV(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Electrical Change</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={Q}
                                        onChange={(event) => setQ(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Capacitance (C):</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{CA.toString().substring(0, 7)} c</button></Col>
                            </Row>
                        
                        <div className='text-center'>
                            <ButtonA onClick={CAcalculate} text="Calaulate" />
                            <ButtonA onClick={CAreset} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>
                        </> }
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        {
                            textShow &&
                            <div ref={divRef}>
                                <Example heading="Example"
                                    title={<>
                                        Calculate the Capacitance when electric charge and potential difference are known.<br />
                                        Electrical Charge (Q) = 25 C<br />
                                        Potential Difference (V) = 20 V<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading={<>C = Q/V<br />C= 25/20</>}
                                    step1value="C = 1.25F"
                                    step2=" Capacitance(C) =1.25 F" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        Capacitance refers to the ability of a capacitor to store energy in an electric field. This energy is stored by the use of an electronic component called capacitor. The Capacitance is denoted by the symbol 'C'. The charged amount is determined by the capacitance C and the voltage difference V applied across the capacitor. The capacitor contains a pair of plates, in which when a steady voltage is applied across a capacitor, a +Q charge is stored in one plate and - Q is stored on the opposite plate. The SI unit of capacitance is farad (F), where one farad is equal to one coulomb per volt.
                        The capacitance, "C", of a capacitor is defined as the ratio of the magnitude of the charge on either conductor to the potential difference between the conductor.  The capacitance is proportional to the area of its plates, whereas it is inversely proportional to the distance between the plates.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Capacitance :</dt>
                                C = Q/V
                                <dt>Electrical Charge :</dt>
                                Q = CV
                                <dt>Potential Difference :</dt>
                                V = Q/C
                                <dt>Where,</dt>
                                C = Capacitance,<br/>
                                Q = Electrical Charge,<br/>
                                V = Potential Difference<br/>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                    <Reference
                        step1={<> What is Capacitance?. (2020). Retrieved, from
                        <Link className='Reference-link'
                            to="https://www.fluke.com/en-us/learn/blog/electrical/what-is-capacitance"
                            target="_blank">fluke.com</Link>  </>}
                        step2={<> Capacitance | Definition, Formula, Unit, & Facts.<Link className='Reference-link'
                            to="https://www.britannica.com/science/capacitance"
                            target="_blank">Encyclopedia Britannica.</Link>  </>}
                    />
                </div>
            </Container>
        </div >

    )
}

export default CapacitanceCalculator;