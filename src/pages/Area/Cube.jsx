import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';

function Cube() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [volume, setVolume] = useState(0);
    const [length, setLength] = useState(75);
    const [setAreaOfCube, setSetAreaOfCube] = useState(0);
    const [DiameterOfCube, setDiameterOfCube] = useState(0);


    const calculate = () => {
        const volume = length * length* length;
        setVolume(volume);
        const setAreaOfCube = 6 * ( length * length );
        setSetAreaOfCube(setAreaOfCube);
        const DiameterOfCube = Math.sqrt(3) * length;
        setDiameterOfCube(DiameterOfCube);

    }

    function reset() {
        setLength(0); 
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
                <h2 className='text-center fw-bold'>Cube calculate</h2>
                <p>Input the length and press calculate button to find the cube 
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={12} sm={12} xs={12} >
                                <label>  Radius:<input type="number" className='ms-3' value={length}
                               onChange={(e) => setLength(e.target.value)} /> </label></Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Volume of Cube : [ a3 ] </dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{volume.toString().substring(0,6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Surface Area of Cube : [ 6a2 ]</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{setAreaOfCube.toString().substring(0,6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Diagonal of Cube : [ Sqrt(3)*a ]</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{DiameterOfCube.toString().substring(0,6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate"/>
                        <ButtonA onClick={reset} text="Reset" />
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <Example heading="Cube Example" title=" Find the volume, surface area, and diagonal of a cube with the given side 3."
                        step1="Step 1 : " step1heading=": Find the volume." step1value=" Volume= a?? = 3?? = 27. " 
                        step2="Step 2 : " step2heading="Find the surface area" step2value=" Surface Area = 6a?? = 6 * 3?? = 6 * 9 = 54."
                        step3="Step 3 : " step3heading="Find the diagonal" step3value=" Diagonal = Sqrt(3)*a = Sqrt(3) * 3 = 1.73 * 3 = 5.19. "/>

                    }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>Volume of Cube = a??</dt>
                            <dt>Surface Area of Cube = 6a??</dt>
                            <dt>Diagonal of Cube = Sqrt (3)*a</dt>
                            <dt>where,</dt>
                            a = side
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >

    )
}

export default Cube