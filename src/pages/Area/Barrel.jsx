import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ButtonA from '../../components/ButtonA';
import { useReactToPrint } from 'react-to-print';
import logo from "../../images/header-logo.png";
import NewCalculator from '../../components/NewCalculator'

function Barrel() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [topRadius, setTopRadius] = useState(22);
    const [middleRadius, setMiddleRadius] = useState(15);
    const [height, setHeight] = useState(18);
    const [volume, setVolume] = useState(0);

    const calculateVolume = () => {
        const tr = parseFloat(topRadius);
        const mr = parseFloat(middleRadius);
        const h = parseFloat(height);
        const v = (Math.PI * h) * (tr * tr + 2 * mr * mr) / 3;
        setVolume(v.toPrecision(6));
    };
    function reset() {
        setMiddleRadius(15);
        setHeight(18);
        setTopRadius(22);
        setVolume(0);
    }


    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle:<div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
    })
    return (
        <div>

            <div>
                <Container className='home-page '>
                    <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                        <NewCalculator title="Area of polygon calculate"
                            title1="remainder theorem Calculator" title2="law of science Calculator"
                            title3="scienthic division Calculator" title4="curl Calculator" />
                    </div>
                    <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                        <h2 className='text-center fw-bold'>Barrel calculate</h2>
                        <p>To calculate the volume of the barrel using the barrel calculator, enter the top, middle, bottom radius, and height in the corresponding boxes and click calculate.
                        </p>
                        <div className='polygon-calculator-div '>
                                <ButtonA onClick={handlePrint}text="Print"/>
                                <div className="polygon-calculator px-2" ref={componentsRef}>
                                    <Row className='text-center'>
                                        <span className='text-center'>Formula:</span>
                                        <st>Volume = π H (r2 + 2R2) / 3</st>
                                    </Row>
                                    <Row className='mt-2' style={{ alignItems: "center", textAlign: "center" }}>
                                        <Col md={6} sm={12} xs={12} >top radius (R) :
                                        </Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={topRadius} onChange={(e) => setTopRadius(e.target.value)} />
                                        </Col>
                                    </Row>
                                     <Row className='mt-2' style={{ alignItems: "center", textAlign: "center" }}>
                                        <Col md={6} sm={12} xs={12} >middle radius (r): </Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={middleRadius} onChange={(e) => setMiddleRadius(e.target.value)} />
                                        </Col>
                                    </Row>
                                    <Row className='mt-2' style={{ alignItems: "center", textAlign: "center" }}>
                                        <Col md={6} sm={12} xs={12} >Height (H):</Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                                        </Col>
                                    </Row>
                              
                                <center className='d-flex justify-content-center py-3'>
                                <Col md={6} sm={12} xs={12} ><dt className='pe-2'>Volume: </dt></Col>
                                <Col md={6} sm={12} xs={12} >
                                     <button className='formula-value-btn'>{volume.toString().substring(0, 5)}</button>
                                </Col>
                                </center>  </div>
                                <div className='text-center'>
                                    <ButtonA onClick={calculateVolume} text="Calculate"/>
                                    <ButtonA onClick={reset} text="Reset"/>
                                </div>
                            <center>
                                <button type='button'
                                    style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                            </center>
                            {
                                textShow &&
                                <div className='text-center'>
                                    <span className='fw-bold' >Step by step solution: </span><br />
                                    <span className='fw-bold' style={{ color: "#F58648" }}>Data </span>V = ? , R = 15 , r = 22, H = 18.<br />
                                    <span className='fw-bold' style={{ color: "#F58648" }}>Formula </span>Volume = π H (r2 + 2R2) / 3
                                    <br />
                                    By putting Values in the above formula:<br />

                                    V =(3.14 * 18) ((22)2 + 2(15)2)/ 3<br />

                                    v =(3.14 * 18) (484 + 2(225))/3<br />

                                    v =(56.52) (484 + 450)/3<br />
                                    v =(56.52) (934)/3<br />
                                    v =52789.68 / 3<br />
                                    V = 17596.56 m 3<br />
                                </div>
                            }
                        </div>
                        {/* formula */}
                        <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                            {show ?
                                <div className='formula-backside'>
                                    <span className='fw-bold' > Formula for Volume of Barrel:</span><br />
                                    <span className='fw-bold' >    Volume of Barrel = (h * PI * (2* r12 + r22) / 3 )</span><br />
                                    Where,<br />
                                    h = Height of the Barrel<br />
                                    r1, r2 = Radii of the Barrel<br />
                                </div>
                                : null}
                            <p>The barrel is roughly cylindrical in shape except that it is bulged outwards in the middle. The barrel calculator calculates the volume of a barrel. The volume of a Barrel can be calculated by the given height and radii.</p>
                        </div>
                    </div>
                </Container>
            </div >
        </div >
    )
}

export default Barrel