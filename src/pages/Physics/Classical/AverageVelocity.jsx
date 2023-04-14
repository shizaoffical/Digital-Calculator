import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function AverageVelocity() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Initial Velocity');
    const [initialvelocity, setinitialvelocity] = useState(null);
    const [velocity, setvelocity] = useState(null);
    const [averagevelocity, setaveragevelocity] = useState(null);
    const [InitialVelocity, setInitialVelocity] = useState(0);
    const [Velocity, setVelocity] = useState(0);
    const [AverageVelocity, setAverageVelocity] = useState(0);

    // SNcalculator
    const IVcalculator = () => {
        if (velocity && averagevelocity !== null) {
            const IV = Math.round(2 * (averagevelocity) - (velocity));
            setInitialVelocity(IV.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function IVcalculatorReset() {
        if (velocity && averagevelocity !== 0) {
            setinitialvelocity(0);
            setvelocity(0);
            setaveragevelocity(0);
            setInitialVelocity(0);
            setVelocity(0);
            setAverageVelocity(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // KVcalculatorReset
    const Vcalculator = () => {
        if (initialvelocity && averagevelocity !== null) {
            const KV = Math.round(2 * (averagevelocity) - initialvelocity);
            setVelocity(KV.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function VcalculatorReset() {
        if (initialvelocity && averagevelocity !== 0) {
            setinitialvelocity(0);
            setvelocity(0);
            setaveragevelocity(0);
            setInitialVelocity(0);
            setVelocity(0);
            setAverageVelocity(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // MDcalculatorReset
    const AVcalculator = () => {
        if (initialvelocity && velocity !== null) {
            const KV = Math.round(0.5 * (initialvelocity + velocity));
            setAverageVelocity(KV.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function AVcalculatorReset() {
        if (velocity && initialvelocity !== 0) {
            setinitialvelocity(0);
            setvelocity(0);
            setaveragevelocity(0);
            setInitialVelocity(0);
            setVelocity(0);
            setAverageVelocity(0);
        }
        else {
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


        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> Average Velocity Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Initial Velocity" className='value-dropdown'>Initial Velocity</option>
                                <option value='Velocity' className='value-dropdown' >Velocity </option>
                                <option value='Average Velocity' className='value-dropdown' >Average Velocity</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {selectCondition === "Initial Velocity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity (vf):</label></Col>
                                <Col md={6} sm={12} xs={12} >

                                    <Input value={velocity}
                                        onChange={(e) => setvelocity(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Average Velocity (vav):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={averagevelocity}
                                        onChange={(e) => setaveragevelocity(e.target.value)} />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Initial Velocity</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{InitialVelocity.toString().substring(0, 6)} ms-1</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={IVcalculator} text="Calculate" />
                                <ButtonA onClick={IVcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Velocity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Initial Velocity</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={initialvelocity}
                                        onChange={(e) => setinitialvelocity(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Average Velocity (vav):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={averagevelocity}
                                        onChange={(e) => setaveragevelocity(e.target.value)} />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Velocity (vf):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Velocity.toString().substring(0, 6)} ms-1 </button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={Vcalculator} text="Calculate" />
                                <ButtonA onClick={VcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Average Velocity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Initial Velocity</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={initialvelocity}
                                        onChange={(e) => setinitialvelocity(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity (vf):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={velocity}
                                        onChange={(e) => setvelocity(e.target.value)} />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Average Velocity (vav):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{AverageVelocity.toString().substring(0, 6)} ms-1</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={AVcalculator} text="Calculate" />
                                <ButtonA onClick={AVcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {textShow && <>
                            {selectCondition === "Initial Velocity" &&
                                <div ref={divRef}>
                                    <Example heading="Initial Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="  vi = ? ,vav = 77, vf = 67"
                                        step2="Formula" step2heading="   Initial Velocity (vi) = 2 (vav) - vf"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                            vi = 2 (77) - 67<br />
                                            vi = 154 - 67</>}
                                        step4=" Initial Velocity (vi) = 87 ms-1"
                                    /></div>
                            }
                            {selectCondition === "Velocity" &&
                                <div ref={divRef}>
                                    <Example heading="Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="wh = 10 , pe = 10 , th = 10 , frd = ?"
                                        step2="Formula" step2heading="frd = (((3960*wh*pe)/(th*100))*100)/100 "
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                            vf = 2 (77) - 66<br />
                                            vf = 154 - 66</>}
                                        step4="Velocity (vf) = 88 ms-1"
                                    /></div>
                            }
                            {selectCondition === "Average Velocity" &&
                                <div ref={divRef}>
                                    <Example heading="Average Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="vav = ? ,vi = 66, vf = 67"
                                        step2="Formula" step2heading="  Average Velocity (vav) = 1/2 (vi + vf) "
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                            vav = 1/2 (66 + 67)<br />
                                            vav = 1/2 (133)<br />
                                            vav = (133)/2</>}
                                        step4="  Average Velocity (vav) = 66.5 ms-1"
                                    /></div>
                            }
                        </>}</div>
                </div>
                <div className='my-2'>
                    The advanced online Average Velocity Calculator is used to calculate and find the average velocity of an object..
                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>

                            <dt>Schmidt Number :</dt><br />
                            Sc = v/ Dc<br />
                            <dt>   Kinematic Viscosity :</dt><br />
                            v = Sc*Dc<br />
                            <dt>Mass Diffusivity :</dt><br />
                            Dc = v/Sc<br />
                            <dt> Where,</dt><br />
                            Sc = Schmidt Number,<br />
                            v = Kinematic Viscosity,<br />
                            Dc = Mass Diffusivity.<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                <dt>Example: </dt>
                Calculate the average velocity for the given details.
                Initial Velocity (vi) = 5 m/s
                Velocity (vf) = 15 m/s
                <dt> Solution:</dt>
               <dt> Apply Formula: </dt>
                Average Velocity: va = ½ (vi + vf)

                By putting the values in the formula
                vav= ½ (5+15)
                <dt>Average Velocity (vav) =10 m/ </dt>
            </div>
        </Container >
        </div >
    )
}

export default AverageVelocity