import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
function Parallogram() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area of Rectangular');
    const [base ,setBase] = useState(null);
    const [height,setHeight] = useState(null);
    const [rectangularArea,setRectangularArea] = useState(0);
    const [side1 , setSide1] = useState(null);
    const [side2 , setSide2] = useState(null);
    const [PerimeterOfTriangle , setPerimeterOfTriangle] = useState(0);
//   Rectangular arae
   const RectangularArea =() => {
    if(base && height !== null){
        const rectangularArea = base * height ;
        setRectangularArea(rectangularArea.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
   }
    function RectangularAreaReset() {
        if(base && height !== 0){
            setBase(0);
            setHeight(0);
            setSide1(0);
            setSide2(0);
            setRectangularArea(0)
        } else{
           setShowPopup(true);
        }    
    }

    //  perimeter Rectangular
     const perimeterRectangular =() => {
        if(side1 && side2 !== null){
            const perimeterRectangular = 2 * (side1 + side2);
            setPerimeterOfTriangle(perimeterRectangular.toPrecision(6))
        }
        else{
            setShowPopup(true);
         } 
     }
      function perimeterRectangularReset() {
        if(side1 && side2 !== 0){
            setSide1(0);
            setSide2(0);
            setBase(0);
            setHeight(0);
            setPerimeterOfTriangle(0)
        }
        else{
            setShowPopup(true);
         } 
      }

    // handle change
    const handleSelectChange = (event) => {
        setSelectCondition(event.target.value.toPrecision(6));
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
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base (b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3' value={base} 
                                            onChange={(e) => setBase(e.target.value)}/>
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Height (h) : </label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={height}
                                          onChange={(e) => setHeight(e.target.value)}/>
                                    
                                        </Col>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }

                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Area of Kite Using Tripographt ////////////////////////////// */}

                        {
                            selectCondition === "Perimeter OF Rectangular" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> side(a) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3' value={side1}
                                            onChange={(e) => setSide1(e.target.value)}/>
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Side(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3' value={side2}
                                            onChange={(e) => setSide2(e.target.value)}/>
                                        </Col>
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
                                    {showPopup &&<Popup onClick={togglePopup} /> }

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
                                <div ref={divRef}>
                                    <Example heading="Area of Rectangular"
                                        title="step by step solution"
                                        step1="Data : " step1heading="b = 12, h = 15, A = ?"
                                        step2="Formula" step2heading="Area (A) = b x h"
                                        step3="Solution: " step3heading={<> Now we have to put values in above formula: <br />A = (12) x (15)</>}
                                        step4="A = 180 m2" />
                               </div> }
                                {selectCondition === "Perimeter OF Rectangular" &&
                                <div ref={divRef}>
                                    <Example heading="Perimeter OF Rectangular"
                                        title="step by step solution"
                                        step1="Data" step1heading="b = 16, h = 18, P = ?"
                                        step2="Formula " step2heading="Perimeter (P) = 2 (b + h)."
                                        step3="Solution: " step3heading={<>Now we have to put values in above formula:<br />P = 2 (12 + 15)<br />
                                            P = 2 (27)</>}
                                        step4="P = 54 m " />
                               </div> }

                            </>

                        }</div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>

                            <dt>Area of Rectangle  <span>= b*h</span></dt>
                            <dt>Perimeter of Rectangle <span>= 2(b) + 2(h) </span></dt>
                            <dt>Where,</dt> b = base, h = heigth<br/>   
                            <dt>Area of Parallelogram  <span> = b×h </span></dt>
                            <dt>Perimeter of Parallelogram  <span>= 2(b) + 2(h)  </span></dt>
                            <dt>where,</dt>
                            <span>b = breadth, h = height</span><br />
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