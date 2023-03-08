import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Kite() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Area of Kite');
    // Area OF Kite
    const [p, setP] = useState(16.24);
    const [q, setQ] = useState(30.12);
    const [areaOfKite, setAreaOFKite] = useState(0);

    // Area of  Kite usingTrignometery
    const [lengtha, setlengtha] = useState(16.24);
    const [lengthb, setlengthb] = useState(30.12);
    const [angle, setAnglec] = useState(33);
    const [KiteTrignometery, setKiteTrignometery] = useState(0);
    //  perimeter of kite
    const [KitePerimeter, setKitePerimeter] = useState(0);
    // Area Of Kite
    const AreaOfKite = () => {
        const KiteArea = p * q / 2;
        setAreaOFKite(KiteArea);
    }
    function AreaOfKiteReset() {
        setP(0);
        setQ(0)
        setAreaOFKite("");
    }
    //  Area of Kite Using Tripographt'
    const AreaKiteTrignometery = () => {
        const kiteTrignometery = lengtha * lengthb * Math.sin(angle);
        setKiteTrignometery(kiteTrignometery);
    }
    function AreaKiteTrignometeryReset() {
        setlengtha(0);
        setlengthb(0);
        setAnglec(0);
        setKiteTrignometery("")
    }

    // Perimeter Of Kite
    const KiteofPerimeter = () => {
        const Perimeterkite = 2 *(p + q);
        setKitePerimeter(Perimeterkite);
    }
    function kitePerimeterReset() {
        setlengtha(0);
        setlengthb(0)
        setKitePerimeter("")
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
                <h2 className='text-center fw-bold'> Kite Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Area of Kite" className='value-dropdown'>Area of Kite</option>
                                <option value='Area of Kite Using Tripographt' className='value-dropdown' >Area of Kite Using  Tripographt</option>
                                <option value="Perimeter of Kite" className='value-dropdown'>Perimeter of Kite</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}


                        {
                            selectCondition === "Area of Kite" && <>
                            <div className='text-center'>  <dt>Formula</dt> A = p* q / 2</div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Diagonal Length(p) :
                                            <input type="number" value={p} className='ms-3' onChange={(e) => setP(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Diagonal Length(q) :
                                            <input type="number" className='ms-3' value={q}
                                                onChange={(e) => setQ(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Length : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{areaOfKite.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={AreaOfKite}text="Calculate"/>
                                    <ButtonA onClick={AreaOfKiteReset} text="Reset"/>

                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Area of Kite Using Tripographt ////////////////////////////// */}

                        {
                            selectCondition === "Area of Kite Using Tripographt" && <>
                            <div className='text-center'>  <dt>Formula</dt> T = a * b * Sin(c)</div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> side(a) :
                                            <input type="number" value={lengtha} className='ms-3'
                                                onChange={(e) => setlengtha(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Side(b) :
                                            <input type="number" className='ms-3' value={lengthb}
                                                onChange={(e) => setlengthb(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> Side(c):
                                            <input type="number" className='ms-3' value={angle}
                                                onChange={(e) => setAnglec(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Area of Kite Using Tripographt </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {KiteTrignometery.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={AreaKiteTrignometery} text="Calculate"/>
                                    <ButtonA  onClick={AreaKiteTrignometeryReset} text="Reset"/>

                                </div>
                            </>

                        }

                        {/* //////////////////////////////// Perimeter of Kite//////////////////////////*/}
                        {
                            selectCondition === "Perimeter of Kite" && <>
                            <div className='text-center'>  <dt>Formula</dt> P  = 2(a + b)</div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> length (a) :
                                            <input type="number" value={p} className='ms-3'
                                                onChange={(e) => setP(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={12} sm={12} xs={12} >
                                        <label> length (a) :
                                            <input type="number" value={q} className='ms-3'
                                                onChange={(e) => setQ(e.target.value)} />
                                        </label></Col>
                                </Row>
                                <h5 className='text-center py-2'>Result</h5>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Perimeter Of Kite </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {KitePerimeter.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={KiteofPerimeter} text="Calculate"/>
                                    <ButtonA onClick={kitePerimeterReset}  text="Reset"/>

                                </div>
                            </>}</div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {
                            textShow &&
                            <Example heading="Kite Calculator Example"
                                title="(kite calc: find a, p=n/a, q=n/a)"
                                step1="Step 1 :" step1heading="Find the area of a kite with the given diagonals 4,6 using Diagonal Method. Find the area."
                                step1value="Area = ½ * d1 * d2 = 0.5 * 4 * 6 = 12.00"
                                step2="Step 2 : " step2heading=" Find the area of a kite with the given length 2 and breadth 3 using Trigonometry Method. Find the area."
                                step2value="Area = a * b * SinC = 2 * 3 * Sin (33) = 6 * 1 = 6."
                                step3="Step 3 : " step3heading={<> kite calc: find p, q=n/a, a=n/a - <br/>Find the perimeter of a kite with the given length 2 and breadth 3.</>}
                                step3value={<> Find the perimeter<br /> Perimeter = 2(a + b) = 2(2 + 3) = 2(5) = 10<br />
                                    It is also known as kite angle calculator.<br />You can also meaures kite dimensions using this solver.</>} />
                        }</div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>

                            <dt>Diagonal Method: <span>Area of Kite = ½ * d1 * d2</span></dt>
                            <dt>Trigonometry Method:  <span>Area of Kite = a * b * SinC</span></dt>
                            <dt>Perimeter of Kite<span>= 2(a + b)</span> </dt>
                            <dt>Where,</dt>
                            <span>l = length<br />b =breadth</span><br />
                            <span>a = length, b = breadth, d1, d2 are diagonals</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >

    )
}

export default Kite