import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';

function Elipse() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Ellipse (Ares & Perimeter)');
    // Ellipse (Area & Perimeter)
    const [r1, setR1] = useState(null);
    const [r2, setR2] = useState(null);
    const [r3, setR3] = useState(null);
    const [EllipseArea, setEllipseArea] = useState(0);
    const [EllipsePerimeter, setEllipsePerimeter] = useState(0);
    // volume of ellipse
    const [VolumeOfEllipse, setVolumeOfEllipse] = useState(0);

    // Ellipse (Area & Perimeter) functionality
    const Ellipse = () => {
        if(r1 && r2 !== null){
           const ellipseArea = Math.PI * r1 * r2;
        setEllipseArea(ellipseArea.toPrecision(6));
        const elipsePerimeter = 2 * 3.14 * (Math.sqrt((r1 * r1 + r2 * r2) / 2));
        setEllipsePerimeter(elipsePerimeter.toPrecision(6)); 
        }
        else{
            setShowPopup(true);
        }
    }
    function EllipseReset() {
        if(r1 && r2 !== 0){
            setR1(0);
            setR2(0);
            setEllipseArea(0);
            setEllipsePerimeter(0);
        }
        else{
            setShowPopup(true);
        }
    }

    // volume of ellipse 
    const Volume = () => {
        if(r1 && r2 && r3 !== null){
          const volumeOfEllipse = 4 / 3 * Math.PI * r1 * r2 * r3;
        setVolumeOfEllipse(volumeOfEllipse.toPrecision(6));  
        }
        else{
            setShowPopup(true);
        }
        
    }
    function VolumeReset() {
        if(r1 && r2 && r3 !== 0){
          setR1(0);
        setR2(0);
        setR3(0);
        setVolumeOfEllipse(0)  
        }
        
        else{
            setShowPopup(true);
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
                <h2 className='text-center fw-bold'> Elipses Calculator</h2>
                <p>Enter the radius into the sphere calculator's calculate field to compute the sphere's volume and surface area.
                </p>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="Ellipse (Ares & Perimeter)" className='value-dropdown'>Ellipse (Ares & Perimeter)</option>
                                <option value='Ellipse Volume' className='value-dropdown' >Ellipse Volume</option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area-of-triangle  /////////////////////////////// */}


                        {
                            selectCondition === "Ellipse (Ares & Perimeter)" && <>
                                <div className='text-center'> 
                                <dt>Formula</dt>
                                    Area = [ π×r1×r2 ]<br />
                                    Perimeter = [ 2×π×Sqrt((r1² + r2²)/2) ]
                                </div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Length(l) : </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        
                                            <Input value={r1}
                                            onChange={(e) => setR1(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Breadth(b) :</label></Col>
                                    <Col md={6} sm={12} xs={12} >

                                            <Input value={r2}
                                                onChange={(e) => setR2(e.target.value)} />
                                        </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Area Of Ellipse : </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{EllipseArea.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Perimeter Of Ellipse: </dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{EllipsePerimeter.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={Ellipse} text="Calculate" />
                                    <ButtonA onClick={EllipseReset} text="Reset" />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>

                        }

                        {/* ////////////////////////////////  Perimeter of triangle ////////////////////////////// */}

                        {
                            selectCondition === "Ellipse Volume" && <>
                            <div className='text-center'>  <dt>Formula</dt> Volume = [ (4/3)×π×r1×r2×r3 ]</div>
                                
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Radius(r1):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <Input value={r1}
                                                onChange={(e) => setR1(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Radius(r2):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <Input value={r2}
                                                onChange={(e) => setR2(e.target.value)} />
                                        </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Radius(r3): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                            <input type="number" className='ms-3' value={r3}
                                                onChange={(e) => setR3(e.target.value)} />
                                       </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt> Volume Of Elipse :</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>
                                            {VolumeOfEllipse.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA onClick={Volume} text="Calculate" />
                                    <ButtonA onClick={VolumeReset} text="Reset" />
                            {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {textShow && <>
                            {selectCondition === "Ellipse (Ares & Perimeter)" &&
                            <div ref={divRef}>
                                <Example heading="Ellipse (Area & Perimeter)"
                                    title="Step by step solution"
                                    step1="Data " step1heading="r1 = 10, r2 = 14, A = ? , P = ?"
                                    step2="Formula: " step2heading={<>Area = π x r1 x r2 --- (1)<br />
                                        Area = 2π √(r1)2 + (r2)2 / 2 --- (2)</>}
                                    step3="Solution : "
                                    step3value={<>Now putting values in the above equation:<br />
                                        Perimeter = 2 x (3.1418) x √(10)2 + (14)2 / 2<br />
                                        Perimeter = (6.2836) x √(100) + (196) / 2</>}
                                    step4=" Perimeter = 88.367000 m "
                                />
                                </div>
                            }
                            {selectCondition === "Ellipse Volume" &&
                            <div ref={divRef}>
                                <Example heading="Ellipse Volume" title="Step by step solution"
                                    step1="Data " step1heading=" r1 = 10, r2 = 14, r3 = 18, V = ?"
                                    step2="Formula " step2heading="Volume = 4 / 3 x π x (r1) x (r2) x (r3)"
                                    step3="Solution " step3heading={<>Now putting values in the above equation:<br />
                                        Volume = 4 / 3 x (3.1418) x (10) x (14) x (18) <br />
                                        Volume = (1.333) x (3.1418) x (10) x (14) x (18)<br /></>}
                                    step4="Volume = 10550.400 m3" />
                                </div>
                            }
                        </>}
                    </div>

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> Area of Ellipse <span>= πr1r2</span> </dt>
                            <dt>Volume of Ellipse <span> = (4/3) πr1r2r3 </span></dt>
                            <dt>Perimeter of Ellipse <span> = 2πSqrt ((r1² + r2²) / 2)</span></dt>
                            <dt>Where,</dt>
                            <span> r1, r2 and r3 = radii</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >

    )
}

export default Elipse