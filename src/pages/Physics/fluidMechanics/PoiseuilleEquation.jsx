import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function PoiseuilleEquation() {


    const [show, setShow]= useState(false);
    const [textShow, settextShow] = useState(false);
    // main states
    const [V, setV] = useState(16);
    const [M, setM] = useState(20);
    const [P, setP] = useState(12);
     
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle:<div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
    })

    return (
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>Poiseuille's Equation Calculator</h2>
                Poiseuille's Equation Calculator
                Viscosity refers to the measure of a fluid's resistance to flow. Kinematic Viscosity is defined as the fluid's absolute that is divided by its density. The Kinematic Viscosity is denoted by the symbol 'v'. The kinematic viscosity is usually measured in stokes.
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label> Convection Heat Transfer Coefficient (h):</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                <input type="number" className='ms-3' value={H}
                                    onChange={(e) => setH(e.target.value)} />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label>Characteristic Length (L): </label></Col>
                            <Col md={6} sm={12} xs={12} >
                                <input type="number" className='ms-3' value={L}
                                    onChange={(e) => setL(e.target.value)} />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label>Thermal Conductivity of the Fluid (k):</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                <input type="number" className='ms-3' value={K}
                                    onChange={(e) => setK(e.target.value)} />
                            </Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Nusselt Number</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{NUvalue.toString().substring(0, 6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={reset} text="Reset" />
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <Example heading="Calculate the density of the fluid by using the kinematic formula."
                            title={<>Dynamic viscosity: 25 Nsm-2<br />Kinematic viscosity: 20 m2s-1</>}
                            step1={<>Solution <br />Apply Formula</>} step1heading={<>v = m/p<br />v= 25/20</>}
                            step1value="v = 1.25 kgm-3"
                            step2="Density: 1.25 kgm-3" />

                    }

                </div>
                <div className='mt-2'>
                    The viscosity is the fluid resistance to shear or flow and is a measure of the adhesive/cohesive or frictional fluid property. This advanced online Kinematic Viscosity Calculator is used to calculate the resistance of fluid or density of the fluid by applying the kinematic formula.
                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>v = m/p</dt>
                            <dt>Where,</dt>
                            v = Kinematic Viscosity [m2s-1]<br />
                            m = Dynamic Viscosity [Nsm-2]<br />
                            ρ = Density [kgm-3]<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >
    )
}

export default PoiseuilleEquation