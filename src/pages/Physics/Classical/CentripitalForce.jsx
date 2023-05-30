import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
import CentripitalForce from "../../../images/Centripital-Force.jpg"
function CentripitalAccerlation() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Mass');
    const [CA, setCA] = useState(null);
    const [R, setR] = useState(null);
    const [V, setV] = useState(null);
    const [CAvalue, setCAvalue] = useState(0);
    const [Rvalue, setRvalue] = useState(0);
    const [Vvalue, setVvalue] = useState(0);


    // SNcalculator
    const CAcalculator = () => {
        if (V && R !== null) {
            const ca = Math.pow(V, 2) / R;
            setCAvalue(ca.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function CAcalculatorReset() {
        if (V && R !== 0) {
            setCA(0);
            setR(0);
            setV(0);
            setCAvalue(0);
            setRvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // KVcalculatorReset
    const Vcalculator = () => {
        if (CA && R !== null) {
            const v = Math.sqrt(CA * R);
            setCAvalue(v.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function VcalculatorReset() {
        if (CA && R !== 0) {
            setCA(0);
            setR(0);
            setV(0);
            setCAvalue(0);
            setRvalue(0);
            setVvalue(0);
        }
        else {
            setShowPopup(true);
        }
    }
    // MDcalculatorReset
    const Rcalculator = () => {
        if (CA && V !== null) {
            const r = Math.pow(V, 2) / CA;
            setCAvalue(r.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    function RcalculatorReset() {
        if (V && CA !== 0) {
            setCA(0);
            setR(0);
            setV(0);
            setCAvalue(0);
            setRvalue(0);
            setVvalue(0);
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
                <h2 className='text-center fw-bold'> Centripital Accerlation Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Mass" className='value-dropdown'>
                                   Mass</option>
                                <option value='Velocity' className='value-dropdown' >Velocity </option>
                                <option value='Radius (r):' className='value-dropdown' >Radius (r):</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {selectCondition === "Mass" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >

                                    <Input value={V}
                                        onChange={(e) => setV(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius (r):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={R}
                                        onChange={(e) => setR(e.target.value)} text="m" />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Mass</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{CAvalue.toString().substring(0, 6)} m/s</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={CAcalculator} text="Calculate" />
                                <ButtonA onClick={CAcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Velocity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Centripetal Acceleration (a):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={CA}
                                        onChange={(e) => setCA(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius (r):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={R}
                                        onChange={(e) => setR(e.target.value)} text="m" />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Velocity (v):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)} m/s</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={Vcalculator} text="Calculate" />
                                <ButtonA onClick={VcalculatorReset} text="Reset" />
                                {showPopup && <Popup onClick={togglePopup} />}
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Radius (r):" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Centripetal Acceleration (a):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={CA}
                                        onChange={(e) => setCA(e.target.value)} text="m/s" />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Velocity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={V}
                                        onChange={(e) => setV(e.target.value)} text="m/s" />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Radius (r):</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Rvalue.toString().substring(0, 6)} m</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={Rcalculator} text="Calculate" />
                                <ButtonA onClick={RcalculatorReset} text="Reset" />
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
                            {selectCondition === "Mass" &&
                                <div ref={divRef}>
                                    <Example heading="Centripetal Acceleration (a)"
                                        title="step by step solution"
                                        step1="Data : " step1heading="  v = 67 , a = ? , r = 45"
                                        step2="Formula" step2heading="a = v2 / r"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                            = (67)2 / 45<br />
                                            = 4489 / 45</>}
                                        step4="  = 99.76"
                                    /></div>
                            }
                            {selectCondition === "Velocity" &&
                                <div ref={divRef}>
                                    <Example heading="Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="  v = ? , a = 99.76 , r = 45"
                                        step2="Formula" step2heading=" r =  a x r "
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value=" = 99.76 x 45"
                                        step4=" = 4489.2"
                                    /></div>
                            }
                            {selectCondition === "Radius (r):" &&
                                <div ref={divRef}>
                                    <Example heading="Average Velocity"
                                        title="step by step solution"
                                        step1="Data : " step1heading="v = 4489.2 , a = 99.76 , r = ?"
                                        step2="Formula" step2heading="r = v2 / a"
                                        step3="Solution:" step3heading="By putting Values in the above formula: "
                                        step3value={<>
                                            = (4489.2)2 / 99.76<br />
                                            = 20152916.64 / 99.76</>}
                                        step4="  = 202014"
                                    /></div>
                            }
                        </>}</div>
                </div>
                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>Formula and equation for centripetal force is </dt>
                            Centripetal Force :   f = mv2 / r
                            Some other formulas derived from the centripetal force equation are
                            Radius :   r =   mv2 / f
                            Velocity :   v =   √fr / m
                             <dt>Where,</dt>
                            m = Mass,
                            r = Circular Radius,
                            v = Velocity.
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                Centripetal force calculator finds the centripetal force of an object moving in a circular motion. In other words, it calculates the magnitude of centripetal force. It can also find the velocity, mass, and radius of an object if force is given.<br />
                If the answer to your calculation is a negative number, it means the centrifugal force is acting on the object.<br />
                <dt className='fs-4'>What is centripetal force?</dt>
                <span>
                    <Link className='Reference-link'
                        to="https://www.khanacademy.org/science/physics/centripetal-force-and-gravitation/centripetal-forces/a/what-is-centripetal-force#:~:text=A%20centripetal%20force%20is%20a,moving%20along%20a%20circular%20path.&text=Newton's%201%CB%A2%E1%B5%97%20law%20tells%20us,here%20is%20the%20centripetal%20force."
                        target="_blank">Centripetal force</Link></span>    is a net force that acts on an object to keep it moving along a circular path. It is necessary for an object to move with a
                <span>
                    <Link className='Reference-link'
                        to="https://www.physicsclassroom.com/class/circles/Lesson-1/Mathematics-of-Circular-Motion"
                        target="_blank"> circular motion. </Link>
                </span><br />
                <div className='my-2 text-center'>
                    <img src={CentripitalForce} alt="" className='my-2' width="80%" />
                </div>
                <dt className='fs-4'>How to find centripetal force?</dt>
                To find centripetal force, you should have the velocity, radius of the circular path, and mass of the object moving in a circular path. If you have the angular acceleration of the body, you can still find the magnitude of centripetal force.<br />
                <ul>
                    <li>. Take the square of the velocity.</li>
                    <li>. Multiply it to the mass of the body.</li>
                    <li>. Divide the value by the radius of the circle in which the body is moving.</li>
                </ul>
                <dt>Example:</dt>

                Calculate the centripetal force of an object if it is moving in a circle having a radius of 5 m, the mass of the body is 10 kg, and the velocity is 15 m/s.
                <dt>Solution: </dt>
                Place the given values in the equation of centripetal force.
                <dt> Fc = mv2/r </dt>
                <dt>Fc =10 × (15)2/5 </dt>
                <dt>  Fc = 450 N</dt>
                <hr />
                <dt>Is centripetal and centrifugal force the same? </dt>
                Both are the same but opposite in direction. The centripetal force acts inwardly (pulls the object toward the centre) while centrifugal force pushes it away from the centre. Both have the same formulas. The only difference is, centrifugal force is accompanied by a negative sign.
                <Reference
                    step1={<> Definition of  <Link className='Reference-link'
                        to="https://www.merriam-webster.com/dictionary/centripetal%20force"
                        target="_blank"> CENTRIPETAL FORCE,</Link>  Merriam-webster.com. </>}
                    step2={<> How to Calculate the Centripetal Force Centripetal Force by .
                        <Link className='Reference-link'
                            to="https://study.com/academy/lesson/centripetal-force-definition-formula-examples.html"
                            target="_blank">Study.com</Link> </>}
                    step3={<> Centripetal Force | Physics. Courses.lumenlearning.com. <Link className='Reference-link'
                        to="https://www.coursehero.com/study-guides/physics/6-3-centripetal-force/"
                        target="_blank"> lumenlearning.com</Link> </>}
                    step4={<> What is Centripetal Force by <Link className='Reference-link'
                        to="http://hyperphysics.phy-astr.gsu.edu/hbase/cf.html"
                        target="_blank"> hyperphysics.phy-astr.gsu.edu/</Link> </>}
                    step5={<> <Link className='Reference-link'
                        to="https://openstax.org/books/college-physics/pages/6-2-centripetal-acceleration"
                        target="_blank">Centripetal Acceleration</Link>- College Physics |  Openstax.org</>}
                />
            </div>
        </Container >
        </div >
    )
}

export default CentripitalAccerlation