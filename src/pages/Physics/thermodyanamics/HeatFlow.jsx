import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function HeatFlow() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [HS, setHS] = useState(null);
    const [SF, setSF] = useState(null);
    const [MB, setMB] = useState(null);
    const [AR, setAR] = useState(null);
    const [TH, setTH] = useState(null);
    const [HF, setHF] = useState(0);
    const calculate = () => {
        if (HS && SF && MB && AR && TH !== null) {
            const hf = (MB * AR * (HS - SF)) / TH;
            setHF(hf.toPrecision(8));
        }
        else {
            setShowPopup(true);
        }
    }
    function Reset() {
        if (HS && SF && MB && AR && TH !== 0) {
            setAR(0);
            setHF(0);
            setHS(0);
            setMB(0);
            setSF(0);
            setTH(0);
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
                <h2 className='text-center fw-bold'>Heat Flow  </h2>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={6} sm={12} xs={12} ><label> Temperature of Hot Surface (F):</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={HS}
                                    onChange={(e) => setHS(e.target.value)} /> </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} ><label>Temperature of Cold Surface (F):</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={SF}
                                    onChange={(e) => setSF(e.target.value)} /> </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} > <label> Conductivity of Material (Btu-in): </label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={MB}
                                    onChange={(e) => setMB(e.target.value)} /> </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} > <label> Area (ft2): </label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={AR}
                                    onChange={(e) => setAR(e.target.value)} /> </Col>
                        </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} > <label> Thickness (inches): </label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={TH}
                                    onChange={(e) => setTH(e.target.value)} /> </Col>
                        </Row>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Total Surface Area(TSA) of Cone:</dt>[ πr(l+r) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{HF.toString().substring(0, 5)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={Reset} text="Reset" />
                        {showPopup && <Popup onClick={togglePopup} />}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                            <Example heading="Example" title={<>
                                Calculate the Heat Flow for the given details.<br />
                                Temperature of Hot Surface (F) = 5<br />
                                Temperature of Cold Surface (F) = 2<br />
                                Conductivity of Material Btu-in./(h�ft2��F) = 3<br />
                                Area (ft2) = 4<br />
                                Thickness (inches) = 10<br />
                            </>}
                                step1={<>Solution : Apply Formula</>}
                                step1heading={<>Calculated Heat Flow= (Conductivity of Material*Area (ft2)*(Temperature of Hot Surface (F)-Temperature of Cold Surface(F))/Thickness(inches))<br />
                                    Calculated Heat Flow = (3*4*5-2)/10<br/>
                                    Calculated Heat Flow = 12*3/10<br/>
                                </>}
                                step1value=" Calculated Heat Flow = 36/10"
                                step2=" Calculated Heat Flow = 3.600 (Btu/h)" /></div>
                    }

                </div>
                <div className="my-2">
                    Heat Flow refers to the movement of heat from one body to another like gas, liquid, solid, or any of the combinations thereof by means of radiation, convection, or conduction. Heat Flow is defined as the energy that is in transit due to temperature difference. Heat Flow is also called as heat transfer, heat exchange, or transfer of thermal energy. The larger the temperature gradient, the higher the rate of heat transfer.

                    Heat Flow is occurred when there is existence of temperature difference in a medium or between media. The basic requirement for heat transfer is the presence of temperature difference.
                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>Calculated Heat Flow = (Conductivity of Material*Area(ft2)*(Temperature of
                                Hot Surface(F)-Temperature of Cold Surface(F))/Thickness(inches))</dt>
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >

    )
}

export default HeatFlow;