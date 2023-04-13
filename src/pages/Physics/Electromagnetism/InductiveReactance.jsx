import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function InductiveReactance() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Inductance (L):');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [f, setf] = useState(null);
    const [ir, setir] = useState(null);
    const [ind, setind] = useState(null);
    const [F, setF] = useState(0);
    const [IR, setIR] = useState(0);
    const [IND, setIND] = useState(0);


    // ECcalculate
    const INDcalculate = () => {
        if (ir && f !== null) {
            const ind = (Math.round((ir/(6.28*f))*100)/100).toPrecision(6);
            setIND(ind);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const INDreset = () => {
        if (IND !== 0) {
            setf(0);
            setir(0);
            setind(0)
            setF(0);
            setIR(0);
            setIND(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // PDcalculate
    const Fcalculate = () => {
        if (ir && ind !== null) {
            const f = (Math.round((ir/(6.28*ind))*100)/100).toPrecision(6);
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
            setir(0);
            setind(0)
            setF(0);
            setIR(0);
            setIND(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // CAcalculate
    const IRcalculate = () => {
        if (ind && f !== null) {
            const ir = (Math.round((6.28*f*ind)*100)/100).toPrecision(6);
            setIR(ir);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const IRreset = () => {
        if (IR !== 0) {
            setf(0);
            setir(0);
            setind(0)
            setF(0);
            setIR(0);
            setIND(0);
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
                    <h2 className='text-center fw-bold'>Inductive Approach Calculator</h2>
                    <p>To find capacitive reactance, enter frequency & capacitance and hit calculate button using capacitive reactance calculator</p>
                    <div className='polygon-calculator-div '>
                        {/* dropdown */}
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value='Inductance (L):' className='value-dropdown' >Inductance </option>
                                    <option value="Frequency" className='value-dropdown'>Frequency</option>
                                    <option value='Inductive Reactance (XL):' className='value-dropdown' >Inductive Reactance</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {
                                selectCondition === "Inductance (L):" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Frequency </label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={f}
                                                onChange={(event) => setf(parseFloat(event.target.value))} text="HZ"/> </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Inductive Reactance (XL):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Input value={ir}
                                                onChange={(event) => setir(parseFloat(event.target.value))} text="ohm"/>  </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Inductance (L):</dt> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{IND.toString().substring(0, 7)} H</button></Col>
                                    </Row>

                                    <div className='text-center'>
                                        <ButtonA onClick={INDcalculate} text="Calaulate" />
                                        <ButtonA onClick={INDreset} text="Reset" />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>

                                </>
                            }
                            {selectCondition === "Frequency" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Inductance (L):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ind}
                                            onChange={(event) => setind(parseFloat(event.target.value))} text="H" /> 
                                             </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Inductive Reactance (XL):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ir}
                                            onChange={(event) => setir(parseFloat(event.target.value))} text="ohm"/>
                                 </Col>
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
                            {selectCondition === "Inductive Reactance (XL):" && <>  
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Inductance (L):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ind}
                                            onChange={(event) => setind(parseFloat(event.target.value))} text="H" />
                                              </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Frequency</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={f}
                                            onChange={(event) => setf(parseFloat(event.target.value))} text="HZ"/> 
                                           </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Inductive Reactance (XL):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{IR.toString().substring(0, 7)} ohm</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={IRcalculate} text="Calaulate" />
                                    <ButtonA onClick={IRreset} text="Reset" />
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
                                        Calculate the Inductive Reactance for the given details.<br />
                                        Frequency (f) = 25 Hz<br />
                                        Inductance (L) = 5 H<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading={<>  XL = 2πfL<br />
                                        XL = 2*3.14*25*5<br />
                                        XL = 6.28*125<br /></>}
                                    step1value=" XL = 785 ohm"
                                    step2="Inductive Reactance (XL) = 785 ohm" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        This advanced online Inductive Reactance Calculator is used to calculate and find the Inductive Reactance when signal frequency and inductance are known.<br/>
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                 <dt>Inductive Reactance:</dt>
                                XL = 2πfL
                                <dt>Frequency: </dt>
                                f = XL /2πL
                                <dt>Inductance: </dt>
                                L = XL /2πf
                                 <dt>Where,</dt>
                                XL = Inductive Reactance,
                                f = Frequency,
                                L = Inductance.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default InductiveReactance;