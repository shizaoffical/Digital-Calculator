import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function CapacitiveCalculator() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Capacitance Reactance');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [f, setf] = useState(null);
    const [ca, setca] = useState(null);
    const [cr, setcr] = useState(null);
    const [F, setF] = useState(0);
    const [CA, setCA] = useState(0);
    const [CR, setCR] = useState(0);


    // ECcalculate
    const CRcalculate = () => {
        if (ca && f !== null) {
            const cr =(Math.round((1/(6.28*f*ca))*100)/100).toPrecision(6);
            setCR(cr);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const CRreset = () => {
        if (CR !== 0) {
            setf(0);
            setca(0);
            setCR(0);
            setcr(0);
            setF(0);
            setCA(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // PDcalculate
    const Fcalculate = () => {
        if (cr && ca !== null) {
            const f =(Math.round((1/(6.28*cr*ca))*100)/100).toPrecision(6);
            setF(f);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const Freset = () => {
        if (F !== 0) {
            setf(0);
            setca(0);
            setCR(0);
            setcr(0);
            setF(0);
            setCA(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // CAcalculate
    const CAcalculate = () => {
        if (cr && f !== null) {
            const C = (Math.round((1/(6.28*f*cr))*100)/100).toPrecision(6);
            setCA(C);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const CAreset = () => {
        if (CA !== 0) {
            setf(0);
            setca(0);
            setCR(0);
            setcr(0);
            setF(0);
            setCA(0);
        }
        else {
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
                    <h2 className='text-center fw-bold'>Capacitive Reactance Calculator</h2>
                    <p>To find capacitive reactance, enter frequency & capacitance and hit calculate button using capacitive reactance calculator</p>
                    <div className='polygon-calculator-div '>
                        {/* dropdown */}
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >      <option value='Capacitance Reactance' className='value-dropdown' >Capacitance Reactance</option>
                                    <option value="Frequency" className='value-dropdown'>Frequency</option>
                                    <option value='Capacitance' className='value-dropdown' >Capacitance</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {
                                selectCondition === "Capacitance Reactance" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Frequency </label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={f}
                                                onChange={(event) => setf(parseFloat(event.target.value))} /> </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Capacitance (C):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={ca}
                                                onChange={(event) => setca(parseFloat(event.target.value))} /> </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Capacitance Reactance</dt> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{CR.toString().substring(0, 7)} ohm</button></Col>
                                    </Row>

                                    <div className='text-center'>
                                        <ButtonA onClick={CRcalculate} text="Calaulate" />
                                        <ButtonA onClick={CRreset} text="Reset" />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>

                                </>
                            }
                            {selectCondition === "Frequency" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitive Reactance</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={cr}
                                            onChange={(event) => setcr(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Frequency</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{F.toString().substring(0, 7)} Hz</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={Fcalculate} text="Calaulate" />
                                    <ButtonA onClick={Freset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Capacitance" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitive Reactance</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={cr}
                                            onChange={(event) => setcr(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Frequency</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={f}
                                            onChange={(event) => setf(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Capacitance (C):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{CA.toString().substring(0, 7)} h</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={CAcalculate} text="Calaulate" />
                                    <ButtonA onClick={CAreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
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
                                        Calculate the Capacitive Reactance for the given details.<br/>
                                        Frequency (f) = 100 Hz<br />
                                        Capacitance(C) = 50 H<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading={<>  Xc = 1/2πfC<br />
                                        Xc = 1/6.28*5000<br />
                                        Xc = 1/31400<br /></>}
                                    step1value="  Xc = 3.1847 ohm"
                                    step2="  Capacitive Reactance Xc = 3.1847 ohm" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        Capacitive Reactance refers to the opposition of capacitance to alternating current which is equal to the reciprocal of the product of the angular frequency of the current times of the capacitance. The Capacitive Reactance is denoted by the symbol 'Xc'. The relationship of capacitive reactance to resistance is because capacitive reactance is the resistance of the capacitor.

                        Current passing through any two parallel transmission line due to the dielectric property of conductor then the capacitance effect is generated between them is called as capacitance
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                               <dt> Capacitive Reactance: </dt>
                                Xc = 1/2π fC
                                <dt> Where,</dt> 
                                XC = Capacitive Reactance,
                                f = Frequency,
                                C = Capacitance.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default CapacitiveCalculator;