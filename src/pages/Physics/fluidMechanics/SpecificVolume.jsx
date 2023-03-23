import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Reference from '../../../components/Reference';
import { Link } from 'react-router-dom';

function SpecificVolume() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Specific Volume(v)');
    // main
    const [V, setV] = useState(23);
    const [D, setD] = useState(15);

    const [Dvalue, setDvalue] = useState(0);
    const [Vvalue, setVvalue] = useState(0);
    // VcalculatorReset
    const Vcalculator=() => {
        const V = 1 / D;
        setVvalue(V.toPrecision(6));
    }
    function VcalculatorReset() {
        setVvalue(0)
    }
    // DcalculatorReset
    const Dcalculator=() => {
        const D= 1 / V;
        setDvalue(D.toPrecision(6));
    }
    function DcalculatorReset() {
        setDvalue(0)
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
                    <h2 className='text-center fw-bold'> Specific Volume Calculator</h2>
                    <div className='polygon-calculator-div '>
                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Specific Volume(v)" className='value-dropdown'>Specific Volume(v)</option>
                                    <option value='Density(ρ)' className='value-dropdown' >Density(ρ)</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Specific Volume(v)" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> V = 1 / p</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} >
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Density(ρ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={D}
                                            onChange={(e) => setD(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Specific Volume(v)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Vvalue.toString().substring(0, 9)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Vcalculator} />
                                    <ButtonA text="Reset" onClick={VcalculatorReset} />

                                </div>
                            </>}

                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Density(ρ)" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>p = 1 / v</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} >
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Specific Volume(v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={V}
                                            onChange={(e) => setV(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Density(ρ):</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Dvalue.toString().substring(0, 9)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Dcalculator} />
                                    <ButtonA text="Reset" onClick={DcalculatorReset} />

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
                                    title={<>Calculate the specific volume for the given details.<br />
                                        Density (ρ) = 25 kg/m3</>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="V = 1/ ρ"
                                    step1value="V = 1/25 kg/m3"
                                    step2="Specific Volume (v) = 0.04 m3/kg" />
                            }</div>

                    </div>
                    Specific volume refers to the volume that is occupied by a unit of mass of a material or substance, also termed as property of materials. The specific volume is the reciprocal of the density. It is denoted by the symbol "v".

                    In short, specific is termed as volume per unit mass of a substance. This online Specific Volume Calculator is useful in calculating the specific volume of a mass unit of substance.
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>Specific Volume : </dt>
                                V = 1/ρ
                                 <dt>Density :</dt>
                                ρ =1/V <dt>Where,</dt>
                                v = Specific Volume,
                                ρ = Density.
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                    <Reference
                        step1={<><Link className='Reference-link'
                            to="https://www.thoughtco.com/specific-volume-definition-and-examples-4175807"
                            target="_blank">Specific Volume</Link> What It Means And How to Calculate It. </>}
                            step2={<>Specific Volume, by<Link className='Reference-link'
                            to="https://www.grc.nasa.gov/www/k-12/airplane/specvol.html"
                            target="_blank">grc.nasa.gov</Link>  </>}
                        />
                </div>
            </Container >
        </div >

    )
}

export default SpecificVolume