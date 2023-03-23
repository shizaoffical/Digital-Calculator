import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function WaterHoroscope() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Water Horsepower (WHP)');
    // main
    const [WHP, setWHP] = useState(23);
    const [Q, setQ] = useState(15);
    const [H, setH] = useState(14);
    // main states
    const [WHPvalue, setWHPvalue] = useState(23);
    const [Qvalue, setQvalue] = useState(15);
    const [Hvalue, setHvalue] = useState(14);
    // ScalculatorReset
    const WHPcalculator = () => {
        const WH = Q * H / 3960;
        setWHPvalue(WH.toPrecision(6));
    }
    function WHPcalculatorReset() {
        setWHPvalue(0)
    }
    // HcalculatorReset
    const Hcalculator = () => {
        const H = 3960 * WHP /Q;
        setHvalue(H.toPrecision(6));
    }
    function HcalculatorReset() {
        setHvalue(0);
    }
     // QcalculatorReset
     const Qcalculator = () => {
        const Q = 3960 * WHP /H;
        setQvalue(Q.toPrecision(6));
    }
    function QcalculatorReset() {
        setQvalue(0);
    }
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
        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'>Water Horsepower Calculator</h2>
                    <p>Water Horsepower refers to the energy or power that is added to water by the pump. In short, horsepower is termed as the imperial unit of power that has the ability to do the work at the rate of</p>
                    <ul>
                        <li>33,000 ft.lb per min or</li>
                        <li>550 ft.lb per second</li>
                    </ul>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value='Water Horsepower (WHP)' className='value-dropdown' >
                                        Water Horsepower (WHP):</option>
                                    <option value="Flow Rate or Discharge (Q)" className='value-dropdown'>
                                        Flow Rate or Discharge (Q):</option>
                                    <option value='Total Head (H)' className='value-dropdown' >Total Head (H):</option>
                                    
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* //////////////////////// Flow Rate or Discharge (Q) ///////////////////// */}
                            {selectCondition === "Flow Rate or Discharge (Q)" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> WHP = QH / 3960</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Water Horsepower (WHP):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={Q}
                                            onChange={(e) => setQ(e.target.value)} />HP
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Total Head (H):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={H}
                                            onChange={(e) => setH(e.target.value)} />ft
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Flow Rate or Discharge (Q)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Qvalue.toString().substring(0, 9)}gmp</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Qcalculator} />
                                    <ButtonA text="Reset" onClick={QcalculatorReset} />

                                </div>
                            </>}
                            {/* ///////////////////// Water Horsepower (WHP) ////////////////////// */}
                            {selectCondition === "Water Horsepower (WHP)" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> WHP = QH / 3960</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Flow Rate or Discharge (Q):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={Q}
                                            onChange={(e) => setQ(e.target.value)} />gpm
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Total Head (H):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={H}
                                            onChange={(e) => setH(e.target.value)} />ft
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Water Horsepower (WHP):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{WHPvalue.toString().substring(0, 9)}HP</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={WHPcalculator} />
                                    <ButtonA text="Reset" onClick={WHPcalculatorReset} />

                                </div>
                            </>}
                            {/* ///////////////////// Total Head (H) ////////////////////// */}
                            {selectCondition === "Total Head (H)" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> WHP = QH / 3960</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Flow Rate or Discharge (Q):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={Q}
                                            onChange={(e) => setQ(e.target.value)} />gpm
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Water Horsepower (WHP):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WHP}
                                            onChange={(e) => setWHP(e.target.value)} />HP
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Total Head (H):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Hvalue.toString().substring(0, 9)}H</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Hcalculator} />
                                    <ButtonA text="Reset" onClick={HcalculatorReset} />

                                </div>
                            </>}

                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }}
                                className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        <div>
                            {
                                textShow &&
                                <div ref={divRef}>
                                <Example heading="Flow Rate or Discharge"
                                    title={<>Calculate the Water Horsepower for the given details on water pumping.<br />
                                        Flow Rate or Discharge (Q) = 25 gpm<br />
                                        Total Head (H) = 15 ft<br /></>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="WHP = QH/3960"
                                    step1value="WHP = 25*15/3960"
                                    step2="WHP = 0.09 HP" /></div>
                            }</div>

                    </div>
                    <div className='my-2'>
                        The advanced online Water Horsepower Calculator is useful in calculating the power of the water pumping in various forms. Also various factors of water pumping like HP (horsepower), flow rate or discharge and Total Head can be calculated by using this calculator.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Water Horsepower :</dt><br />
                                WHP = QH/3960<br />
                                <dt>Flow Rate or Discharge :</dt><br />
                                Q =3960 WHP/H<br />
                                <dt> Total Head / Total Dynamic Head (TDH) :</dt>
                                It is defined as the total equivalent height that a fluid is to be pumped, taking into account friction losses in the pipe. Sum of discharge head, suction lift, and friction loss.<br />
                                H = 3960 WHP/Q<br />
                                <dt>Where,</dt><br />
                                WHP = Water Horsepower,<br />
                                Q = Flow Rate or Discharge,<br />
                                H = Total Head.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default WaterHoroscope;