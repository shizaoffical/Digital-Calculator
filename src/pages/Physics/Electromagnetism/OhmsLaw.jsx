import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';

function OhmLaw() {
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [MC, setMC] = useState(null);
    const [HA, setHA] = useState(null);
    const [WAV, setWAV] = useState(null);
    const [RD, setRD] = useState(null);
    const [ZA, setZA] = useState(null);
    const [CA, setCA] = useState(null);
    const [DC, setDC] = useState(0)
    const [EW, setEW] = useState(0)
    const [MV, setMV] = useState(0)
    const [PD, setPD] = useState(0)

    const calculate = () => {
        
       const res_1=(CA*(Math.PI))/180;
       const res_2=(2*Math.PI)/WAV;
        if (MC && HA && WAV && RD && ZA && CA !== null) {
            const dc = MC*Math.sin(res_2*(HA-ZA));
            setDC(dc.toPrecision(6));
            const last =((Math.cos(res_2*WAV*Math.cos(res_1)))-(Math.cos(res_2*WAV)))/(Math.sin(res_1));
            const ew=((60*MC)/RD)*last;
            setEW(ew.toPrecision(6));
            const mv =(MC/(2*Math.PI*RD))*last;
            setMV(mv.toPrecision(6));
            const pd =((15*Math.pow(MC,2))/(Math.PI*Math.pow(RD,2)))*Math.pow(last,2)
            setPD(pd.toPrecision(6))
            console.log("hello");
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (DC && EW && MV && PD !== 0) {
            setMC(0);
            setHA(0);
            setWAV(0);
            setRD(0);
            setZA(0);
            setCA(0);
            setDC(0);
            setEW(0);
            setMV(0);
            setPD(0);
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

    
    return (

        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'>Aperture Antenna Calculator</h2>
                    <p>Aperture Antenna refers to a receiver of the radio waves. It is the measure of the antenna's efficiency at its transmitting and receiving radio waves. Aperture is defined as the area that is oriented perpendicular to the direction of an incoming radio wave. The aperture would cut off the same amount of power from that wave as is produced by the antenna receiving it.</p>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Magnetic Current:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={MC}
                                        onChange={(event) => setMC(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Half antenna length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={HA}
                                        onChange={(event) => setHA(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Wave Length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={WAV}
                                        onChange={(event) => setWAV(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={RD}
                                        onChange={(event) => setRD(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Z-axis length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={ZA}
                                        onChange={(event) => setZA(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Coordinate Angle:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={CA}
                                        onChange={(event) => setCA(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Dipole Current:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{DC.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Electric Wave:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{EW.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Magnetic Wave:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{MV.toString().substring(0, 10)}</button></Col>
                            </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Average radiated power density:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{PD.toString().substring(0, 9)}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>
                    </div>
                    <div className='mt-2'>
                        The advanced online Aperture Antenna Calculator is used to calculate the electric field radiated by the aperture antennas at two different angles by applying the formula for different angles.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Eθ = [ ( j*k*a2*E0*e-jkr ) / r ] * Sinφ [ ( J1*k*a*Sinθ) / k*a*Sinθ ]</dt>
                                <dt>  Eφ = [ ( j*k*a2*E0*e-jkr ) / r ] *(Cosθ*Cosφ) [(J1*k*a*Sinθ) / k*a*Sinθ]</dt>
                                Where,
                                k = 2π / λ
                                λ = Wave Length
                                E0 = 8.8541878176 * 10-12F/m (electric constant)
                                θ = Coordinate Angle 1
                                φ = Coordinate Angle 2
                                a = Radius of Circular Aperture
                                r = Distance of the observation point from the Origin
                                j = Electric Current Density
                                J1 = Electric Current Density for 1st element
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default OhmLaw;