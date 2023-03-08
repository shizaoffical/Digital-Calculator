import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Sphere() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [x, setX] = useState(5);
    const [y, setY] = useState(3);
    const [r, setR] = useState(0);
    const [angle, setangle] = useState(0);

    const calculate = () => {
        const r = Math.sqrt(x * x + y * y);
        setR(r);
        const angle = Math.atan(y / x);
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
                <h2 className='text-center fw-bold'> Sphere Calculator</h2>
                <p>Enter the radius into the sphere calculator's calculate field to compute the sphere's volume and surface area.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={12} sm={12} xs={12} >
                                <label> Volume of Sphere[ (4/3)πr³ ] <input type="number" className='ms-3' value={x}
                                    onChange={(e) => setX(e.target.value)} /> </label></Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>r</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                  <button className='formula-value-btn'>{r.toString().substring(0, 6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>θ</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{angle.toString().substring(0, 6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate"/>
                        <ButtonA onClick={reset}  text="Reset"/>

                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <Example heading="Sphere Calculator Example"
                            title={<>Find the volume and curved surface area of a Sphere (tsa of sphere) with the given radius 2.<br />
                                How to find the volume of a sphere?</>}
                            step1="Solution : " step1heading=" Find the volume of a sphere.e"
                            step1value="Volume = (4/3) πr³ = (4/3) * 3.14 * 4³ = 1.33 * 3.14 * 27 = 33.40 "
                            step2="Solution : " step2heading=" Find the curved surface area (CSA)."
                            step2value="Curved Surface Area (CSA) = 4πr² = 4 * 3.14 * 2² = 12.56 * 4= 50.24 " />
                    }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> Volume of Sphere <span>= (4/3) πr³</span> </dt>
                            <dt>Curved Surface Area (CSA) of Sphere <span> = 4πr²</span></dt>
                            <dt>Where,</dt>
                            <span> r = radius, π = 3.14</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >

    )
}

export default Sphere