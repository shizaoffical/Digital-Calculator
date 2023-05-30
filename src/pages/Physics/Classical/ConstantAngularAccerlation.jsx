import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
import Example from '../../../components/Example';
function ConstantAngularAccerlation() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Total torque and inertia');
    const [TotalTorque, setTotalTorque] = useState(null);
    const [MassOfInertia, setMassOfInertia] = useState(null);
    const [InitialVelocity, setInitialVelocity] = useState(null);
    const [FinalVelocity, setFinalVelocity] = useState(null);
    const [Time, setTime] = useState(null);
    const [TangentialAcceleration, setTangentialAcceleration] = useState(null);
    const [Radius, setRadius] = useState(null);
    const [TorqueInertia, setTorqueInertia] = useState(0);
    const [AngularVelocity, setAngularVelocity] = useState(0);
    const [TangentialAccelerationRadius, setTangentialAccelerationRadius] = useState(0);


    // SNcalculator
    const TorqueInertiacalculator = () => {
        if (TotalTorque && MassOfInertia !== null) {
            const ti = TotalTorque / MassOfInertia;
            setTorqueInertia(ti.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function TorqueInertiacalculatorReset() {
        if (TorqueInertia && MassOfInertia !== 0) {
            setTotalTorque(0)
            setTime(0)
            setMassOfInertia(0)
            setInitialVelocity(0)
            setFinalVelocity(0)
            setTangentialAcceleration(0)
            setRadius(0)
            setTorqueInertia(0)
            setAngularVelocity(0)
            setTangentialAccelerationRadius(0)
        }
        else {
            setShowPopup(true);
        }
    }
    // KVcalculatorReset
    const AngularVelocitycalculator = () => {
        if (FinalVelocity && InitialVelocity && Time !== null) {
            const cv = (InitialVelocity - FinalVelocity) / Time;
            setAngularVelocity(cv.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function AngularVelocitycalculatorReset() {
        if (FinalVelocity && InitialVelocity && Time !== 0) {
            setTime(0)
            setTotalTorque(0)
            setMassOfInertia(0)
            setInitialVelocity(0)
            setFinalVelocity(0)
            setTangentialAcceleration(0)
            setRadius(0)
            setTorqueInertia(0)
            setAngularVelocity(0)
            setTangentialAccelerationRadius(0)
        }
        else {
            setShowPopup(true);
        }

    }
    // MDcalculatorReset
    const TangentialAccelerationRadiuscalculator = () => {
        if (TangentialAcceleration && Radius !== null) {
            const r = TangentialAcceleration / Radius;
            setTangentialAccelerationRadius(r.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function TangentialAccelerationRadiuscalculatorReset() {
        if (TangentialAcceleration && Radius !== 0) {
            setTime(0)
            setTotalTorque(0)
            setMassOfInertia(0)
            setInitialVelocity(0)
            setFinalVelocity(0)
            setTangentialAcceleration(0)
            setRadius(0)
            setTorqueInertia(0)
            setAngularVelocity(0)
            setTangentialAccelerationRadius(0)
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
    return (


        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>   Constant Angular Accerlation</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Total torque and inertia" className='value-dropdown'>
                                    Total torque and inertia </option>
                                <option value='Mass moment of inertia:' className='value-dropdown' >Mass moment of inertia</option>
                                <option value='Radius (r):' className='value-dropdown' >Radius (r):</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {selectCondition === "Total torque and inertia" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Mass moment of inertia:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={MassOfInertia}
                                        onChange={(e) => setMassOfInertia(e.target.value)} text="rad/sec" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Total torque:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={TotalTorque}
                                        onChange={(e) => setTotalTorque(e.target.value)} text="sec" />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Total torque and inertia:</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>
                                        {TorqueInertia.toString().substring(0, 6)} rad/s2</button>
                                </Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={TorqueInertiacalculator} text="Calculate" />
                                <ButtonA onClick={TorqueInertiacalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Mass moment of inertia:" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Initial angular velocity:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={InitialVelocity}
                                        onChange={(e) => setInitialVelocity(e.target.value)} text="rad/sec" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Final angular velocity:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={FinalVelocity}
                                        onChange={(e) => setFinalVelocity(e.target.value)} text="rad/sec" />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Time:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={Time}
                                        onChange={(e) => setTime(e.target.value)} text="sec" />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt> Mass moment of inertia:</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>
                                        {AngularVelocity.toString().substring(0, 6)} rad/s2</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={AngularVelocitycalculator} text="Calculate" />
                                <ButtonA onClick={AngularVelocitycalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Tangential acceleration & radius:" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Tangential acceleration:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={TangentialAcceleration}
                                        onChange={(e) => setTangentialAcceleration(e.target.value)} text="m/s2" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Radius:</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={Radius}
                                        onChange={(e) => setRadius(e.target.value)} text="m" />
                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Tangential acceleration & radius:</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>
                                        {TangentialAccelerationRadius.toString().substring(0, 6)} rad/s2</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={TangentialAccelerationRadiuscalculator} text="Calculate" />
                                <ButtonA onClick={TangentialAccelerationRadiuscalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                    </div>
                    {/* steps */}
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {textShow && <>
                            {selectCondition === "Total torque and inertia" &&
                                <div ref={divRef}>
                                    <Example heading="Total torque and inertia"
                                        title="step by step solution"
                                        step1="Data : " step1heading={` α = ? , T = ${TotalTorque} ,
                                         I = ${MassOfInertia}`}
                                        step2="Formula" step2heading=" α = T/I"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={` α = ${TotalTorque} / ${MassOfInertia}`}
                                        step4={`${TorqueInertia}`}
                                    /></div>
                            }
                            {selectCondition === "Mass moment of inertia:" &&
                                <div ref={divRef}>
                                    <Example heading="Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading={`α= ? , ω1 = ${InitialVelocity} , ω2 =${FinalVelocity}  
                                        , t = ${Time}}`}
                                        step2="Formula" step2heading= {` α = (${InitialVelocity} - ${FinalVelocity})/${Time}`} 
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={` a = (${InitialVelocity} - ${FinalVelocity}) / ${Time}`}
                                        step4={`${AngularVelocity}`}
                                    /></div>
                            }
                            {selectCondition === "Tangential acceleration & radius:" &&
                                <div ref={divRef}>
                                    <Example heading="Tangential acceleration:"
                                        title="step by step solution"
                                        step1="Data : " step1heading={`α = ? , a =  , R = 22`}
                                        step2="Formula" step2heading=" α = a/R"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value="  α = 15 / 22"
                                        step4="  α = 0.6818 rad/s2"
                                    /></div>
                            }
                        </>}</div>
                </div>
                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> From Newton's second law α = T / I</dt>
                             <dt>Where,</dt>
                            T = Total torque exerted on the body
                            I =Mass moment of inertia of the body
                           <dt> Mass moment of inertia:</dt>
                           α = (InitialVelocity - FinalVelocity)/ Time
                           <dt>Tangential acceleration & radius</dt>
                           a = Tangential Acceleration / Radius
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                <center> <dt> Circular Velocity Calculator</dt> </center>
                Circular Velocity refers to the velocity at which a body must move in order to maintain an orbit at the outer edge of the earth's atmosphere. The circular velocity of a circular object is denoted by the symbol "v".<br />
                The advanced online Circular Velocity Calculator is used to calculate and find the circular velocity of a circular object when radius and time period of the object is known.<br />
                <dt> Example:</dt>
                Calculate the Circular velocity for the details of a circular object.<br />
                Radius (r) = 10 m<br />
                Time Period (T) = 20 s<br />
                <dt>Solution: </dt>
                <dt> Apply formula: </dt>
                v = 2πr/T<br />
                v = 2*3.14*10/20<br />
                v = 3.14<br />
                <dt>Circular Velocity (v) = 3.14m/s</dt>
            </div>
        </Container >
        </div >
    )
}

export default ConstantAngularAccerlation