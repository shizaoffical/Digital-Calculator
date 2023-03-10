import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Hemisphere() {

    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [radius ,setRadius] = useState(12);
    const [volumeOfHemisphere ,setVolumeOfHemisphere] = useState(0);
    const [curvedSurfaceArea ,setCurvedSurfaceArea] = useState(0);
    const [totalSurfaceArea ,setTotalSurfaceArea] = useState(0);

    const calculate = () =>  {
     const volumeOfHemisphere = (2/3)*3.14*radius*radius*radius;
     setVolumeOfHemisphere(volumeOfHemisphere);
     const curvedSurfaceArea =2 *3.14 *radius*radius;
     setCurvedSurfaceArea(curvedSurfaceArea);
     const totalSurfaceArea = 3 * Math.PI *radius *radius;
     setTotalSurfaceArea(totalSurfaceArea);
    }

    function reset() {
        setRadius(0);
        setVolumeOfHemisphere("");
        setCurvedSurfaceArea("");
        setTotalSurfaceArea("")
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
        <h2 className='text-center fw-bold'>Hemisphere calculate</h2>
        <div className='polygon-calculator-div '>
            <ButtonA onClick={handlePrint} text="Print"/>
            <div className="polygon-calculator px-2" ref={componentsRef}>
                <Row style={{ alignItems: "center", textAlign: "center" }}>
                    <Col md={12} sm={12} xs={12} >
                        <label>Enter the  radius:<input type="number" className='ms-3' value={radius}
                     onChange={(e) => setRadius(e.target.value)}/> </label></Col>
                </Row>
                <h5 className='text-center py-2'>Result</h5>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                    <Col md={6} sm={12} xs={12}><dt>Volume of Hemisphere : [ (2/3)??r?? ]</dt></Col>
                    <Col md={6} sm={12} xs={12}>
                        <button className='formula-value-btn'>{volumeOfHemisphere.toString().substring(0,6)}</button></Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                    <Col md={6} sm={12} xs={12}><dt>Curved Surface Area of Hemisphere : [ 2??r?? ]</dt></Col>
                    <Col md={6} sm={12} xs={12}>
                        <button className='formula-value-btn'>{curvedSurfaceArea.toString().substring(0 ,6)}</button></Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                    <Col md={6} sm={12} xs={12}><dt>Total Surface Area of Hemisphere : [ 3??r?? ]</dt></Col>
                    <Col md={6} sm={12} xs={12}>
                        <button className='formula-value-btn'>{totalSurfaceArea.toString().substring(0,6)}</button></Col>
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
                <Example heading="Hemisphere Example" 
                title=" Find the volume, curved surface and total surface area of a hemisphere with the given radius 2."
                step1="Step 1 : " step1heading=": Find the volume."
                 step1value="Volume = (2/3)??r?? = (2/3) * 3.14 * 2?? = 0.67 * 3.14 * 8 = 16.8304" 
                step2="Step 2 : " step2heading="Find the curved surface area (CSA).
                " step2value="Curved Surface Area(CSA) = 2??r?? = 2 * 3.14 * 2?? = 6.28 * 4= 25.12"
                step3="Step 3 : " step3heading="Find the total surface area (CSA)."
                 step3value="Total Surface Area(TSA) = 3??r?? = 3 * 3.14 * 2?? = 9.42 * 4 = 37.68"/>

            }

        </div>

        {/* ***************   formula ********** */}
        <div className='polygon-calculator-text-div'>
        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
            {show ?
                <div className='formula-backside'>
                    <dt>Volume of Hemisphere  <span>= (2/3)??r??</span></dt>
                    <dt>Curved Surface Area(CSA) of Hemisphere <span>= 2??r??</span></dt>
                    <dt>Total Surface Area(TSA) of Hemisphere  <span>= 3??r??</span></dt>
                    <dt>where,</dt>
                    r = radius, ?? = 3.14
                </div>
                : null}
            {/* ***************   formula end and example start ********** */}
        </div>

    </div>
</Container>
</div >
  )
}

export default Hemisphere