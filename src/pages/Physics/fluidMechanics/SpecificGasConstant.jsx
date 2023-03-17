import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function SpecificGasConstant() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Specific Gas Constant');
    // main
    const [MV, setMV] = useState(23);
    const [S, setS] = useState(15);
    const [R] = useState(8314);

    const [Svalue, setSvalue] = useState(0);
    const [MVvalue, setMVvalue] = useState(0);
    // ScalculatorReset
    const Scalculator = () => {
        const S = R / MV;
        setSvalue(S);
    }
    function ScalculatorReset() {
        setSvalue(0)
    }
    // MVcalculatorReset
    const MVcalculator = () => {
           const MV = R /S ;
           setMVvalue(MV);
    }
    function MVcalculatorReset() {
      setMVvalue(0);
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
    return (
        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'> Specific Gas Constant Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Specific Gas Constant" className='value-dropdown'>Specific Gas Constant</option>
                                    <option value='Molecular Weight' className='value-dropdown' >Molecular Weight (MW):</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Specific Gas Constant" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> S = R / MV</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Molecular Weight (MW):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={MV}
                                            onChange={(e) => setMV(e.target.value)} />
                                    </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Specific Gas Constant</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Svalue.toString().substring(0, 9)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Scalculator} />
                                    <ButtonA text="Reset" onClick={ScalculatorReset} />

                                </div>
                            </>}

                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Molecular Weight" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> S = R / MV</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Specific Gas Constant</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={S}
                                            onChange={(e) => setS(e.target.value)} />
                                    </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Molecular Weight</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{MVvalue.toString().substring(0, 9)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={MVcalculator} />
                                    <ButtonA text="Reset" onClick={MVcalculatorReset} />

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
                                <Example heading="Flow Rate or Discharge"
                                    title={<>Calculate the Specific gas Constant for the given details.<br />
                                        Molecular Weight (MW) = 25 kg/kmol</>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="S = R / MW "
                                    step1value="R = Universal Gas Constant = 8314 J/kmol-kelvin."
                                    step2="Specific Gas Constant(S) = 332.56 J/kg-K" />
                            }</div>

                    </div>
                    The Specific Gas Constant refers to the constant of gas which is equal to 8.314 joules per Kelvin or 1.985 calories per degree Celsius. This figure is the constant of proportionality [R] in the equation Pressure * Volume = n (number of moles) * (R) * Temperature, relating the pressure and volume of a quantity of gas to the absolute      <dt>temperature.</dt> The specific gas constant is denoted by the symbol 'R specific'.<br />
                    The Specific Gas Constant is defined as the gas constant divided by the molar mass of a gas. This online Specific Gas Constant Calculator is useful in calculating the gas constant.
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Specific Gas Constant :</dt>
                                S = R /  MW
                                <dt>Molecular Weight : </dt>
                                MW = R / S
                                <dt> Where, </dt>
                                S = Specific Gas Constant,<br />
                                MW = Molecular Weight,<br />
                                R = Universal Gas Constant = 8314 J/kmol-K.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default SpecificGasConstant