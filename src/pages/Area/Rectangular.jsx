import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Rectangular() {


    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [x , setX] = useState(5);
    const [y , setY] = useState(3);
    const [r , setR] = useState(0);
    const [angle , setangle] = useState(0);

    const calculate = () => {
        const r =Math.sqrt(x * x  + y * y);
        setR(r) ;
        const angle =Math.atan(y/x);
        setangle(angle);
    }

    function reset() {
        setX(0);
        setY(0);
        setR("");
        setangle("");
    }
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
                <h2 className='text-center fw-bold'> Rectangular Polar Conversion Calculator</h2>
                <p>The rectangular coordinates are converted to polar coordinates using the Rectangular to Polar Conversion Calculator, and vice versa. For the specified rectangle values, it determines and shows the equivalent polar value.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={12} sm={12} xs={12} >
                                <label> x :<input type="number" className='ms-3' value={x}
                                onChange={(e) => setX(e.target.value)}/> </label></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={12} sm={12} xs={12} >
                                <label> y :<input type="number" className='ms-3' value={y}
                               onChange={(e) => setY(e.target.value)} /> </label></Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>r</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{r.toString().substring(0,6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>θ</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{angle.toString().substring(0,6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate"/>
                        <ButtonA onClick={reset} text="Reset"/>

                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <Example heading=" Rectangular Polar Conversion Calculator"
                            title="Suppose we have a complex number expressed in rectangular form and we want to express it in polar form. (That is, we know a and b and we need r and θ.) We see that we can use the formulas:
                        Convert the complex number 5 + 2 i to polar form."
                            step1="Solution : " step1heading=":We have a = 5 and b = 2. We compute"
                            step1value="so the complex number in polar form must be 5.39 ∠ 21.8°. " />
                    }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(true)} text="Formula"/>
                    {show ?
                        <div className='formula-backside'>
                            <dt>   R = sqrt(x * x + y * y) , angle = atan(y/x)</dt>
                            <dt>Where,</dt>
                            <dt>Rectangle coordinates:</dt>
                            <span>x and y - horizontal and vertical distances from the origin.</span><br />
                            <dt>Polar coordinates(r, q):</dt><br />
                            <span> r - the distance from the origin to the point.</span><br />
                            <span> q - the angle measured from the positive x axis to the point.</span><br />
                            <span> t - angle (in degrees)</span><br />
                            <ButtonA onClick={() => setShow(false)} text="Close  Formula" />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >


    )
}

export default Rectangular