import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';

function EnergyStorage() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Potential Difference (V):');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [V, setV] = useState(null);
    const [Q, setQ] = useState(null);
    const [U, setU] = useState(null);
    const [PD, setPD] = useState(0);
    const [EC, setEC] = useState(0);
    const [ES, setES] = useState(0);

    // ECcalculate
    const PDcalculate = () => {
        if (U && Q !== null) {
            const pd = (Math.round(((2*U)/Q)*100)/100).toPrecision(6);
            setPD(pd);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const PDreset = () => {
        if (PD !== 0) {
            setU(0);
            setQ(0);
            setPD(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // PDcalculate
    const ECalculate = () => {
        if (V && U !== null) {
            const ec = (Math.round(((2*U)/V)*100)/100).toPrecision(6);
            setEC(ec);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const ECeset = () => {
        if (EC !== 0) {
            setV(0);
            setU(0);
            setEC(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // CAcalculate
    const EScalculate = () => {
        if (V && Q !== null) {
            const es = (Math.round(((V*Q)/2)*100)/100).toPrecision(6);
            setES(es);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const ESreset = () => {
        if (ES !== 0) {
            setV(0);
            setQ(0);
            setES(0);
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
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >      <option value='Potential Difference (V):' className='value-dropdown' >Potential Difference</option>
                                    <option value="Electrical Charge (Q):" className='value-dropdown'>Electrical Charge </option>
                                    <option value='Energy Storage (U:)' className='value-dropdown' >Energy Storage </option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {
                                selectCondition === "Potential Difference (V):" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Energy Storage (U:) </label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <input type="number" value={U}
                                                onChange={(event) => setU(parseFloat(event.target.value))} /> 
                                                <span className="ps-2 ">j</span> </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Electrical Charge (Q):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <input type="number" value={Q}
                                                onChange={(event) => setQ(parseFloat(event.target.value))} /> 
                                                <span className="ps-2 ">c</span></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Potential Difference (V):</dt> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{PD.toString().substring(0, 7)}f</button></Col>
                                    </Row>

                                    <div className='text-center'>
                                        <ButtonA onClick={PDcalculate} text="Calaulate" />
                                        <ButtonA onClick={PDreset} text="Reset" />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>

                                </>
                            }
                            {selectCondition === "Electrical Charge (Q):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Potential Difference (V):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={V}
                                            onChange={(event) => setV(parseFloat(event.target.value))} />
                                              <span className="ps-2 ">f</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Energy Storage (U:)</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={U}
                                            onChange={(event) => setU(parseFloat(event.target.value))} /> 
                                              <span className="ps-2 ">j</span></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Electrical Charge (Q):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{EC.toString().substring(0, 7)}c</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={ECalculate} text="Calaulate" />
                                    <ButtonA onClick={ECeset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Energy Storage (U:)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Potential Difference (V):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={V}
                                            onChange={(event) => setV(parseFloat(event.target.value))} /> 
                                              <span className="ps-2 ">f</span></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Electrical Charge (Q):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={Q}
                                            onChange={(event) => setQ(parseFloat(event.target.value))} /> 
                                             <span className="ps-2 ">j</span></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Energy Storage (U:)</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{ES.toString().substring(0, 7)}j</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={EScalculate} text="Calaulate" />
                                    <ButtonA onClick={ESreset} text="Reset" />
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
                                        Calculate the Energy Storage for the given details.<br />
                                        Potential Difference (V) = 5 F<br />
                                        Electrical Charge (Q) = 10 C<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading={<>    U = QV/2<br />
                                        U = 10*5 /2<br />
                                        U = 50/2<br /></>}
                                    step1value=" U =25"
                                    step2="   Energy Storage (U) = 25 J " />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        This advanced online Energy Storage Calculator is used to calculate energy that is stored. The energy storage can be calculated by applying the formulas and putting the respective values.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                               <dt> Energy Storage : </dt>
                                U = QV/2
                                 <dt>Potential Difference :</dt>
                                V = QU/2
                                 <dt>Electrical Charge :</dt>
                                Q = 2U/V
                                Where,
                                U = Energy Storage,
                                V = Potential Difference,
                                Q = Electrical Charge.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default EnergyStorage;