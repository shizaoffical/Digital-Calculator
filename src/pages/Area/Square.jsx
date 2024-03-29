import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';
function Square() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [length, setLength] = useState(null);
    const [areaOFSquare, setAreaOFSquare] = useState(0);
    const [perimeterOfSquare, setPerimeterOfSquare] = useState(0);
    const [diagonalOfSquare, setDiagonalOfSquare] = useState(0);
    const calculate = () => {
        const areaOFSquare = ((length * length).toFixed(2));
        setAreaOFSquare(areaOFSquare);
        const perimeterOfSquare = ((4 * length).toFixed(2));
        setPerimeterOfSquare(perimeterOfSquare);
        const diagonalOfSquare = ((1.41 * length).toFixed(2));
        setDiagonalOfSquare(diagonalOfSquare);
    }
    function reset() {
        if (length !== 0) {
            setLength(0)
            setAreaOFSquare(0)
            setPerimeterOfSquare(0)
            setDiagonalOfSquare(0)
        }
        else {
            setShowPopup(true);
        }
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
                <h2 className='text-center fw-bold'> Square Calculator</h2>
                <p>A Square is a 4-sided regular polygon with all sides equal and all internal angles 90 degree. It is a four sided polygon characterized by right angles and sides of equal length.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={12} sm={12} xs={12} >
                                <label> Enter the length <Input value={length}
                                    onChange={(e) => setLength(e.target.value)} /> </label></Col>
                        </Row>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Area of aquare</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{areaOFSquare.toString().substring(0, 6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Perimeter of square</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{perimeterOfSquare.toString().substring(0, 6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Diagnoal of square</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{diagonalOfSquare.toString().substring(0, 6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={reset} text="Reset" />
                        {showPopup && <Popup onClick={togglePopup} />}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                            <Example heading="Apply Formual"
                                title="Calculate the Area, Perimeter and Diagonal of a Square whose length is 10 cm."
                                step1="Step 1 : " step1heading=" Area of square: [(side)²]"
                                step1value="Area of square = 102 = 100 "
                                step2="Step 2 : " step2heading=" Perimeter of square: [4(side)]"
                                step2value="Perimeter of square: [4(side)]"
                                step3="Step 3 : " step3heading="Diagonal of square: [(side) (sqrt(2)) ]"
                                step3value="Diagonal of square=10 * sqrt(2) =10*1.41 = 14.1 " />
                        </div>
                    }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> Area of square :<span>[(side)<sup>2</sup>]</span> </dt>
                            <dt>Perimeter of square: <span>  [4(side)]</span></dt>
                            <dt>Where,</dt>
                            <span>Diagonal of square: [(side) (sqrt(2))]</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >
    )
}

export default Square