import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Example from '../../../components/Example';
import Span from '../../../components/Span';

function OhmLaw() {
    const [show, setShow] = useState(false);
    const divRef = useRef(null);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [PA, setPA] = useState(null);
    const [VA, setVA] = useState(null);
    const [RA, setRA] = useState(null);
    const [PB, setPB] = useState(null);
    const [VB, setVB] = useState(null);
    const [RB, setRB] = useState(null);
    const [C1, setC1] = useState(0)
    const [C2, setC2] = useState(0)
    const [C3, setC3] = useState(0)

    const calculate = () => {
        console.log("abc")
        if (PA && RA && VA && PB && RB && VB !== null) {
            const c1 = (Math.round(((PA/VA))*1000)/1000).toPrecision(6);
            setC1(c1);
            const c2 = (Math.round((Math.sqrt(PB/RA))*1000)/1000).toPrecision(6);
            setC2(c2);
            const c3 = (Math.round(((VB/RB))*1000)/1000).toPrecision(6);
            setC3(c3);
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (C1 && C2 && C3 !== 0) {
           setC1(0);
           setC2(0);
           setC3(0)
           setPA(0)
           setRA(0)
           setVA(0)
           setPB(0)
           setRB(0)
           setVB(0)
        }
        else { setShowPopup(true); }
    };
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: <div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
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
                    <h2 className='text-center fw-bold'>Ohms Law Current Calculator</h2>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Power:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={PA}
                                        onChange={(event) => setPA(parseFloat(event.target.value))} /> 
                                        <Span text="w"/> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Voltage:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={VA}
                                        onChange={(event) => setVA(parseFloat(event.target.value))} />
                                         <Span text="v"/>  </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Current:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{C1.toString().substring(0, 9)} a</button></Col>
                            </Row>
                            {/* current */}
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Power:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={PB}
                                        onChange={(event) => setPB(parseFloat(event.target.value))} />
                                         <Span text="w"/>  </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Resisance:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={RA}
                                        onChange={(event) => setRA(parseFloat(event.target.value))} />
                                         <Span text="ohm"/>  </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Current:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{C2.toString().substring(0, 9)} a</button></Col>
                            </Row>
                            {/* current */}
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Voltage:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={VB}
                                        onChange={(event) => setVB(parseFloat(event.target.value))} /> 
                                         <Span text="v"/>  </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Resisance:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={RB}
                                        onChange={(event) => setRB(parseFloat(event.target.value))} /> 
                                         <Span text="ohm"/>  </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Current:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{C3.toString().substring(0, 9)} w</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
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
                                        Calculate the Electric Current as per the Ohms law for the given power and voltage.<br />
                                        Power (P) = 25 W<br />
                                        Voltage (E) = 20 V<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading="I = P/E"
                                    step1value="I = 25/20"
                                    step2=" I = 1.25 A" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        Ohms Law states that the current passing or flowing through the conductor between two points is directly proportional to the potential difference that is applied across the two points. The electric current on the other hand is inversely proportional to the resistance between the points. As the resistance in a circuit increases, the current generated in the circuit decreases.<br/>
                        The advanced online Ohms Law Current Calculator is used to calculate the electric current between the points flowing through a given conductor in various forms. Ohm's law can be used to solve simple problems with electrical circuits of current.<br/>
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Calculate Current with Power and Voltage :</dt>
                                I = P/E
                                <dt> Calculate Current with Power and Resistance :</dt>
                                I = √P/R
                                <dt>Calculate Current with Voltage and Resistance : </dt>
                                I = E/R
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default OhmLaw;