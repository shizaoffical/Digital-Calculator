import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function CylindericalTank() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [Diameter, setDiameter] = useState(null);
    const [Lenth, setLength] = useState(null);
    const [result, setResult] = useState(0)


    const calculate = () => {
        if (Diameter && Lenth !== null) {
            // var di12 = Diameter * Diameter;
            // var r = Lenth * 3.1415 * di12;
            // var tc_val = (r / 4).toPrecision(6);
            // var tc1_val = (tc_val / 231).toPrecision(6);
            const e = ((Lenth) * 3.1415 * (Math.sqrt(Diameter)) / 4) / 231
            setResult(e)
        }
        else {
            setShowPopup(true);
        }
    }


    function reset() {
        if (Lenth && Diameter !== 0) {
           setLength(0)
            setResult(0);
           setDiameter(0)
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
                <h2 className='text-center fw-bold'>Cylinderical Tank</h2>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Diameter:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={Diameter}
                                    onChange={(e) => setDiameter(e.target.value)} text="inches" />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Length:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={Lenth}
                                    onChange={(e) => setLength(e.target.value)} text="inches" />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Result:</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{result.toString().substring(0, 7)} cubic inches</button></Col>
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
                                step1="Data: " step1heading="  Tank Capacity(C) = ? , diameter(d) = 12.5 , length(l) = 15"
                                step2="Formula: " step2heading=" C(cubic in.) = ( l * 3.1415 * d2) / 4"
                                step2value=" C(gallons) = C(cub.in) / 231)"
                                step3="Solution : "
                                step3heading={<>  By putting Values in cubic inches formula:<br/>
                                    C = ( (15) * 3.1415 * (12.5)2) / 4<br/>
                                    C = ( (15) * 3.1415 * (156.25)) / 4<br/>
                                    C = ( 156.25 ) / 4<br/>
                                    C(cubic in.) = 1840.72 cubic inches<br/>
                                      By putting answer of cubic inches in gallons formula:<br/>
                                    C = 1840.72 / 2315</>} 
                                    step3value="  C(gallons) = 7.96848 gallons" />
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
                <dt>  C(cubic inches) = ( ( Length * 3.1415 * Diameter2) / 4) </dt>
                <dt>C(Gallons) = C(cubic inches) / 231 </dt>

                <dt>Where, </dt>
                C - Capacity
            </div>
            <div>
                <dt>Cylindrical Tank is a solid object with: </dt>

                * two identical flat ends that are circular or elliptical<br />
                * and one curved side.<br />
                It has the same cross-section from one end to the other.<br />

                A storage tank is a container, usually for holding liquids, sometimes for compressed gases (gas tanks). This term can also be used for reservoirs, and for manufactured containers for other storage purposes.<br />

                This advanced online Cylinder Tank Calculator is used to calculate the storage capacity of liquid in a cylindrical tank.
                <br />

                Example:
                Calculate the storage capacity of a cylindrical tank for the given details.<br />
                Diameter: 25 inches<br />
                Length: 20 inches<br />

                <dt>Solution: </dt>
                <dt> Apply Formula:</dt>
                C (cubic inches) = ( ( Length * 3.1415 * Diameter2) / 4)<br />
                C (cubic inches) = ((20*3.14 * 252)/4)<br />
                C (cubic inches) = ((62.8 * 625)/4)<br />
                C (cubic inches) = 39250/4<br />
                C (cubic inches) = 9817.1875<br />
                C (Gallons) = C (cubic inches) / 231<br />
                C (Gallons) = 9817.1875 /231<br />
                <dt> C (Gallons) = 42.49864718614719 </dt>
            </div>
        </Container>
        </div >

    )
}

export default CylindericalTank