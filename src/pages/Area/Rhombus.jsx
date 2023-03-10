import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Rhombus() {


    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area of Rombus(Base Time Height Method)');
    // Area of Rombus(Base Time Height Method)
    const [base, setBase] = useState(16.24);
    const [height, setHeight] = useState(30.12);
    const [BTHM, setBTHM] = useState(0);
      // Area of Rombus(Diagonal Method)
    const [DMmethod , setDMmethod] = useState(0);
    // Area of Rombus Using Trigonometry
   const [length, setLength] = useState(13.24);
   const [angle , setAngle] = useState(33);
   const [Trigonometry, setTrigonometry]=useState(0);
// 'Perimeter of Rhombus
   const [perimeterR, setperimeterR] = useState(0)
    // Area of Rombus(Base Time Height Method)
    const BTHMCalculate = () => {
        const BTHMCalculate = base * height;
        setBTHM(BTHMCalculate);
    }
    function BTHMCalculateReset() {
        setBase(0);
        setHeight(0);
        setBTHM("")
    }
    // Area of Rombus(Diagonal Method)
    const DMmethodCalculation = () => {
      const DMMethod = base* height / 2;
      setDMmethod(DMMethod);
    }
    function DMmethodCalculationReset() {
        setBase(0);
        setHeight(0);
        setDMmethod("");

    }
    // Area of Rombus Using Trigonometry
 const TrigonometryCalculator = () => {
    const Trigonometry  = length * length * Math.sin(angle);
    setTrigonometry(Trigonometry);
 }
 function TrigonometryCalculatorReset() {
    setLength(0);
    setAngle(0);
    setTrigonometry("")
 }
//  'Perimeter of Rhombus
 const perimeterRCalculate = () => {
    const perimeter = 4 * length;
    setperimeterR(perimeter);
 }
  function perimeterRCalculateReset() {
    setperimeterR("")
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
                <h2 className='text-center fw-bold'> Rhombus Calculator</h2>
                <p>Choose the method by which you want to calculate the area or perimeter of the rhombus in this calculator. After that enter the required values and hit calculate.
                </p>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Area of Rombus(Base Time Height Method)" className='value-dropdown'>
                                    Area of Rombus(Base Time Height Method)  </option>
                                <option value='Area of Rombus(Diagonal Method)' className='value-dropdown' >
                                    Area of Rombus(Diagonal Method)</option>
                                <option value='Area of Rombus Using Trigonometry' className='value-dropdown' >
                                    Area of Rombus Using Trigonometry</option>
                                <option value='Perimeter of Rhombus' className='value-dropdown' >
                                    Perimeter of Rhombus</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Rombus(Base Time Height Method) /////////////////////////////// */}


                        {
                            selectCondition === "Area of Rombus(Base Time Height Method)" && <>
                               <div className='text-center'>  <dt>Formula</dt> A  = b * h</div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Base (b):  </label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3 ' value={base}
                                            onChange={(e) => setBase(e.target.value)} />
                                       </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Height (h): </label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <input type="number" className='ms-3' value={height}
                                                onChange={(e) => setHeight(e.target.value)} />
                                       </Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Area of Rombus(Base Time Height Method)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{BTHM.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={BTHMCalculate} />
                                    <ButtonA text="Reset" onClick={BTHMCalculateReset} />

                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Area of Rombus(Diagonal Method) ////////////////////////////// */}

                        {selectCondition === "Area of Rombus(Diagonal Method)" && <>
                        <div className='text-center'>  <dt>Formula</dt>Area(D)  = p*q / 2</div>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Diagonal length (p):</label></Col>
                                <Col md={6} sm={12} xs={12} >

                                        <input type="number" className='ms-3' value={base}
                                            onChange={(e) => setBase(e.target.value)} />
                                    </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Diagonal length: (q):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3' value={height}
                                            onChange={(e) => setHeight(e.target.value)} />
                                    </Col>
                            </Row>
                            <h5 className='text-center py-2'>Result</h5>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt> Area of Rhombus (Diagonal Method)</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{DMmethod.toString().substring(0, 6)}
                                    </button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA text="Calculate" onClick={DMmethodCalculation} />
                                <ButtonA text="Reset" onClick={DMmethodCalculationReset} />

                            </div>
                        </>}


                        {/* /////////////////////////////// Area of Rombus Using Trigonometry/////////////////////////////////////// */}
                        {selectCondition === "Area of Rombus Using Trigonometry" && <>
                        <div className='text-center'> <dt>Formula</dt> Area(T) = length² * Sin(angle)</div>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Lenght(l):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3' value={length}
                                        onChange={(e) => setLength(e.target.value)}/>
                                    </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Angle(a):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3' value={angle}
                                        onChange={(e) => setAngle(e.target.value)} />
                                    </Col>
                            </Row>
                            <h5 className='text-center py-2'>Result</h5>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt> Area of Rhombus Using Trigonometry</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Trigonometry.toString().substring(0,6)}
                                    </button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA text="Calculate" onClick={TrigonometryCalculator}/>
                                <ButtonA text="Reset" onClick={TrigonometryCalculatorReset}/>

                            </div>
                        </>}
                        {/* ///////////////////////////////////Perimeter of Rhombus//////////////////////////////// */}
                        {selectCondition === "Perimeter of Rhombus" && <>
                        <div className='text-center'> <dt>Formula</dt> P  = 4 * (length)</div>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label> Length(l):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3'value={length}
                                        onChange={(e) => setLength(e.target.value)} />
                                    </Col>
                            </Row>
                            <h5 className='text-center py-2'>Result</h5>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Perimeter of Rhombus</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{perimeterR.toString().substring(0,6)}
                                    </button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA text="Calculate" onClick={perimeterRCalculate} />
                                <ButtonA text="Reset" onClick={perimeterRCalculateReset}/>

                            </div>
                        </>}
                    </div>


                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>

                        {

                            textShow &&
                            <>
                                {selectCondition === "Area of Rombus(Base Time Height Method)" &&
                                    <Example heading="Area of Rombus(Base Time Height Method)"
                                        title="Step by step solution"
                                        step1="Data " step1heading="Find the area of a rhombus with the given base 4 and height 5 using the Base Times Height Method."
                                        step2="Solution : " step2heading="Find the area "
                                        step3="Area" step3heading=" = b * h = 4*5 = 20."

                                    />
                                }
                                {selectCondition === "Area of Rombus(Diagonal Method)" &&
                                    <Example heading="Area of Rombus(Diagonal Method)" title="Step by step solution"
                                        step1="Data " step1heading=" Find the area of a rhombus with the given diagonals 4,5 using the Diagonal Method."
                                        step2="Solution : " step2heading="Find the area "
                                        step3="Area" step3heading=" = ½ * p * q = 0.5 * 4*5 = 20*0.5 = 10 " />
                                }
                                {selectCondition === "Area of Rombus Using Trigonometry" &&
                                    <Example heading="Area of Rombus Using Trigonometry" title="Step by step solution"
                                        step1="Data " step1heading="Find the area of a rhombus with the given side 3 using Trigonometry Method."
                                        step2="Solution : " step2heading="Find the area "
                                        step3="Area" step3heading="= l² * Sin(a) = 3² * Sin(33) = 9* 1 = 9. "
                                    />
                                }
                                {selectCondition === "Perimeter of Rhombus" &&
                                    <Example heading="Perimeter of Rhombus" title="Step by step solution"
                                        step1="Data " step1heading=" Find the perimeter of a rhombus with the given side 3.."
                                        step2="Solution : " step2heading="Find the perimeter"
                                        step3="Perimeter" step3heading="= 4(l) = 4 * 3 = 12. " />
                                }
                            </>}
                    </div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> The formula of the area of the rhombus:</dt>
                            <span>The area of a rhombus can be calculated through three different formulas. All of these formulas use different values to find the area.</span>
                            <dt>Base Times Height Method :</dt>
                            <span>Area of Rhombus = b * h</span>
                            <dt>Diagonal Method</dt>
                            <span>Area of Rhombus = ½ x d1 x d2 </span>
                            <dt>Trigonometry Method :</dt>
                            <span>Area of Rhombus = a² * SinA</span>
                            <dt>Perimeter of Rhombus<span> = 4(a) </span></dt>
                            <dt>Where,</dt>
                            <span> a = side b = height, d1 and d2 diagonals</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >
    )
}

export default Rhombus