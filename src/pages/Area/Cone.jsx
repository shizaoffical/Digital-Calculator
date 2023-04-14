import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Reference from '../../components/Reference';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';
import Input from '../../components/Input';
function Cone() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [height, setHeight] = useState(null);
    const [radius, setRadius] = useState(null);
    const [csa, setCsa] = useState(0);
    const [tsa, settsa] = useState(0);
    const [volume, setVolume] = useState(0);
    const [slantheight, setSlantheight] = useState(0);


    const calculate = () => {
        if (height && radius !== null) {
            const Slantheight = Math.sqrt(radius * radius + height * height);
            setSlantheight(Slantheight.toPrecision(6));
            const csa = 3.14 * radius * Slantheight;
            setCsa(csa.toPrecision(6));
            const volume = (1 / 3) * Math.PI * radius * radius * height;
            setVolume(volume.toPrecision(6));
            const tsa = Math.PI * radius * (Slantheight + radius);
            settsa(tsa.toPrecision(6));
        }
        else {
            setShowPopup(true);
        }
    }


    function reset() {
        if (volume && slantheight && tsa && csa !== 0) {
            setHeight(0);
            setRadius(0);
            setVolume(0);
            settsa(0);
            setSlantheight(0);
            setCsa(0);
        }
        else {
            setShowPopup(true);
        }

    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'calculator',
        onafterprint: () => alert("print success"),
    })
    useEffect(() => {
        if (textShow) {
            divRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [textShow]);
    return (
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>Cone calculate</h2>
                <p>A cone is a single-vertex, three-dimensional geometric shape having a circular base. The perpendicular height is the line that runs from the centre of the base to the apex.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Radius:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                            <Input value={radius}
                                    onChange={(e) => setRadius(e.target.value)}  />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><label> Height</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={height}
                                    onChange={(e) => setHeight(e.target.value)} />
                            </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Slant Height(l) of Cone:</dt>[ Sqrt(r² + h²) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{slantheight.toString().substring(0, 5)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Volume of Cone:</dt>  (1/3)πr² h</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{volume.toString().substring(0, 5)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Curved Surface Area(CSA) of Cone:</dt>[ πrl ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{csa.toString().substring(0, 5)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Total Surface Area(TSA) of Cone:</dt>[ πr(l+r) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{tsa.toString().substring(0, 5)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={reset} text="Reset" />
                        {showPopup && <Popup onClick={togglePopup} />}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                            <Example heading="Cone Example" title=" Find the volume, curved surface, and total surface area of a cone with the given radius 3 and height 4."
                                step1="Step 1 : " step1heading=": Find the height" step1value="  Slant height (l) = Sqrt(r² + h²) = Sqrt(3² + 4²)= Sqrt(9 + 16) = Sqrt(25) = 5."
                                step2="Step 2 : " step2heading="Find the volume" step2value=" Volume = (1/3)πr² h = (1/3) * 3.14 * 3² * 4 = 0.33 * 113.04 = 37.68."
                                step3="Step 3 : " step3heading="Find the curved surface area (CSA)" step3value=" Circumference = πd = 3.14 *8 = 25.12(3)  " />
                        </div>}

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt className='Fw-bold'>Slant height of Cone (l) = </dt>Sqrt(r² + h²)<br />
                            <dt>Volume of Cone =  </dt>(1/3)πr² h<br />
                            <dt>Curved Surface Area (CSA) of Cone =</dt>πrl<br />
                            <dt>Total Surface Area (TSA) of Cone =,</dt>πr(l + r)<br />
                            <dt>where,</dt><br />
                            r = radius, l = slant height, h = height, π = 3.14<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                <Reference
                    step1={<><Link className='Reference-link' to="https://www.ducksters.com/kidsmath/finding_the_volume_surface_area_of_a_cone.php"
                        target="_blank">Kids Math:</Link> Finding the Volume and Surface Area of a Cone.</>}
                    step2={<>What is<Link className='Reference-link' to="https://www.splashlearn.com/math-vocabulary/geometry/cone"
                        target="_blank">Cone?</Link>Defination Facts and Example</>} />
            </div>
        </Container>
        </div >

    )
}

export default Cone