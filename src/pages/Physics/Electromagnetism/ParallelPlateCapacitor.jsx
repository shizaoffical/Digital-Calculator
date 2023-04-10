import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Span from '../../../components/Span';
import Input from '../../../components/Input';
function ParallelPlateCapacitor() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Permittivity:');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [pr, setpr] = useState(null);
    const [ar, setar] = useState(null);
    const [sd, setsd] = useState(null);
    const [ca, setca] = useState(null);
    const [PR, setPR] = useState(0);
    const [AR, setAR] = useState(0);
    const [SD, setSD] = useState(0);
    const [CA, setCA] = useState(0);



    // ECcalculate
    const PRcalculate = () => {
        if (ca && sd && ar !== null) {
            const pr = (Math.round(((ca * sd) / ar) * 100) / 100).toPrecision(6);
            setPR(pr);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const PRreset = () => {
        if (PR !== 0) {
            setPR(0);
            setSD(0);
            setCA(0);
            setAR(0);
            setpr(0)
            setca(0);
            setsd(0);
            setar(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const ARcalculate = () => {
        if (ca && sd && pr !== null) {
            const ar = (Math.round(((ca * sd) / pr) * 100) / 100).toPrecision(6);
            setAR(ar);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const ARreset = () => {
        if (AR !== 0) {
            setPR(0);
            setSD(0);
            setCA(0);
            setAR(0);
            setpr(0)
            setca(0);
            setsd(0);
            setar(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const SDcalculate = () => {
        if ( ca && pr && ar !== null) {
            const sd = (Math.round(((pr*ar)/ca)*100)/100).toPrecision(6);
            setSD(sd);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const SDreset = () => {
        if (SD !== 0) {
            setPR(0);
            setSD(0);
            setCA(0);
            setAR(0);
            setpr(0)
            setca(0);
            setsd(0);
            setar(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const CAcalculate = () => {
        if (ca && ar && pr !== null) {
            const ca = (Math.round(((pr*ar)/sd)*100)/100).toPrecision(6);
            setCA(ca);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const CAreset = () => {
        if (CA !== 0) {
            setPR(0);
            setSD(0);
            setCA(0);
            setAR(0);
            setpr(0)
            setca(0);
            setsd(0);
            setar(0);
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
                    <h2 className='text-center fw-bold'>Parallel Plate Capacitor Calculator</h2>
                    <div className='polygon-calculator-div '>
                        {/* dropdown */}
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Permittivity:" className='value-dropdown'>Permittivity:
                                    </option>
                                    <option value='Area:' className='value-dropdown' >
                                        Area:</option>
                                    <option value='Separation Distance:' className='value-dropdown' >
                                        Separation Distance:</option>
                                    <option value='Capacitance' className='value-dropdown' >Capacitance</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {selectCondition === "Permittivity:" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Area:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ar}
                                            onChange={(event) => setar(parseFloat(event.target.value))} />
                                        <Span text="m2" />  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Separation Distance:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={sd}
                                            onChange={(event) => setsd(parseFloat(event.target.value))} />
                                        <Span text="m" />  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} />
                                        <Span text="F" />  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Permittivity:</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PR.toString().substring(0, 7)} F/m</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={PRcalculate} text="Calaulate" />
                                    <ButtonA onClick={PRreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>
                            }
                            {selectCondition === "Area:" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε):</label> </Col>
                                    <Col md={6} sm={12} xs={12}  >
                                        <Input value={pr}
                                            onChange={(event) => setpr(parseFloat(event.target.value))} />
                                        <Span text="F/m" /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Separation Distance:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={sd}
                                            onChange={(event) => setsd(parseFloat(event.target.value))} />
                                        <Span text="m" />  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} />
                                        <Span text="F" /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Area</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{AR.toString().substring(0, 7)} h</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={ARcalculate} text="Calaulate" />
                                    <ButtonA onClick={ARreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Separation Distance:" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={pr}
                                            onChange={(event) => setpr(parseFloat(event.target.value))} />
                                        <Span text="F/m"/> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Area:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ar}
                                            onChange={(event) => setar(parseFloat(event.target.value))} />
                                        <Span text="m2"/> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} />
                                       <Span text="F"/> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Separation Distance</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{SD.toString().substring(0, 7)} m</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={SDcalculate} text="Calaulate" />
                                    <ButtonA onClick={SDreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Capacitance" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={pr}
                                            onChange={(event) => setpr(parseFloat(event.target.value))} />
                                        <span className="ps-2 ">F/m</span>  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Separation Distance:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={sd}
                                            onChange={(event) => setsd(parseFloat(event.target.value))} />
                                        <Span text="m"/>  </Col>
                                </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Area:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={ar}
                                            onChange={(event) => setar(parseFloat(event.target.value))} />
                                        <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Capacitance</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{CA.toString().substring(0, 7)} F</button></Col>
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
                                        Calculate the capacitance for the cylindrical capacitor by the given details.
                                        Permittivity (ε) = 5 F/m
                                        Length of Conductors (L) = 4 m<br />
                                        Outer Conductor Diameter (b) = 3 m<br />
                                        Inner Conductor Diameter (a) =2 m<br />
                                    </>}
                                    step1={<>Solution:<br />Apply Formula</>}
                                    step1heading={<>C = 2π εL/In ( b/a)<br />
                                        C = 2*3.14*5*4/ (3/2)<br /></>}
                                    step1value="  C = 309.77 F"
                                    step2=" Capacitance (C) = C = 309.77 F" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        Cylindrical Capacitor refers to a capacitor that is made up of two concentric metal cylinders of the same length, with dielectric filling the space between the cylinders. The cylindrical capacitor is also known as coaxial capacitor.

                        The advanced online Cylindrical Capacitor Calculator is used to calculate the capacitance for cylindrical capacitor.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Capacitance :</dt>
                                C = 2π εL/In( b/a)
                                <dt>Permittivity :</dt>
                                ε = Cln (b/a)/2πL
                                <dt> Length of Conductors :</dt>
                                L = Cln(b/a)/2π ε
                                <dt>Outer Conductor Diameter :</dt>
                                b = ae (2πL/C)
                                <dt> Inner Conductor Diameter :</dt>
                                a = b/e (2π L/C)
                                <dt> Where,</dt>
                                C = Capacitance,
                                ε = Permittivity,
                                L = Length of Conductors,
                                b = Outer Conductor Diameter,
                                a = Inner Conductor Diameter.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default ParallelPlateCapacitor;