import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';
function Triangle() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area-of-triangle');
    // area  triangle
    const [length, setLength] = useState(null);
    const [breadth, setBreadth] = useState(null);
    const [areaOfCalculator, setAreaOfCalculator] = useState(0);
    // perimetertriangle
    const [sidea, setSidea] = useState(null);
    const [sideb, setSideb] = useState(null);
    const [sidec, setSidec] = useState(null);
    const [perimeterOfTriangle, setPerimeterOfTriangle] = useState(0);
    // equilateneral triangle
    const [equilateralTriangle, setEquilateralTriangle] = useState(null);
    const [areaOfEquilateralTriangle, setAreaOfEquilateralTriangle] = useState(0);
    // SAS triangle
    const [SASlength, setSASLength] = useState(null);
    const [SASBreath, setSASBreath] = useState(null);
    const [SASangleC, setSASangleC] = useState(null);
    const [SAStriangle, setSAStriangle] = useState(0);

    // area of triangle 
    const calculate = () => {
        if(length && breadth !== null){
          const areaOfCalculator = length * breadth / 2;
        setAreaOfCalculator(areaOfCalculator.toPrecision(6))  
        }
        else{
            setShowPopup(true)
        }
    }
    function reset() {
        if(length && breadth !== 0){
            setLength(0);
            setBreadth(0)
            setAreaOfCalculator(0);
            setSidea(0);
            setSideb(0);
            setSidec(0);
            setEquilateralTriangle(0);
            setAreaOfEquilateralTriangle(0);
            setPerimeterOfTriangle(0)
            setSASLength(0);
            setSASBreath(0);
            setSASangleC(0);
            setSAStriangle();
        }
       else{
        setShowPopup(true)
       }
    }
    // perimeter of triangle 
    const perimeter = () => {
        if(sidea && sideb && sidec !== null){
        const perimeter = sidea + sideb + sidec;
        setPerimeterOfTriangle(perimeter.toPrecision(6));}
        else{
            setShowPopup(true)
        }
    }
    function perimeterReset() {
        if(sidea && sideb && sidec !== 0){
            setLength(0);
            setBreadth(0)
            setAreaOfCalculator(0);
            setSidea(0);
            setSideb(0);
            setSidec(0);
            setEquilateralTriangle(0);
            setAreaOfEquilateralTriangle(0);
            setPerimeterOfTriangle(0)
            setSASLength(0);
            setSASBreath(0);
            setSASangleC(0);
            setSAStriangle();
        }
       else{
        setShowPopup(true)
       }
    }
    //   area of equilant triangle
    const areaofequatri = () => {
        if(equilateralTriangle !== null){
        const value = Math.sqrt(3) / 4 * equilateralTriangle * equilateralTriangle;
        setAreaOfEquilateralTriangle(value.toPrecision(6));}
        else{
            setShowPopup(true)
        }
    }
    function equilateralTriangleReset() {
        if(equilateralTriangle  !== 0){
            setLength(0);
            setBreadth(0)
            setAreaOfCalculator(0);
            setSidea(0);
            setSideb(0);
            setSidec(0);
            setEquilateralTriangle(0);
            setAreaOfEquilateralTriangle(0);
            setPerimeterOfTriangle(0)
            setSASLength(0);
            setSASBreath(0);
            setSASangleC(0);
            setSAStriangle();
        }
       else{
        setShowPopup(true)
       }
    }
    // SAS Triangle
    const SASangletriangle = () => {
        if(SASlength && SASBreath !== null){
          const SASAngletriangle = SASlength * SASBreath * Math.sin(SASangleC) / 2;
        setSAStriangle(SASAngletriangle.toPrecision(6));  
        }
        else{
            setShowPopup(true);
     }        
    }
    function SAStriangleReset() {
        if(SASBreath && SASlength  !== 0){
            setLength(0);
            setBreadth(0)
            setAreaOfCalculator(0);
            setSidea(0);
            setSideb(0);
            setSidec(0);
            setEquilateralTriangle(0);
            setAreaOfEquilateralTriangle(0);
            setPerimeterOfTriangle(0)
            setSASLength(0);
            setSASBreath(0);
            setSASangleC(0);
            setSAStriangle();
        }
       else{
        setShowPopup(true)
       }
    }
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

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
                                            <Input value={length}  onChange={(e) => setLength(e.target.value)} />
                                            </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Breadth(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <Input value={breadth}
                                                onChange={(e) => setBreadth(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{areaOfCalculator.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={calculate} text="Calculate"/>
                                    <ButtonA onClick={reset} text="Reset"/>
                                    {showPopup &&<Popup onClick={togglePopup} /> }
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
                                            <Input value={sidea} 
                                                onChange={(e) => setSidea(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Side(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <Input value={sideb}
                                                onChange={(e) => setSideb(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Side(c):</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <Input value={sidec}
                                                onChange={(e) => setSidec(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Perimeter of triangle : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {perimeterOfTriangle.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={perimeter} text="Calculate"/>
                                    <ButtonA onClick={perimeterReset} text="Reset"/>
                                    {showPopup &&<Popup onClick={togglePopup} /> }
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
                                            <Input value={equilateralTriangle} 
                                                onChange={(e) => setEquilateralTriangle(e.target.value)} />
                                        </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Area of an equilateral triangle : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {areaOfEquilateralTriangle.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={areaofequatri} text="Calculate"/>
                                    <ButtonA onClick={equilateralTriangleReset}  text="Reset"/>
                                    {showPopup &&<Popup onClick={togglePopup} /> }
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
                                            <Input value={SASlength} 
                                                onChange={(e) => setSASLength(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Breadth(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <Input value={SASBreath}
                                                onChange={(e) => setSASBreath(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Angle(c) : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <Input value={SASangleC}
                                                onChange={(e) => setSASangleC(e.target.value)} />
                                       </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {SAStriangle.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={SASangletriangle} text="Calculate"/>
                                    <ButtonA onClick={SAStriangleReset} text="Reset"/>
                                    {showPopup &&<Popup onClick={togglePopup} /> }
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
                                <div ref={divRef}>
                                    <Example heading="Area of triangle"
                                    title="Step by step solution"
                                        step1="Data " step1heading=" length = 8, breadth = 10, Area = ?"
                                        step2="Formula: " step2heading=" Area of triangle = length x breadth / 2"
                                        step2value={<>Now putting values in the above equation:<br />
                                        Area of triangle = 8 x 10 / 2 <br/>
                                        Area of triangle = 80 / 2</>} 
                                          step4=" Area of triangle= 40 "
                                        /></div>
                                }
                                {selectCondition === "Perimeter of triangle" &&
                                <div ref={divRef}>
                                    <Example heading="Perimeter of triangle"   title="Step by step solution"
                                        step1="Data " step1heading=" Side a = 10, Side b = 15, Side c = 14 , Perimeter = ?"
                                        step2="Formula " step2heading="Perimeter of a triangle = Side a + Side b + Side c."
                                        step3="Solution " step3heading={<>Now putting values in the above equation:<br />
                                       Perimeter of a triangle = 10 + 15 + 14 <br/></>}
                                       step4="Perimeter of a Triangle = 39 " 
                                       /></div>

                                }
                                {selectCondition === "Area of an equilateral triangle" &&
                                <div ref={divRef}>
                                    <Example heading="Area of an equilateral triangle   "
                                        title="Step by step solution"
                                        step1="Data " step1heading="length (a) = 16, Area = ?"
                                        step2="Formula: " step2heading=" Area of Equilateral triangle = √3 / 4  x a2."
                                        step3="Solution: " step3heading={<>Now putting values in the above equation:<br />
                                      Area of Equilateral triangle = √3 / 4 x (16)2 <br/>
                                      Area of Equilateral triangle = √3 / 4 x 256<br/>
                                      Area of Equilateral triangle = 0.4330 x 256</>
                                     } step4="Area of Equilateral triangle = 110.85"
                                     /></div>
                                        
                                }
                                {selectCondition === "Area of an triangle SAS" &&
                                <div ref={divRef}>
                                    <Example heading="Area of an triangle SAS"
                                    title="Step by step solution"
                                        step1="Data : " step1heading="length = 12, breadth = 11, angle = 10, Area = ?"
                                        step2="Formula: " step2heading=" Area of triangle = ab sin(C) / 2"
                                        step3="Solution: " step3heading={<>Now putting values in the above equation:<br />
                                      Area of triangle = (12)(11) x sin(10) /2 <br/>
                                      Area of triangle = (132) x -0.5440 /2<br/>
                                      Area of triangle = -71.8080 /2</>
                                     } step4="Area of triangle = -35.904"
                                        /></div>
                                         
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