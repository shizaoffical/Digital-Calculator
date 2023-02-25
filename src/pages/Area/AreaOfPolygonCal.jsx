import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';



function AreaOfPolygonCal() {

    const [textShow, settextShow] = useState(false);
    const [show, setShow] = useState(false);
    const [numberOfSides, setNumberOfSides] = useState(5);
    const [secondnumberOfSides, setsecondnumberOfSides] = useState(3);
    const [sideLength, setSideLength] = useState(6.45);
    const [area, setArea] = useState(0);
    const [apothem, setApothem] = useState(0);
    const [radius, setRadius] = useState(0);
    const [perimeter, setPerimeter] = useState(0);

    function calculatePolygon() {
        const perimeter = numberOfSides * sideLength;
        const apothem = sideLength / (2 * Math.tan(Math.PI / numberOfSides));
        const area = (1 / 2) * apothem * numberOfSides * sideLength;
        setApothem(apothem);
        const radius = 0.5 * Math.sin(2 * Math.PI / secondnumberOfSides);
        setRadius(radius)
        setArea(area);
        setPerimeter(perimeter);
    }
    function reset() {
        setNumberOfSides(5);
        setSideLength(6.45);
        setArea(0);
        setsecondnumberOfSides(3)
        setPerimeter(0);
        setRadius(0);
        setApothem(0)
    }


    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'calculator',
        onafterprint: () => alert("print success"),
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
                        <h2 className='text-center fw-bold'>Area of polygon calculate</h2>
                        <p>Use the area of a polygon calculator to determine the area by entering the length, radius, and number of sides in the appropriate input fields, then pressing the calculate button.
                        </p>
                        <div className='polygon-calculator-div '>
                            <button className='  polygon-calculator-btn' onClick={handlePrint}>Print</button>
                            <div className="polygon-calculator px-2" ref={componentsRef}>

                                <Row style={{ alignItems: "center", textAlign: "center" }}>
                                    <Col md={6} sm={12} xs={12} >
                                        <label>  Number of Sides:<br /><input type="number" value={numberOfSides}
                                            onChange={(event) => setNumberOfSides(parseInt(event.target.value))} /> </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <label > Length:<br /> <input type="number" value={sideLength}
                                            onChange={(event) => setSideLength(parseFloat(event.target.value))} /></label></Col>
                                </Row>
                                <Row className='mt-2 ' style={{ alignItems: "center" }}>
                                    <Col lg={8} xl={8} md={7} sm={12} xs={12} >
                                        <dt>   Area of polygon <br />[using length of a side]:</dt>
                                    </Col>
                                    <Col lg={4} xl={4} md={5} sm={12} xs={12} >
                                        <button className='polygon-claculator-value-btn' >{area} </button>
                                    </Col>
                                </Row>
                                <Row className='mt-2' style={{ alignItems: "center" }}>
                                    <Col lg={8} xl={8} md={7} sm={12} xs={12} >
                                        <dt > Area of polygon<br />[using apothem and length of a side]:</dt> </Col>
                                    <Col lg={4} xl={4} md={5} sm={12} xs={12} >
                                        <button className='polygon-claculator-value-btn'>{area}</button></Col>
                                </Row>
                                <Row className='mt-2' style={{ alignItems: "center" }}>
                                    <Col lg={8} xl={8} md={7} sm={12} xs={12} >
                                        <dt>Perimeter of polygon:</dt></Col>
                                    <Col lg={4} xl={4} md={5} sm={12} xs={12} >
                                        <button className='polygon-claculator-value-btn'>{perimeter}</button></Col>
                                </Row>
                                <Row className='mt-2' style={{ alignItems: "center", textAlign: "center" }}>
                                    <Col md={6} sm={12} xs={12} > Radius<br />
                                        <input type="number" placeholder='3.4'
                                            onChange={(event) => setRadius(parseFloat(event.target.value))} /> </Col>
                                    <Col md={6} sm={12} xs={12} > NumberOfSides:<br />
                                        <input type="number" value={secondnumberOfSides}
                                            onChange={(event) => setsecondnumberOfSides(parseInt(event.target.value))} /></Col>
                                </Row>
                                <Row className='mt-2' style={{ alignItems: "center" }}>
                                    <Col lg={8} xl={8} md={7} sm={12} xs={12}>
                                        <dt > Area of polygon<br />[using radius (circumstance)]:</dt></Col>
                                    <Col lg={4} xl={4} md={5} sm={12} xs={12}>
                                        <button className='polygon-claculator-value-btn'>{radius}</button></Col>
                                </Row>
                                <Row className='mt-2' style={{ alignItems: "center" }}>
                                    <Col lg={8} xl={8} md={7} sm={12} xs={12}>
                                        <dt >Area of polygon <br />[using apothem (Radius)]:</dt></Col>
                                    <Col lg={4} xl={4} md={5} sm={12} xs={12} >
                                        <button className='polygon-claculator-value-btn'>{apothem}</button></Col>
                                </Row>
                                {/* <Row><Col>radius: </Col></Row> */}

                            </div>
                            <div className='text-center'>
                                <button className="polygon-calculator-btn" onClick={calculatePolygon}>Calculate</button>
                                <button className="polygon-calculator-btn" onClick={reset} >Reset</button>
                            </div>
                            <center>
                                <button type='button'
                                    style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                            </center>
                            {
                                textShow &&
                                <div className='text-center'> <h4 className='fw-bold'>Example</h4>
                                    <span className='fw-bold' >Case 1: </span>
                                    Find the area and perimeter of a polygon with the length 3 and the number of sides is 4.<br />
                                    <span className='fw-bold' style={{ color: "#F58648" }}>step 1: </span>  Find the area.<br />
                                    Area = ((side)² * N) / (4Tan(π / N))<br />
                                    = ((3)² * 4) / (4 * Tan(3.14 / 4))<br />
                                    = (9 * 4) / 4 * Tan(0.785)<br />
                                    = 36/ 4 * 0.999<br />
                                    = 36/ 3.996<br />
                                    <span className='fw-blod'>Area</span>=9.009<br />
                                    <span className='fw-bold' style={{ color: "#F58648" }}>step 2: </span>Find the perimeter.<br />
                                    Perimeter = (N * (side) = 4 * 3 = 12)<br />
                                    <span className='fw-bold '>Case 2: </span> Find the area of a polygon with the given radius 3 and the number of sides is 5.<br />
                                    Step 1: Find the area.<br />
                                    Area = ½ * R² * Sin(2π / N)<br />
                                    = (0.5) * 3² * Sin(2 * 3.14 / 5)<br />
                                    = 0.5 * 9 * Sin(6.28 / 5)<br />
                                    = 2 * Sin(1.26)<br />
                                    = 4.5 * 0.95<br />
                                    Area = 4.275<br />
                                    <span className='fw-bold '>Case 3: </span> Find the area of a polygon with the given radius 3 and the number of sides is 5 using Apothem.<br />
                                    <span className='fw-bold' style={{ color: "#F58648" }}>step 1: </span> Find the apothem.<br />
                                    Apothem = R * Cos (π / N)<br />
                                    = 3 * Cos (3.14 / 5)<br />
                                    = 3* Cos (0.63)<br />
                                    = 3 * 0.808<br />
                                    Apothem = 2.43<br />

                                    <span className='fw-bold' style={{ color: "#F58648" }}>step 2: </span>Find the area.<br />
                                    Area = A² * N * Tan(π / N)<br />
                                    = 2.43² * 5 * Tan(3.14 / 5)<br />
                                    = 5.90 * 5 * Tan(0.63)<br />
                                    = 29.52* 0.73<br />
                                    Area =21.552<br />

                                    <span className='fw-bold '>Case 4: </span> Find the area of a polygon with the length 3 and the number of sides is 4 using Apothem.<br />

                                    <span className='fw-bold' style={{ color: "#F58648" }}>step 1: </span> Find the apothem.<br />
                                    Apothem = side / (2 * Tan(π / N))<br />
                                    = 3/ (2 * Tan(π / 4))<br />
                                    = 3 / (2 * Tan(0.785))<br />
                                    = 3/ (2 * 0.999)<br />
                                    = 3 / 1.998<br />
                                    Apothem = 1.501<br />

                                    <span className='fw-bold' style={{ color: "#F58648" }}>step 2: </span> Find the perimeter.<br />
                                    Perimeter = (N * (side) = 4 * 3= 12)<br />

                                    Step 3: Find the area.<br />
                                    Area = (A * P) / 2<br />
                                    = (1.501 * 12) / 2<br />
                                    = 18.012 / 2<br />
                                    Area = 9.006<br />
                                </div>
                            }

                        </div>

                        {/* ***************   formula ********** */}
                        <div className='polygon-calculator-text-div'>
                            <button className="polygon-calculator-btn mb-2" onClick={() => setShow(true)}>Formula</button>
                            {show ?
                                <div className='formula-backside'>
                                    <span className='fw-bold' style={{ textDecoration: "underline" }}>  Using length of a side :</span> <br />
                                    Area of Polygon = ((side)² * N) / (4Tan(π / N))<br />
                                    Perimeter of Polygon = N * (side)<br />
                                    <span className='fw-bold' style={{ textDecoration: "underline" }}>   Using radius (circumradius) :</span> <br />
                                    Area of Polygon = ½ * R² * Sin(2π / N)<br />
                                    <span className='fw-bold' style={{ textDecoration: "underline" }}>  Using apothem (inradius) :</span> <br />
                                    Area of Polygon = A² * N * Tan(π / N)<br />
                                    where A = R * Cos(π / N)<br />
                                    <span className='fw-bold' style={{ textDecoration: "underline" }}> Using apothem and length of a side :</span>  <br />
                                    Area of Polygon = (A * P) / 2<br />
                                    where A = side / (2 * Tan (π / N))<br />
                                    where,<br />

                                    N = Number of sides, A = Apothem, R = Radius, P = Perimeter
                                    <button className="polygon-calculator-btn" onClick={() => setShow(false)} > Close  Formula</button>
                                </div>
                                : null}
                            {/* ***************   formula end and example start ********** */}
                        </div>
                        <h3 className='fw-bold pt-3 '>Regular polygon area calculator</h3>
                        <p>A polygon is made up of several coplanar line segments that are linked end to end to form a closed shape. The polygon includes shapes like triangles, rectangles, and pentagons.</p>
                    </div>
                </Container>
            </div >
        </div >
    )
}

export default AreaOfPolygonCal