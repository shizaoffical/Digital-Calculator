import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Rectangular() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
   

    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'calculator',
        onafterprint: () => alert("print success"),
    })
    return (
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>Rectangular Weir Flow Rate Calculator</h2>
                <p>Rectangular Weir Flow rate is used to measure the flow rates in open channel of river like rivers and canals. The Rectangular Weir Flow Rate calculator is used to measure the water flow rate. The flow rate over a weir is a function of the head on the weir.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={12} sm={12} xs={12} >
                                <label>  Radius:<input type="number" className='ms-3' value={radius}
                                    onChange={(e) => setRadius(e.target.value)} /> </label></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={12} sm={12} xs={12} >
                                <label>  Height:<input type="number" className='ms-3' value={height}
                                    onChange={(e) => setHeight(e.target.value)} /> </label></Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>
                        
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Total Surface Area(TSA) of Cone:</dt>[ πr(l+r) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{tsa.toString().substring(0, 5)}</button></Col>
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
                        <Example heading="Example" title={<>Calculate the Rectangular Weir Flow Rate for the given details.<br />
                            Head on the Weir (h) = 25 m<br/>
                            Width of the Weir (b) = 20 m<br/>
                            Discharge Constant (Cd) = 15<br/></>}
                            step1={<>Solution:<br/>Apply Formula:</>}
                             step1heading="q = 2/3 ×Cd ×b × (2g)1/2 ×h3/2" step1value=" q = 2/3*15*20*(2*9.81 m/s2)1/2*253/2"
                            step2="Flow Rate =110736.17295175052 m3/s"  />
                    }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <span>The Bernoulli's equation is as follows</span>
                            <dt className='Fw-bold'>q = 2/3 ×Cd ×b ×(2g)1/2 ×h3/2 </dt><br />
                            <dt>Where</dt>
                            q = Flow Rate<br />
                            Cd = Discharge Constant<br />
                            b = Width of the Weir<br />
                            g = gravity (9.81 m/s2)<br />
                            h = Head on the Weir<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                This online advanced Rectangular Weir Flow Rate Calculator is used to measure the water flow rate in the rivers and canals.

            </div>
        </Container>
        </div >

    )
}

export default Rectangular