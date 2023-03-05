import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
function Parallogram() {


    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area of Rectangular');
    const [base ,setBase] = useState(12);
    const [height,setHeight] = useState(15);
    const [rectangularArea,setRectangularArea] = useState(0);
    const [side1 , setSide1] = useState(16);
    const [side2 , setSide2] = useState(18);
    const [PerimeterOfTriangle , setPerimeterOfTriangle] = useState(0);
//   Rectangular arae
   const RectangularArea =() => {
    const rectangularArea = base * height ;
    setRectangularArea(rectangularArea);
   }
    function RectangularAreaReset() {
        setBase(0);
        setHeight(0);
        setRectangularArea("")
    }

    //  perimeter Rectangular
     const perimeterRectangular =() => {
        const perimeterRectangular = 2 * (side1 + side2);
        setPerimeterOfTriangle(perimeterRectangular)
     }
      function perimeterRectangularReset() {
        setSide1(0);
        setSide2(0);
        setPerimeterOfTriangle("")
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
                <h2 className='text-center fw-bold'> Parallelogram Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Area of Rectangular" className='value-dropdown'>Area of Rectangular</option>
                                <option value='Perimeter OF Rectangular' className='value-dropdown' >Perimeter of Rectangular</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {
                            selectCondition === "Area of Rectangular" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Base (b) :
                                            <input type="number" className='ms-3' value={base} 
                                            onChange={(e) => setBase(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Height (h) : 
                                            <input type="number" className='ms-3' value={height}
                                          onChange={(e) => setHeight(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{rectangularArea.toString().substring(0,6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={RectangularArea} text="Calculate"/>
                                    <ButtonA  onClick={RectangularAreaReset} text="Reset"/>

                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Area of Kite Using Tripographt ////////////////////////////// */}

                        {
                            selectCondition === "Perimeter OF Rectangular" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> side(a) :
                                            <input type="number" className='ms-3' value={side1}
                                            onChange={(e) => setSide1(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Side(b) :
                                            <input type="number" className='ms-3' value={side2}
                                            onChange={(e) => setSide2(e.target.value)}/>
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Area of Kite Using Tripographt </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PerimeterOfTriangle.toString().substring(0,6)}
                                        </button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={perimeterRectangular} text="Calculate"/>
                                    <ButtonA onClick={perimeterRectangularReset} text="Reset"/>

                                </div>
                            </>

                        }</div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {
                            textShow &&
                            <>
                                {selectCondition === "Area of Rectangular" &&
                                    <Example heading="Area of Rectangular"
                                        title="step by step solution"
                                        step1="Data : " step1heading="b = 12, h = 15, A = ?"
                                        step2="Formula" step2heading="Area (A) = b x h"
                                        step3="Solution: " step3heading={<> Now we have to put values in above formula: <br />A = (12) x (15)</>}
                                        step4="A = 180 m2" />
                                }
                                {selectCondition === "Perimeter OF Rectangular" &&
                                    <Example heading="Perimeter OF Rectangular"
                                        title="step by step solution"
                                        step1="Data" step1heading="b = 16, h = 18, P = ?"
                                        step2="Formula " step2heading="Perimeter (P) = 2 (b + h)."
                                        step3="Solution: " step3heading={<>Now we have to put values in above formula:<br />P = 2 (12 + 15)<br />
                                            P = 2 (27)</>}
                                        step4="P = 54 m " />
                                }

                            </>

                        }</div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(true)} text="Formula"/>
                    {show ?
                        <div className='formula-backside'>

                            <dt>Area of Rectangle  <span>= b*h</span></dt>
                            <dt>Perimeter of Rectangle <span>= 2(b) + 2(h) </span></dt>
                            <dt>Where,</dt> b = base, h = heigth<br/>   
                            <dt>Area of Parallelogram  <span> = b×h </span></dt>
                            <dt>Perimeter of Parallelogram  <span>= 2(b) + 2(h)  </span></dt>
                            <dt>where,</dt>
                            <span>b = breadth, h = height</span><br />
                            <ButtonA onClick={() => setShow(false)} text="Close  Formula" />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >


    )
}

export default Parallogram