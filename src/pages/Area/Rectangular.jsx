import React, { useRef, useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';
function Rectangular() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [x , setX] = useState(null);
    const [y , setY] = useState(null);
    const [r , setR] = useState(0);
    const [angle , setangle] = useState(0);

    const calculate = () => {
        if(x && y  !== null){
            const r =Math.sqrt(x * x  + y * y);
        setR(r.toPrecision(6)) ;
        const angle =Math.tan(y/x);
        setangle(angle.toPrecision(6)); 
        }
       else{
        setShowPopup(true);
       }
    }

    function reset() {
        if(x && y  !== 0){
            setX(0);
        setY(0);
        setR(0);
        setangle(0); 
        }
        else{
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
                <h2 className='text-center fw-bold'> Rectangular Polar Conversion Calculator</h2>
                <p>The rectangular coordinates are converted to polar coordinates using the Rectangular to Polar Conversion Calculator, and vice versa. For the specified rectangle values, it determines and shows the equivalent polar value.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} >
                                <label> x :</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                    <Input value={x}
                                onChange={(e) => setX(e.target.value)}/> 
                                </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={6} sm={12} xs={12} >
                                <label> y :</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                    <Input value={y}
                               onChange={(e) => setY(e.target.value)} />
                               </Col> 
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>r</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{r.toString().substring(0,6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>θ</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{angle.toString().substring(0,6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate"/>
                        <ButtonA onClick={reset} text="Reset"/>
                        {showPopup &&<Popup onClick={togglePopup} /> }
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                        <Example heading=" Rectangular Polar Conversion Calculator"
                            title="Suppose we have a complex number expressed in rectangular form and we want to express it in polar form. (That is, we know a and b and we need r and θ.) We see that we can use the formulas:
                        Convert the complex number 5 + 2 i to polar form."
                            step1="Solution : " step1heading=":We have a = 5 and b = 2. We compute"
                            step1value="so the complex number in polar form must be 5.39 ∠ 21.8°. " />
                   </div> }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>   R = sqrt(x * x + y * y) , angle = atan(y/x)</dt>
                            <dt>Where,</dt>
                            <dt>Rectangle coordinates:</dt>
                            <span>x and y - horizontal and vertical distances from the origin.</span><br />
                            <dt>Polar coordinates(r, q):</dt><br />
                            <span> r - the distance from the origin to the point.</span><br />
                            <span> q - the angle measured from the positive x axis to the point.</span><br />
                            <span> t - angle (in degrees)</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >


    )
}

export default Rectangular