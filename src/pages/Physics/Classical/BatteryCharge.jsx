import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
import Reference from '../../../components/Reference';
import { Link } from 'react-router-dom';
function BatterCharge() {
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [BC, setBC] = useState(null);
    const [CRC, setCRC] = useState(null);
    const [AEL, setAEL] = useState(0);
    const [BEL, setBEL] = useState(0);
    const [CEL, setCEL] = useState(0);
    const [DEL, setDEL] = useState(0);
    const [EEL, setEEL] = useState(0);
    

    const calculate = () => {
        if (BC && CRC !== null) {
            const ael = ((BC / CRC ) * 11 / 10)
            setAEL(ael.toPrecision(8));
            const bel = ((BC / CRC ) * 12 / 10)
            setBEL(bel.toPrecision(8));
             const cel = ((BC / CRC ) * 13 / 10)
            setCEL(cel.toPrecision(8));
             const del = ((BC / CRC ) * 14 / 10)
            setDEL(del.toPrecision(8));
             const eel = ((BC / CRC ) * 10 / 10)
            setEEL(eel.toPrecision(8));
           
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (BC && CRC !== 0) {
            setBC(0);
            setCRC(0);
            setAEL(0)
            setBEL(0);
            setCEL(0);
            setDEL(0);
            setEEL(0);
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
                    <h2 className='text-center fw-bold'> Battery Charge Calculator</h2>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Battery Capacity (mAh):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={BC}
                                        onChange={(event) => setBC(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Charge Rate Current (mA):</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <Input value={CRC}
                                        onChange={(event) => setCRC(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <center>Maximum Time To Full Charge</center>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>(10% Efficiency Loss):</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{AEL.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>(20% Efficiency Loss):</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{BEL.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>(30% Efficiency Loss):</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{CEL.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>(40% Efficiency Loss):</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{DEL.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>(No Efficiency Loss):</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{EEL.toString().substring(0, 9)}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>

                    </div>
                    <div className='mt-2'>
                        <dt> What does battery charge time mean? </dt>
                        Charging time is one of the main challenges of secondary batteries. This parameter indicates how long it takes for a fully discharged cell to be fully charged. In portable applications, such as cell phones, laptops, and similar cases, the charging time is important.<br/>
                        <dt>  Example:</dt>
                        Calculate the maximum time taken by a battery to charge by the given details.<br/>
                        Battery Capacity (mAh) = 25<br/>
                        Charge Rate Current (mA) = 30<br/>
                        <dt>Solution: </dt>
                        <dt> Apply formula:</dt>
                        MTFC (10% Efficiency Loss)  = ((BC / CRC) * 11) / 10<br/>
                        = (25/30)*11 / 10<br/>
                        <dt>MTFC (10% Efficiency Loss) = 0.916666 (Hours)</dt>
                        MTFC (20% Efficiency Loss) = ((BC / CRC) * 12) / 10<br/>
                        = (25/30)*11 / 1<br/>
                       <dt> MTFC (20% Efficiency Loss) =1(Hours) </dt>
                        MTFC (30% Efficiency Loss) =((BC / CRC) * 13) / 10<br/>
                        =(25/30)*1 /  10<br/>
                        = 1.08333 <br/>
                        <dt> MTFC (30% Efficiency Loss) = 1.083333(Hours)</dt>
                        MTFC (40% Efficiency Loss) = ((BC / CRC) * 14) /  10 <br/>
                        =(25/30)*14 / 10<br/>
                        = 1.1666<br/>
                        <dt>MTFC (40% Efficiency Loss) = 1.1666 (Hours) </dt>
                        MTFC (No Efficiency Loss) = ((BC / CRC) * 10) /  10<br/>
                        =(25/30)*10 / 10<br/>
                        = 0.83333<br/>
                        <dt> MTFC (No Efficiency Loss) = 0.83333 (Hours)</dt>
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                MTFC (10% Efficiency Loss) =   ((BC / CRC) * 11) /   10 <br/>
                                MTFC (20% Efficiency Loss) =  ((BC / CRC) * 12) /  10  <br/>
                                MTFC (30% Efficiency Loss) = ((BC / CRC) * 13) / 10  <br/>
                                MTFC (40% Efficiency Loss) =   ((BC / CRC) * 14) /    10 <br/>
                                MTFC (No Efficiency Loss) = ((BC / CRC) * 10) / 10 <br/>
                                <dt> Where, </dt>
                                MTFC - Maximum Time To Full Charge <br/>
                                BC - Battery Capacity <br/>
                                CRC - Charge Rate Current <br/>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                    <Reference
                        step1={<> Harbid, T.How Long Does It Take To Charge A Car Battery - And Which Method Should I Use? <Link className='Reference-link'
                            to="https://www.cashcarsbuyer.com/how-long-does-it-take-to-charge-a-car-battery/"
                            target="_blank"> cashcarsbuyer.com</Link> </>}
                            step2={<> Charging Information For Lead Acid Batteries – Battery University.
                             <Link className='Reference-link'
                            to="https://batteryuniversity.com/article/bu-403-charging-lead-acid"
                            target="_blank">Batteryuniversity.com</Link> </>} 
                            step3={<> How to Calculate the <Link className='Reference-link'
                            to="https://www.electricaltechnology.org/2013/03/easy-charging-time-formula-for.html"
                            target="_blank">Battery Charging Time</Link>  
                             & Battery Charging Current - Examples. ELECTRICAL TECHNOLOGY. </>}
                    />
                </div>
            </Container>
        </div >

    )
}

export default BatterCharge;