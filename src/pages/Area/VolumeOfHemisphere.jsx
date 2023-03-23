import React, { useRef, useState, useEffect } from 'react'
    import { Col, Container, Row } from 'react-bootstrap'
    import NewCalculator from '../../components/NewCalculator'
    import { useReactToPrint } from 'react-to-print';
    import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function VolumeOfHemisphere() {
    const divRef = useRef(null);

        const [show, setShow] = useState(false);
        const [textShow, settextShow] = useState(false);
        const [length, setLength] = useState(16);
        const [radius, setRadius] = useState(12);
        const [volume, setVolume] = useState(0);       
    
        const calculate = () => {
            const volume = Math.PI * (radius *radius) * length + (4/3) * Math.PI * (radius* radius* radius);
            setVolume(volume.toPrecision(6));
        }
        function reset() {
            setVolume("")
            setLength(0)
            setRadius(0)
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
        <h2 className='text-center fw-bold'> Volume 0f Hemisphere</h2>
        <p>Input the radius & length and hit the calculate button to find volume of hemisphere.
        </p>
        <div className='polygon-calculator-div '>
            <ButtonA onClick={handlePrint} text="Print"/>
            <div className="polygon-calculator px-2" ref={componentsRef}>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                    <Col md={6} sm={12} xs={12} >
                        <label> Enter the radius :</label></Col>
                    <Col md={6} sm={12} xs={12} >
                            <input type="number" className='ms-3' value={radius}
                          onChange={(e) => setRadius(e.target.value)}  /> 
                          </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                    <Col md={6} sm={12} xs={12} >
                        <label> Enter the length :</label></Col>
                    <Col md={6} sm={12} xs={12} >
                            <input type="number" className='ms-3' value={length}
                          onChange={(e) => setLength(e.target.value)}  /> 
                          </Col>
                </Row>
                <h5 className='text-center py-2'>Result</h5>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                    <Col md={6} sm={12} xs={12}><dt>Area of aquare</dt></Col>
                    <Col md={6} sm={12} xs={12}>
                          <button className='formula-value-btn'>{volume.toString().substring(0,6)}</button></Col>
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
                <div ref={divRef}>
                <Example heading="Volume Of Hemisphere"
                    title="Calculate the volume of a cylinder with hemispherical ends with the given radius 5 and length 20 cm respectively."
                    step1="Volume of cylinder " step1heading=" (PI * r2 * h) + (( 4 / 3 ) * PI * r3) = (3.14*52 *20) + ((4/3)* 3.14 *53)"
                    step1value="= (3.14*25*20)+((4/3)*3.14*125) = 1570+ 392.5 *4/3 = 1570+523.33 = 2093 "
                     /></div>
            }

        </div>

        {/* ***************   formula ********** */}
        <div className='polygon-calculator-text-div'>
        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
            {show ?
                <div className='formula-backside'>
                    <dt> Volume of a Cylinder = (PI * r2 * h) + (( 4 / 3 ) * PI * r3) </dt>
                </div>
                : null}
            {/* ***************   formula end and example start ********** */}
        </div>

    </div>
</Container>
</div >
  )
}

export default VolumeOfHemisphere