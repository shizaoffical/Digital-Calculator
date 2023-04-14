import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function AmountOfSubstance() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [Mass, setMass] = useState(null);
    const [molarMass, setmolarMass] = useState(null);
    const [result, setResult] = useState(0)


    const calculate = () => {
        if (Mass && molarMass !== null) {
            const res = (Mass/molarMass).toPrecision(6);
            setResult(res);
        }
        else {
            setShowPopup(true);
        }
    }


    function reset() {
        if (Mass && molarMass  !== 0) {
           setMass(0);
           setResult(0);
           setmolarMass(0);
        }
        else {
            setShowPopup(true);
        }

    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
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
                <h2 className='text-center fw-bold'>Accerlation calculate</h2>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Mass:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={Mass}
                                    onChange={(e) => setMass(e.target.value)} text="g" />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Molar Mass:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={molarMass}
                                    onChange={(e) => setmolarMass(e.target.value)} text="g/mol" />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Result:</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{result.toString().substring(0, 5)} mole</button></Col>
                        </Row>

                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={reset} text="Reset" />
                        {showPopup && <Popup onClick={togglePopup} />}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                            <Example heading="step by step solution" title=" Find the amount of substance."
                                step1="Data: " step1heading="Amount of Substance = ? , Mass = 65 , Molar Mass = 53.5"
                                step2="Formula: " step2heading="Find the substance"
                                 step2value="Mass (m) / Molar mass (M)"
                                step3="Solution : "
                                 step3heading={<>By putting Values in the above formula:<br/>
                                    Amount of Substance = 65 / 53.5</>} step3value="Amount of Substance = 1.2150 mole" />
                        </div>}

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                           <dt>Amount of substance (n) = Mass (m)/Molar mass (M)</dt>
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                <dt>Example</dt>
                Calculate the amount of substance when the mass and molar mass of substance is known.<br/>
                Mass (kg) = 25<br/>
                Molar Mass (g/mol) = 20<br/>
                <dt>Solution: </dt>
                 <dt>Apply Formula:</dt>
                Amount of substance (n) = Mass (m)/Molar mass (M)<br/>
                Amount of Substance (n) = 25/20<br/>
                Amount of Substance (n) = 1.25 mole<br/>
            </div>
        </Container>
        </div >

    )
}

export default AmountOfSubstance