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
    const [pressure, setPressure] = useState('');
    const [radius, setRadius] = useState('');
    const [viscosity, setViscosity] = useState('');
    const [flowRate, setFlowRate] = useState('');
  
    function calculateFlowRate(e) {
      e.preventDefault();
      const flowRate = ((Math.PI * Math.pow(radius, 4)) / (8 * viscosity)) * pressure;
      setFlowRate(flowRate.toFixed(2));
    }
  
     
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle:"hello",
        onAfterPrint: () => alert("print success"),
    })
    function reset(){
        setPressure('');
        setPressure('');
        setFlowRate('');
        setViscosity('');
    }

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
                                <label> Pressure Difference Between The Two Ends:</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                <input type="number" className='ms-3' value={pressure}
                                 onChange={(e) => setPressure(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label>Internal Radius of the Tube:</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                <input type="number" className='ms-3' value={radius} 
                                onChange={(e) => setRadius(e.target.value)} />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label>Absolute Viscosity: </label></Col>
                            <Col md={6} sm={12} xs={12} >
                                <input type="number" className='ms-3' value={viscosity} 
                                onChange={(e) => setViscosity(e.target.value)} />
                            </Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Nusselt Number</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{flowRate.toString().substring(0, 6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculateFlowRate} text="Calculate" />
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