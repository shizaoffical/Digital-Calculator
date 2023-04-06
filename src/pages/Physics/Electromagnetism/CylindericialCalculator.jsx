import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';

function CylindericalCalculator() {

    const divRef = useRef(null);
    const [selectCondition, setSelectCondition] = useState('Permittivity (ε):');
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // Electrical Change
    const [pa, setpa] = useState(null);
    const [lc, setlc] = useState(null);
    const [outer, setouter] = useState(null);
    const [inner, setinner] = useState(null);
    const [ca, setca] = useState(null);
    const [PA, setPA] = useState(0);
    const [LC, setLC] = useState(0);
    const [OUTER, setOUTER] = useState(0);
    const [INNER, setINNER] = useState(0);
    const [CA, setCA] = useState(0);
    


    // ECcalculate
    const PAcalculate = () => {
        if (lc && inner && outer && ca !== null) {
            const pa = (Math.round(((ca*Math.log(outer/inner))/(6.28*lc))*100)/100).toPrecision(6);
            setPA(pa);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const PAreset = () => {
        if (PA !== 0) {
            setinner(0);
            setca(0);
            setlc(0);
            setouter(0);
            setPA(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECcalculate
    const LCcalculate = () => {
        if (lc && inner && outer && ca !== null) {
            const lc = (Math.round(((ca*Math.log(inner/outer))/(6.28*pa))*100)/100).toPrecision(6);
            setLC(lc);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const LCreset = () => {
        if (LC !== 0) {
            setinner(0);
            setca(0);
            setpa(0);
            setouter(0);
            setLC(0)
        }
        else {
            setShowPopup(true);
        }
    }
     // ECcalculate
     const OUTERcalculate = () => {
        if (lc && inner && pa && ca !== null) {
            const outer = (Math.round((inner*(Math.pow(2.72,((6.28*pa*lc)/ca))))*100)/100).toPrecision(6);
            setOUTER(outer);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const OUTERreset = () => {
        if (OUTER !== 0) {
            setinner(0);
            setca(0);
            setpa(0);
            setlc(0);
            setOUTER(0)
        }
        else {
            setShowPopup(true);
        }
    }
     // ECcalculate
     const INNERcalculate = () => {
        if (lc && outer && pa && ca !== null) {
            const inner = (Math.round((outer/(Math.pow(2.72,((6.28*pa*lc)/ca))))*100)/100).toPrecision(6);
            setINNER(inner);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const INNERreset = () => {
        if (INNER !== 0) {
            setouter(0);
            setca(0);
            setpa(0);
            setlc(0);
            setINNER(0)
        }
        else {
            setShowPopup(true);
        }
    }
     // ECcalculate
     const CAcalculate = () => {
        if (lc && outer && pa && inner !== null) {
            const ca = (Math.round(((6.28*pa*lc)/(Math.log(outer/inner)))*100)).toPrecision(6);
            setCA(ca);
        }
        else {
            setShowPopup(true);
        }
    }
    // ECreset
    const CAreset = () => {
        if (CA !== 0) {
            setouter(0);
            setinner(0);
            setpa(0);
            setlc(0);
            setCA(0)
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
                    <h2 className='text-center fw-bold'>Cylindrical Capacitor Calculator</h2>
                    <p>To use cylindrical capacitor calculator, select the option, fill the required input fields, and press the calculate button</p>
                    <div className='polygon-calculator-div '>
                        {/* dropdown */}
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >      <option value='Permittivity (ε):' className='value-dropdown' >Permittivity (ε):</option>
                                    <option value="Length of Conductors (L):" className='value-dropdown'>Length of Conductors (L):
                                    </option>
                                    <option value='Outer Conductor Diameter (b):' className='value-dropdown' >
                                    Outer Conductor Diameter (b):</option>
                                    <option value='Inner Conductor Diameter (a):' className='value-dropdown' >
                                    Inner Conductor Diameter (a):</option>
                                    <option value='Capacitance' className='value-dropdown' >Capacitance</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {
                                selectCondition === "Permittivity (ε):" && <>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Length of Conductors (L): </label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <input type="number" value={lc}
                                                onChange={(event) => setlc(parseFloat(event.target.value))} />
                                                <span className="ps-2 ">m</span> </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Outer Conductor Diameter (b):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <input type="number" value={outer}
                                                onChange={(event) => setouter(parseFloat(event.target.value))} />
                                                <span className="ps-2 ">m</span> </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Inner Conductor Diameter (a):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <input type="number" value={inner}
                                                onChange={(event) => setinner(parseFloat(event.target.value))} />
                                                <span className="ps-2 ">m</span>  </Col>
                                    </Row>
                                    
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Capacitance (C):</label> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <input type="number" value={ca}
                                                onChange={(event) => setca(parseFloat(event.target.value))} />
                                                <span className="ps-2 ">F</span>  </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Permittivity (ε):</dt> </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{PA.toString().substring(0, 7)}F/m</button></Col>
                                    </Row>

                                    <div className='text-center'>
                                        <ButtonA onClick={PAcalculate} text="Calaulate" />
                                        <ButtonA onClick={PAreset} text="Reset" />
                                        {showPopup && <Popup onClick={togglePopup} />}
                                    </div>

                                </>
                            }
                            {selectCondition === "Length of Conductors (L):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε)</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={pa}
                                            onChange={(event) => setpa(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">F/m</span>  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Outer Conductor Diameter (b):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={outer}
                                            onChange={(event) => setouter(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Inner Conductor Diameter (a):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={inner}
                                            onChange={(event) => setinner(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">F</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length of Conductors (L):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{LC.toString().substring(0, 7)}m</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={LCcalculate} text="Calaulate" />
                                    <ButtonA onClick={LCreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>
                            }
                            {selectCondition === "Outer Conductor Diameter (b):" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε):</label> </Col>
                                    <Col md={6} sm={12} xs={12}  >
                                        <input type="number" value={pa} 
                                            onChange={(event) => setpa(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">F/m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Length of Conductors (L):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={lc}
                                            onChange={(event) => setlc(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Inner Conductor Diameter (a):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={inner}
                                            onChange={(event) => setinner(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} /> 
                                            <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Outer Conductor Diameter (b):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{OUTER.toString().substring(0, 7)}h</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={OUTERcalculate} text="Calaulate" />
                                    <ButtonA onClick={OUTERreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Inner Conductor Diameter (a):" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={pa}
                                            onChange={(event) => setpa(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">F/m</span>  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Length of Conductors (L):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={lc}
                                            onChange={(event) => setlc(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Outer Conductor Diameter (a):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={outer}
                                            onChange={(event) => setouter(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row> 
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Capacitance (C):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={ca}
                                            onChange={(event) => setca(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span>  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Inner Conductor Diameter (b):</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{INNER.toString().substring(0, 7)}m</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={INNERcalculate} text="Calaulate" />
                                    <ButtonA onClick={INNERreset} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup} />}
                                </div>
                            </>}
                            {selectCondition === "Capacitance" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Permittivity (ε):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={pa}
                                            onChange={(event) => setpa(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">F/m</span>  </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Length of Conductors (L):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={lc}
                                            onChange={(event) => setlc(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Outer Conductor Diameter (b):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={outer}
                                            onChange={(event) => setouter(parseFloat(event.target.value))} />
                                            <span className="ps-2 ">m</span>  </Col>
                                </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Inner Conductor Diameter (b):</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={inner}
                                            onChange={(event) => setinner(parseFloat(event.target.value))} /> 
                                            <span className="ps-2 ">m</span> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Capacitance</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{CA.toString().substring(0, 7)}F</button></Col>
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

export default CylindericalCalculator;