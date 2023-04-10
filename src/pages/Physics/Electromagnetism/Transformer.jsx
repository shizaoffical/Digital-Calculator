import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Example from '../../../components/Example';
import Image from "../../../images/Transformer.jpg"
import Input from '../../../components/Input';
function Transformer() {
    const divRef = useRef(null);
    const [textShow, settextShow] = useState(false);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [amps, setAmps] = useState(null);
    const [volts, setVolts] = useState(null);
    const [kva, setKva] = useState(null);
    const [phase, setPhase] = useState("single");

    const handlePhaseChange = (e) => {
        setPhase(e.target.value);
    };
    const calculate = () => {
        if (volts && amps && kva !== null) {
            if (phase === "single") {
                if (volts && amps) {
                    setKva((volts * amps) / 1000);
                } else if (volts && kva) {
                    setAmps((kva * 1000) / volts);
                } else if (amps && kva) {
                    setVolts(kva * 1000 / amps);
                }
            } else if (phase === "three") {
                if (volts && amps) {
                    setKva((volts * amps * Math.sqrt(3)) / 1000);
                } else if (volts && kva) {
                    setAmps((kva * 1000) / (volts * Math.sqrt(3)));
                } else if (amps && kva) {
                    setVolts(kva * 1000 / (amps * Math.sqrt(3)));
                }
            }
        }
        else { setShowPopup(true); }
    }
    const handleResetClick = () => {
        if (volts && amps && volts !== 0) {
            setAmps(0)
            setVolts(0)
            setKva(0)

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
                    <h2 className='text-center fw-bold'>Waveleng calculate</h2>
                    <p>Select the phase, choose the term you want to calculate, enter values of required input fields, and hit calculate button using transformer calculator</p>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <center>
                                <select value={phase} onChange={handlePhaseChange}>
                                    <option value="single">Single-phase</option>
                                    <option value="three">Three-phase</option>

                                </select>
                            </center>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label htmlFor="amps">Amperes:</label>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input id="amps" name="amps" value={amps}
                                        onChange={(e) => setAmps(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label htmlFor="volts">Volts:</label>
                                </Col>

                                <Col md={6} sm={12} xs={12}>
                                    <Input id="volts" name="volts" value={volts}
                                        onChange={(e) => setVolts(e.target.value)} />
                                </Col>
                            </Row><Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label htmlFor="kva">kVA:</label>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input id="kva" name="kva" value={kva}
                                        onChange={(e) => setKva(e.target.value)} />
                                </Col>
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
                                         Calculate kVA of a three-phase transformer if:<br />
                                         V = 200<br />
                                         A = 130<br />
                                    </>}
                                    step1="Solution"
                                    step1heading={<>kVA = (√3. V x I ) / 1000<br/>

                                    kVA = (√3. 200 x 130 ) / 1000 <br/></>}
                                    step1value="kVA = 45,033/1000"
                                    step2=" kVA = 45" />
                            </div>
                        }

                    </div>
                    <dt className="my-2">Transformer calculator</dt>
                    Input the values of ampere and voltage. Then to calculate KVA (rating) choose between three-phase and single-phase from the Transformer calculator.<br />

                    This 3 in 1 calculator helps users to find the current, voltage, and rated phase power of the step up and step down transformer. you can choose to find any of these values.<br />
                    <dt className="my-2"> What is a transformer?</dt>
                    A passive electrical device that transmits a power supply. A transformer basically transfers electricity from one circuit to multiple or other circuits.<br />
                    <div className='my-2 text-center'>
                        <img src={Image} alt="" className='my-2' width="70%" />
                    </div>
                    <ul>
                                    <li>Step-up transformers have higher secondary voltage than the primary voltage.</li>
                                    <li>Step-down transforms have higher primary voltage.</li>
                                </ul>
                    <dt className="my-2">Transformer Rating</dt>
                    Transformer rating describes the capability of the transformer to handle voltage and current. It is necessary to know to save any damage to the powerline.<br />
                    Transformer rating is calculated in kVA (KiloVolt Amperes). During the transformer sizing, the calculator above can come in handy to compute kVA.<br />
                    {/* formula */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                The formula of kVA for a single-phase is:
                                <dt> kVA = (V x I) / 1000 dt</dt>
                                The formula for a three-phase transformer is:
                                <dt>kVA = (√3.V x I) / 1000</dt>
                                In these equations:
                                <ul>
                                    <li>kVA is the power rating.</li>
                                    <li>V is voltage</li>
                                    <li>  I is current.</li>
                                </ul>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container>
        </div >

    )
}

export default Transformer;