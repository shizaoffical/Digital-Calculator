import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';

function Circle() {
    const [show, setShow]= useState(false);
    const [textShow, settextShow] = useState(false);
      const [radius, setRadius] = useState(12.5);
      const [diameter, setDiameter] = useState(0);
      const [circumference, setCircumference] = useState(0)
      const [area, setArea] =useState(0);
      const calculate = () => {
        const r = parseFloat(radius);
        setDiameter(2* r);
        setCircumference(2* Math.PI *r);
        setArea(Math.PI* r*r);

      }
    function reset() {
        setDiameter(0);
        setCircumference(0);
        setArea(0)
        setRadius(12.5);

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
                    <h2 className='text-center fw-bold'>Circle calculate</h2>
                    <p>Fill out the necessary input boxes and press the calculate button to use the circle calculator.
                    </p>
                    <div className='polygon-calculator-div '>
                        <button className='  polygon-calculator-btn' onClick={handlePrint}>Print</button>
                        <div className="polygon-calculator px-2" ref={componentsRef}>

                            <Row style={{ alignItems: "center", textAlign: "center" }}>
                                <Col md={12} sm={12} xs={12} >
                                    <label>  Number of Sides:<br /><input type="number" value={radius}
                                        onChange={(event) => setRadius(event.target.value)} /> </label></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2"> 
                                <Col md={6} sm={12} xs={12}><dt>Areaof Circle</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='polygon-claculator-value-btn'>{area.toString().substring(0,5)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2"> 
                                <Col md={6} sm={12} xs={12}>Diameter of Circle</Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='polygon-claculator-value-btn'>{diameter.toString().substring(0,5)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2"> 
                                <Col md={6} sm={12} xs={12}>circumference of Circle</Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='polygon-claculator-value-btn'>{circumference.toString().substring(0,5)}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <button className="polygon-calculator-btn" onClick={calculate}>Calculate</button>
                            <button className="polygon-calculator-btn" onClick={reset} >Reset</button>
                        </div>
                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        {
                            textShow &&
                            <div className='text-center'> <h4 className='fw-bold'>Example</h4>
                             Find the area, diameter and circumference of a circle with the given radius 4.<br/>

                                <span className='fw-bold' style={{ color: "#F58648" }}>step 1: </span> Find the area.<br/>
                                Area = πr² = 3.14 * 4² = 3.14 * 16 = 50.24<br/>
                                <span className='fw-bold' style={{ color: "#F58648" }}>step 2: </span> Find the diameter.<br/>
                                Diameter = 2r = 2 *4 = 8<br/>
                                <span className='fw-bold' style={{ color: "#F58648" }}>step 3: </span> Find the circumference.<br/>
                                Circumference = πd = 3.14 *8 = 25.12<br/>
                            </div>
                        }

                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <button className="polygon-calculator-btn mb-2" onClick={() => setShow(true)}>Formula</button>
                        {show ?
                            <div className='formula-backside'>
                               <dt className='Fw-bold'>Area of Circle </dt>= πr²<br/>
                               <dt>Circumference of Circle </dt>= 2πr = πd<br/>
                               <dt>Area of Sector</dt>= πr² (θ/360) = ½ *arc * (angle in degree)<br/>
                               <dt> where,</dt>r = radius <br/>π = 3.14<br/>
                                <button className="polygon-calculator-btn" onClick={() => setShow(false)} > Close  Formula</button>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default Circle;