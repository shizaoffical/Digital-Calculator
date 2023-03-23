import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';


function PumpEfficiency() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('pump efficency');

    const [PE, setPE] = useState(23);
    const [WH, setWH] = useState(15);
    const [BH, setBH] = useState(25);

    // main states
    const [PEvalue, setPEvalue] = useState(0)
    const [WHvalue, setWHvalue] = useState(0)
    const [BHvalue, setBHvalue] = useState(0)
    // functionality
    const PEcalculator = () => {
        const PE = WH / BH;
        setPEvalue(PE.toPrecision(6));
    }
    function PEcalculatorReset() {
        setPEvalue(0);
        setWH(0);
        setBH(0);
    }
    const WHcalculator = () => {
        const WH = PE * BH;
        setWHvalue(WH.toPrecision(6));
    }
    function WHcalculatorReset() {
        setWHvalue(0);
        setBH(0);
        setPE(0);
    }
    const BHcalculator = () => {
        const BH = WH / PE;
        setBHvalue(BH.toPrecision(6));
    }
    function BHcalculatorReset() {
        setBHvalue(0);
        setWH(0);
        setPE(0);
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
                    <h2 className='text-center fw-bold'> Pump Efficiency Calculator</h2>
                    Pump Efficiency refers to the ratio of energy that is converted into useful work to the energy applied to the pump shaft or the energy difference in the water.
                    <div className='polygon-calculator-div '>
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="pump efficency" className='value-dropdown'>pump efficency</option>
                                    <option value='water horoscope' className='value-dropdown' >water horoscope</option>
                                    <option value='brake horoscope' className='value-dropdown' >brake horoscope</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "pump efficency" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>water Horsepower (BHP):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WH}
                                            onChange={(e) => setWH(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Brake Horsepower (BHP):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={BH}
                                            onChange={(e) => setBH(e.target.value)} />HP
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Pump Effiency</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PEvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PEcalculator} />
                                    <ButtonA text="Reset" onClick={PEcalculatorReset} />
                                </div>
                            </>}

                            {/* ////////////////////////////////////  FLOW Area /////////////////////////////// */}
                            {selectCondition === "water horoscope" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Pump Efficiency : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={PE}
                                        onChange={(e) => setPE(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Brake Horoscope </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number me-2" className='ms-3 me-2' value={BH}
                                            onChange={(e) => setBH(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Water Horoscope :</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{WHvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={WHcalculator} />
                                    <ButtonA text="Reset" onClick={WHcalculatorReset} />
                                </div>
                            </>}
                            {/* ////////////////////////////////////  FLOW Velocity /////////////////////////////// */}
                            {selectCondition === "brake horoscope" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Pump Effficiency : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={PE}
                                            onChange={(e) => setPE(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Water Horoscope : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={WH}
                                            onChange={(e) => setWH(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Brake Hoeoscope : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{BHvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={BHcalculator} />
                                    <ButtonA text="Reset" onClick={BHcalculatorReset} />
                                </div>
                            </>}
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }}
                                className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        <div>
                            {textShow &&
                            <div ref={divRef}>
                                <Example heading="Example"
                                    title={<>Calculate the Pump efficiency for the given details of horsepower.
                                        <br />Water Horsepower (WHP) = 25 HP<br />Brake Horsepower (BHP) = 20 HP</>}
                                    step1={<>Solution:<br />Apply Formula:</>}
                                    step1heading={<>n= WHP / BHP<br />
                                        n = 25/20<br />
                                        n = 1.25<br /></>}
                                    step2="Pump Efficiency (n) = 1.25" /></div>
                            }
                        </div>

                    </div>
                    <div className='mt-1'>
                        Pump efficiency is termed as the ratio of the power or energy imparted on the fluid by the pump in relation to the power supplied to drive the pump.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Pump Efficiency :<br /> <span>n= WHP / BHP</span></dt>
                                <dt>Water Horsepowe :<br /><span>WHP = n*BHP</span> </dt>
                                <dt>Brake Horsepower :<br /> <span>BHP = WHP /n</span> </dt>
                                <dt>Where, </dt>
                                n = Pump Efficiency,<br />
                                WHP = Water Horsepower,<br />
                                BHP = Brake Horsepower.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default PumpEfficiency