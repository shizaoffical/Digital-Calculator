import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function DipoleCalculator() {
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

        const res_1 = (CA * (Math.PI)) / 180;
        const res_2 = (2 * Math.PI) / WAV;
        if (MC && HA && WAV && RD && ZA && CA !== null) {
            const dc = MC * Math.sin(res_2 * (HA - ZA));
            setDC(dc.toPrecision(6));
            const last = ((Math.cos(res_2 * WAV * Math.cos(res_1))) - (Math.cos(res_2 * WAV))) / (Math.sin(res_1));
            const ew = ((60 * MC) / RD) * last;
            setEW(ew.toPrecision(6));
            const mv = (MC / (2 * Math.PI * RD)) * last;
            setMV(mv.toPrecision(6));
            const pd = ((15 * Math.pow(MC, 2)) / (Math.PI * Math.pow(RD, 2))) * Math.pow(last, 2)
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
                    <h2 className='text-center fw-bold'>Dipole Antenna Calculator</h2>
                    <p>To use dipole antenna calculator, Write the values of required input boxes and hit calculate button </p>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Magnetic Current:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={MC}
                                        onChange={(event) => setMC(parseFloat(event.target.value))} text="lm"/> 
                                         </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Half antenna length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={HA}
                                        onChange={(event) => setHA(parseFloat(event.target.value))} text="L"/> 
                                       </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Wave Length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={WAV}
                                        onChange={(event) => setWAV(parseFloat(event.target.value))}text="λ"/>
                                        </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Radius:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={RD}
                                        onChange={(event) => setRD(parseFloat(event.target.value))}text="r" />
                                        </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Z-axis length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={ZA}
                                        onChange={(event) => setZA(parseFloat(event.target.value))} text="z" />
                                           </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Coordinate Angle:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={CA}
                                        onChange={(event) => setCA(parseFloat(event.target.value))} text="θ"/> 
                                         </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Dipole Current:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{DC.toString().substring(0, 9)} </button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Electric Wave:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{EW.toString().substring(0, 9)} Eθ </button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Magnetic Wave:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{MV.toString().substring(0, 10)} HΦ</button></Col>
                            </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>Average radiated power density:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{PD.toString().substring(0, 9)} Pd</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>
                    </div>
                    <div className='mt-2'>
                        A dipole antenna is a straight electrical conductor measuring 1/2 wavelength from end to end and connected at the center to a radio-frequency (RF) feed line. A dipole antenna is a radio antenna that is made of a simple wire, with a center-fed driven element. A dipole Antenna is also called as doublet antenna; half-wave dipole.

                        Dipole means "two poles". The wire or rod is split at the center with an insulator. Each end at the center is connected to the feed line. In short, a dipole is an electrical device that sends or receives radio or television signals. The advanced online Dipole Antenna Calculator is useful in calculating and finding the dipole current, Electric wave, Magnetic wave and Average radiated power density of antennas.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Current (I) = Im Sin (β(L - |z|) )</dt>
                                <dt>Electric Wave (Eθ) = (60 * Im / r) * [(Cos (βL Cos&theta) - Cos(βL) ) / Sinθ] </dt>
                                <dt>Magnetic Wave (Hφ) = (Im / 2 πr ) *[ ( Cos (βL Cos&theta) - Cos(βL) ) / Sinθ ]</dt>
                                <dt>Average radiated power density (Pd) = (15* Im2 / πr2) ×[ ( Cos (βL Cos&theta) - Cos(βL) ) / Sinθ ] 2</dt>
                                <dt>Where,</dt>
                                β = 2π / λ
                                λ = Wave Length
                                Im = Magnetic Current
                                L = Half Antenna Length
                                r = radius
                                θ = Angle
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default DipoleCalculator;