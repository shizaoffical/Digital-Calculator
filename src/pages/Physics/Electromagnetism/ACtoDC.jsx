import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import ACtoDC1 from "../../../images/Ac-Dc1.png";
import { Link } from 'react-router-dom';
import Reference from '../../../components/Reference';
import ACtoDC2 from "../../../images/Ac-Dc2.png";

function ACtoDC() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Enter AC Current:');
    // states
    // const [resetCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [AC, setAC] = useState(null);
    const [ACvalue, setACvalue] = useState(0);
    const [DC, setDC] = useState(null);
    const [DCvalue, setDCvalue] = useState(0);

    const calculate = () => {
        if (AC !== null) {
            const DC = AC * 0.636;
            setDCvalue(DC.toPrecision(6));
            console.log("dcvalue enter")
        }
        else {
            setShowPopup(true);
            console.log("dcvalue enter pop")

        }
    }
    const handleResetClick = () => {
        if (DCvalue !== 0) {
            setDCvalue(0);
            console.log("dc value reset enter ")
        }
        else {
            setShowPopup(true);
            console.log("dc value enter reset pop")
        }
    };

const ACcalculate = () => {
        if (DC !== null) {
            const AC = DC * 0.636;
            setACvalue(AC.toPrecision(6));
            console.log("acvalue enter pop")

        }
        else {
            setShowPopup(true);
            console.log("acvalue enter pop")

        }
    }
    const AChandleResetClick = () => {
        if (ACvalue !== 0) {
            setACvalue(0);
            console.log("ac value reset enter ")

        }
        else {
            setShowPopup(true);
            console.log("ac value enter reset pop")

        }
    };

     const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    // handle change
    const handleSelectChange = (event) => {
        setSelectCondition(event.target.value);
    }
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
                    <h2 className='text-center fw-bold'>AC to DC calculate</h2>
                    <p>To convert ac voltage to dc voltage enter value in given field by using our ac to dc converter calculator.</p>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Enter AC Current:" className='value-dropdown'>Enter AC Current:</option>
                                    <option value="Enter DC Current:" className='value-dropdown'>Enter DC Current:</option>
                                </select>
                            </Col>
                        </Row>


                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {selectCondition === "Enter AC Current:" && <>

                                <Row style={{ alignItems: "center", textAlign: "center" }}>
                                    <Col md={6} sm={12} xs={12} >
                                        <label>  Enter AC Current:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={AC}
                                            onChange={(event) => setAC(event.target.value)} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> DC Current:</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{DCvalue.toString().substring(0, 6)}volts</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={calculate} text="Calaulate" />
                                    <ButtonA onClick={handleResetClick} text="Reset" />
                                    {showPopup && <Popup onClick={togglePopup}/>}
                                </div>
                            </>}
                            {/* AC */}
                            {selectCondition === "Enter DC Current:" && <>

                                <Row style={{ alignItems: "center", textAlign: "center" }}>
                                    <Col md={6} sm={12} xs={12} >
                                        <label>  Enter DC Current:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <input type="number" value={DC}
                                            onChange={(event) => setDC(event.target.value)} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>AC Current:</dt> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{ACvalue.toString().substring(0, 6)}volts</button></Col>
                                </Row>

                                <div className='text-center'>
                                    <ButtonA onClick={ACcalculate} text="Calaulate" />
                                    <ButtonA onClick={AChandleResetClick} text="Reset" />
                                    {showPopup && <>{ACvalue > 0 ? <Popup title1/>
                                    : <Popup title2/>}</>}
                                </div>
                            </>}
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        {
                            textShow &&
                            <Example heading=" Example"
                                title={<>
                                    how to convert ac to dc using this formula<br />
                                    Convert the given value of Direct Current (DC) to Alternating Current (AC).<br />
                                    DC Current = 15<br />
                                </>}
                                step1={<>Solution : Apply Formula</>}
                                step1heading={<>AC = DC / 0.636<br />
                                    AC = 15/0.636</>} step1value="AC = 23.584 volts"
                                step2="AC Current = 23.584 volt" />
                        }

                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                DC to AC conversion formula
                                <dt>AC = DC / 0.636</dt>
                                AC to DC conversion formula
                                <dt>DC = AC * 0.636 </dt>
                                <dt> Where, </dt>
                                AC - Alternating Current
                                DC - Direct Current
                                0.636 - Constant
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                    <div className='my-3'>
                        This Calculator is combination of ac to dc calculator and dc to ac calculator. AC and DC are electric supply current adaptors. AC refers to Alternating Current and DC refers to Direct Current.<br />

                        An alternating current (AC) refers to an electrical current whose magnitude and direction vary cyclically, as opposed to direct current (DC). The direction of Direct Current (DC) always remains constant.
                        <br />
                        Direct current (DC) is used to charge batteries, and also used in nearly all electronic systems as the power supply. Electric power that is being distributed all over is nearly all Alternating Current (AC) today.<br />
                        <div className='my-2 text-center'>
                            <img src={ACtoDC1} alt="" className='my-2' width="80%" />
                        </div>

                        <br />
                        The advanced online AC to DC Converter is used to calculate and convert the electric currents from Alternating Current (AC) to Direct Current (DC) by applying the formula.
                        <dt>Structure Diagram of AC to DC shown below.</dt>
                        <div className='my-2 text-center'>
                            <img src={ACtoDC2} alt="" className='my-2' width="80%" />
                        </div>
                    </div>
                    <Reference
                        step1={<>MIT School of Engineering | » What’s the difference between AC and DC?
                            <Link className='Reference-link'
                                to="https://engineering.mit.edu/engage/ask-an-engineer/whats-the-difference-between-ac-and-dc/"
                                target="_blank">Mit Engineering</Link> </>}
                        step2={<>AC vs DC (
                            <Link className='Reference-link'
                                to="https://www.diffen.com/difference/Alternating_Current_vs_Direct_Current"
                                target="_blank">Alternating Current vs Direct Current)</Link>
                            - Difference and Comparison | Diffen.com </>}
                        step3={<>Alternating Current (AC) vs. Direct Current (DC) -
                            <Link className='Reference-link'
                                to="https://learn.sparkfun.com/tutorials/alternating-current-ac-vs-direct-current-dc/all#alternating-current-ac"
                                target="_blank">Learn.sparkfun.com.</Link> </>}
                    />
                </div>
            </Container>
        </div >

    )
}

export default ACtoDC;