import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Cone() {
    const [show, setShow]= useState(false);
    const [textShow, settextShow] = useState(false);
    const [height, setHeight] = useState(10);
    const [radius, setRadius] = useState(5);
    const [csa, setCsa] = useState(0);
    const [tsa, settsa] = useState(0);
    const [volume, setVolume] = useState(0);
    const [slantheight, setSlantheight] = useState(0);
    

    const calculate = () => {
        
    const Slantheight = Math.sqrt(radius * radius + height * height);
    setSlantheight(Slantheight);
    const csa = 3.14 * radius * Slantheight;
    setCsa(csa);
    const volume = (1 / 3) * Math.PI * radius * radius * height;
    setVolume(volume);
    const tsa = Math.PI* radius * (Slantheight + radius);
    settsa(tsa);
    
    }
           
    function reset() {
        setHeight(5);
        setRadius(10);
        setVolume(0);
        settsa(0);
        setSlantheight(0);
        setCsa(0);
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
                <h2 className='text-center fw-bold'>Cone calculate</h2>
                <p>A cone is a single-vertex, three-dimensional geometric shape having a circular base. The perpendicular height is the line that runs from the centre of the base to the apex.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={12} sm={12} xs={12} >
                                <label>  Radius:<input type="number"  className='ms-3' value={radius}
                                     onChange={(e) => setRadius(e.target.value)}/> </label></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={12} sm={12} xs={12} >
                                <label>  Height:<input type="number" className='ms-3' value={height}
                                    onChange={(e) => setHeight(e.target.value)}  /> </label></Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Slant Height(l) of Cone:</dt>[ Sqrt(r?? + h??) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{slantheight.toString().substring(0,5)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Volume of Cone:</dt>  (1/3)??r?? h</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{volume.toString().substring(0,5)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Curved Surface Area(CSA) of Cone:</dt>[ ??rl ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{csa.toString().substring(0,5)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Total Surface Area(TSA) of Cone:</dt>[ ??r(l+r) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{tsa.toString().substring(0,5)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate}text="Calculate"/>
                        <ButtonA onClick={reset} text="Reset"/>
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <Example heading="Cone Example" title=" Find the volume, curved surface, and total surface area of a cone with the given radius 3 and height 4."
                        step1="Step 1 : " step1heading=": Find the height" step1value="  Slant height (l) = Sqrt(r?? + h??) = Sqrt(3?? + 4??)= Sqrt(9 + 16) = Sqrt(25) = 5." 
                        step2="Step 2 : " step2heading="Find the volume" step2value=" Volume = (1/3)??r?? h = (1/3) * 3.14 * 3?? * 4 = 0.33 * 113.04 = 37.68."
                        step3="Step 3 : " step3heading="Find the curved surface area (CSA)" step3value=" Circumference = ??d = 3.14 *8 = 25.12(3)  "/> 
                    }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt className='Fw-bold'>Slant height of Cone (l) = </dt>Sqrt(r?? + h??)<br />
                            <dt>Volume of Cone =  </dt>(1/3)??r?? h<br />
                            <dt>Curved Surface Area (CSA) of Cone =</dt>??rl<br />
                            <dt>Total Surface Area (TSA) of Cone =,</dt>??r(l + r)<br />
                            <dt>where,</dt><br />
                            r = radius, l = slant height, h = height, ?? = 3.14<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >

    )
}

export default Cone