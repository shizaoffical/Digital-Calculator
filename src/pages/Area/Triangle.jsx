import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Triangle() {

    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area-of-triangle');
    // area  triangle
    const [length, setLength] = useState(8);
    const [breadth, setBreadth] = useState(10);
    const [areaOfCalculator, setAreaOfCalculator] = useState(0);
    // perimetertriangle
    const [sidea, setSidea] = useState(10);
    const [sideb, setSideb] = useState(15);
    const [sidec, setSidec] = useState(14);
    const [perimeterOfTriangle, setPerimeterOfTriangle] = useState(0);
    // equilateneral triangle
    const [equilateralTriangle, setEquilateralTriangle] = useState(16);
    const [areaOfEquilateralTriangle, setAreaOfEquilateralTriangle] = useState(0);
    // SAS triangle
    const [SASlength, setSASLength] = useState(12);
    const [SASBreath, setSASBreath] = useState(11);
    const [SASangleC, setSASangleC] = useState(10);
    const [SAStriangle, setSAStriangle] = useState(0);

    // area of triangle 
    const calculate = () => {
        const areaOfCalculator = length * breadth / 2;
        setAreaOfCalculator(areaOfCalculator.toPrecision(6))
    }
    function reset() {
        setLength(0);
        setBreadth(0)
        setAreaOfCalculator("");
    }
    // perimeter of triangle 
    const perimeter = () => {
        const perimeter = sidea + sideb + sidec;
        setPerimeterOfTriangle(perimeter.toPrecision(6));
    }
    function perimeterReset() {
        setSidea(0);
        setSideb(0);
        setSidec(0);
        setPerimeterOfTriangle("")
    }
    //   area of equilant triangle
    const areaofequatri = () => {
        const value = Math.sqrt(3) / 4 * equilateralTriangle * equilateralTriangle;
        setAreaOfEquilateralTriangle(value.toPrecision(6));

    }
    function equilateralTriangleReset() {
        setEquilateralTriangle(0);
        setAreaOfEquilateralTriangle(0);
    }
    // SAS Triangle
    const SASangletriangle = () => {
        const SASAngletriangle = SASlength * SASBreath * Math.sin(SASangleC) / 2;
        setSAStriangle(SASAngletriangle.toPrecision(6));
    }
    function SAStriangleReset() {
        setSASLength(0);
        setSASBreath(0);
        setSASangleC(0);
        setSAStriangle("");
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
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> Triangle Calculator</h2>
                <p>Enter the radius into the sphere calculator's calculate field to compute the sphere's volume and surface area.
                </p>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Area-of-triangle" className='value-dropdown'>Area of triangle</option>
                                <option value='Perimeter of triangle' className='value-dropdown' >Perimeter of trianglex</option>
                                <option value="Area of an equilateral triangle" className='value-dropdown'>Area of an equilateral triangle</option>
                                <option value="Area of an triangle SAS" className='value-dropdown' >Area of an triangle SAS</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area-of-triangle  /////////////////////////////// */}


                        {
                            selectCondition === "Area-of-triangle" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={length} className='ms-3' onChange={(e) => setLength(e.target.value)} />
                                            </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Breadth(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={breadth}
                                                onChange={(e) => setBreadth(e.target.value)} />
                                        </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{areaOfCalculator.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={calculate} text="Calculate"/>
                                    <ButtonA onClick={reset} text="Reset"/>

                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Perimeter of triangle ////////////////////////////// */}

                        {
                            selectCondition === "Perimeter of triangle" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> side(a) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={sidea} className='ms-3'
                                                onChange={(e) => setSidea(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Side(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={sideb}
                                                onChange={(e) => setSideb(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Side(c):</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3' value={sidec}
                                                onChange={(e) => setSidec(e.target.value)} />
                                        </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Perimeter of triangle : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {perimeterOfTriangle.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={perimeter} text="Calculate"/>
                                    <ButtonA onClick={perimeterReset} text="Reset"/>

                                </div>
                            </>

                        }

                        {/* //////////////////////////////// equilateral triangle //////////////////////////*/}
                        {
                            selectCondition === "Area of an equilateral triangle" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> length (a) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={equilateralTriangle} className='ms-3'
                                                onChange={(e) => setEquilateralTriangle(e.target.value)} />
                                        </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Area of an equilateral triangle : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {areaOfEquilateralTriangle.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={areaofequatri} text="Calculate"/>
                                    <ButtonA onClick={equilateralTriangleReset}  text="Reset"/>

                                </div>
                            </>

                        }
                        {/*////////////////////////////////////////// area of triangle sas /////////////////////////////*/}

                        {
                            selectCondition === "Area of an triangle SAS" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Length(l) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" value={SASlength} className='ms-3'
                                                onChange={(e) => setSASLength(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Breadth(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={SASBreath}
                                                onChange={(e) => setSASBreath(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Angle(c) : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={SASangleC}
                                                onChange={(e) => setSASangleC(e.target.value)} />
                                       </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {SAStriangle.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={SASangletriangle} text="Calculate"/>
                                    <ButtonA onClick={SAStriangleReset} text="Reset"/>

                                </div>
                            </>

                        }

                    </div>


                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {

                            textShow &&
                            <>
                                {selectCondition === "Area-of-triangle" &&
                                    <Example heading="Area of triangle"
                                    title="Step by step solution"
                                        step1="Data " step1heading=" length = 8, breadth = 10, Area = ?"
                                        step2="Formula: " step2heading=" Area of triangle = length x breadth / 2"
                                        step2value={<>Now putting values in the above equation:<br />
                                        Area of triangle = 8 x 10 / 2 <br/>
                                        Area of triangle = 80 / 2</>} 
                                          step4=" Area of triangle= 40 "
                                        />
                                }
                                {selectCondition === "Perimeter of triangle" &&
                                    <Example heading="Perimeter of triangle"   title="Step by step solution"
                                        step1="Data " step1heading=" Side a = 10, Side b = 15, Side c = 14 , Perimeter = ?"
                                        step2="Formula " step2heading="Perimeter of a triangle = Side a + Side b + Side c."
                                        step3="Solution " step3heading={<>Now putting values in the above equation:<br />
                                       Perimeter of a triangle = 10 + 15 + 14 <br/></>}
                                       step4="Perimeter of a Triangle = 39 " 

                                        />
                                }
                                {selectCondition === "Area of an equilateral triangle" &&
                                    <Example heading="Area of an equilateral triangle   "
                                        title="Step by step solution"
                                        step1="Data " step1heading="length (a) = 16, Area = ?"
                                        step2="Formula: " step2heading=" Area of Equilateral triangle = √3 / 4  x a2."
                                        step3="Solution: " step3heading={<>Now putting values in the above equation:<br />
                                      Area of Equilateral triangle = √3 / 4 x (16)2 <br/>
                                      Area of Equilateral triangle = √3 / 4 x 256<br/>
                                      Area of Equilateral triangle = 0.4330 x 256</>
                                     } step4="Area of Equilateral triangle = 110.85"
                                        />
                                }
                                {selectCondition === "Area of an triangle SAS" &&
                                    <Example heading="Area of an triangle SAS"
                                    title="Step by step solution"
                                        step1="Data : " step1heading="length = 12, breadth = 11, angle = 10, Area = ?"
                                        step2="Formula: " step2heading=" Area of triangle = ab sin(C) / 2"
                                        step3="Solution: " step3heading={<>Now putting values in the above equation:<br />
                                      Area of triangle = (12)(11) x sin(10) /2 <br/>
                                      Area of triangle = (132) x -0.5440 /2<br/>
                                      Area of triangle = -71.8080 /2</>
                                     } step4="Area of triangle = -35.904"
                                         />
                                }
                            </>


                        }</div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> Area of triangle: <span>[ l×b /2 ]</span> </dt>
                            <dt>Perimeter of Triangle: <span>  [ (a + b + c) ]</span></dt>
                            <dt>Area of Equilateral Triangle: <span> [ (Sqrt (3)/4)×(length(a))² ]</span></dt>
                            <dt>Area of Triangle SAS (2sides & opposite angle):
                                <span> [(l) *(b) *sin(c) /2]</span></dt>
                            <dt>Where,</dt>
                            <span>l = length<br />b =breadth</span><br />
                            <span> a,b, and c = sides of the triangle</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >

    )
}

export default Triangle