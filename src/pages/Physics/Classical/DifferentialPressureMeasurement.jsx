import React, { useRef, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function DifferentialPressureMeasurement() {
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [CP, setCP] = useState(null);
    const [PD, setPD] = useState(null);
    const [FD, setFD] = useState(null);
    const [MFR, setMFR] = useState(null);
    const [DP, setDP] = useState(0)

    const calculate = () => {
       
        if (CP && PD && MFR && FD !== null) {  
            var res_1=PD*PD*PD*PD;
            var res_2=MFR*MFR;
            var res_3=(1.59923*CP*res_1*FD);
            const df = res_3 / res_2.toPrecision(6);
            setDP(df.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (DP !== 0) {
          
            setDP(0);
        }
        else {
            setShowPopup(true);
        }
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

    return (

        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'>Differential Pressure Measurement Calculator</h2>
                    <p>The difference in pressure between two points of a system, such as between the well bottom and wellhead or between the two sides of an orifice is called as Differential Pressure. The differential pressure typically measures the change in pressure of gases and liquids. It is measured as force per unit. Differential pressures are commonly used in industrial process systems. Differential pressure gauges have two inlet ports, each connected to one of the volumes whose pressure is to be monitored.</p>

                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>  Enter the change in pressure:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={CP}
                                        onChange={(event) => setCP(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Enter pipe diameter:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={PD}
                                        onChange={(event) => setPD(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Fluid density:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={FD}
                                        onChange={(event) => setFD(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Mass flow rate:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={MFR}
                                        onChange={(event) => setMFR(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Differential pressure:</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{DP.toString().substring(0, 7)}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>

                    </div>
                    <div className='mt-2'>
                        The difference in pressure between any two points of a system or component is known as differential pressure. This advanced online Differential Pressure Measurement Calculator is useful in calculating the pressure difference between two points of a system.<br />
                        <dt>Example</dt>
                        Calculate the pressure difference for the given details.<br />
                        Enter the change in pressure: 10 Bars<br />
                        Enter pipe diameter: 5 mm<br />
                        Fluid density: 20 kg/m3<br />
                        Mass flow rate: 15 kg/Hr<br />
                        <dt>Solution</dt>
                        <dt>Apply Formula:</dt>
                        K = (1.59923 * P * d4 * P) / W2<br />
                        K = 1.59923*10 * 54 *20 /152<br />
                        K = 15.9923 * 625 *20 / 225<br />
                        K = 15.9923 * 12500 / 225<br />
                        K = 199903.75 /225<br />
                        K = 888.461111<br />
                        <dt>Differential pressure: 888.461111</dt>

                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Formula</dt>
                                <dt> K = (1.59923 * P * d4 * P) / W2</dt>
                                Where,<br />
                                P = Change in Pressure<br />
                                d = Pipe Diameter<br />
                                P = Fluid Density<br />
                                W = Mass Flow Rate<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default DifferentialPressureMeasurement;