import React, { useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../components/Example';
import ButtonA from '../../components/ButtonA';
import Popup from '../../components/Popup';
import Input from '../../components/Input';
function Sphere() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [radius, setradius] = useState(null)
    const [VS, setVS] = useState(0);
    const [CSA, setCSA] = useState(0);

    const calculate = () => {
        if(radius !== null){
           const vs = (Math.round((4 / 3) * 3.14 * radius * radius * radius * 1000) / 1000);
        setVS(vs.toPrecision(6));
        const csa =(Math.round(4 * 3.14 * radius * radius * 1000) / 1000);
        setCSA(csa.toPrecision(6)); 
        }
        else{
            setShowPopup(true);
           }
    }

    function reset() {
        if(radius !== 0){
        setradius(0)
        setVS(0)
        setCSA(0);
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
                <h2 className='text-center fw-bold'> Sphere Calculator</h2>
                <p>Enter the radius into the sphere calculator's calculate field to compute the sphere's volume and surface area.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print"/>
                    <div className="polygon-calculator px-2" ref={componentsRef}>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={12} sm={12} xs={12} >
                                <label> Volume of Sphere[ (4/3)πr³ ] 
                                    <Input value={radius}
                                    onChange={(e) => setradius(e.target.value)} /> </label></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>r</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                  <button className='formula-value-btn'>{VS.toString().substring(0, 6)}</button></Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>θ</dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{CSA.toString().substring(0, 6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate"/>
                        <ButtonA onClick={reset}  text="Reset"/>
                        {showPopup &&<Popup onClick={togglePopup} /> }
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                        <Example heading="Sphere Calculator Example"
                            title={<>Find the volume and curved surface area of a Sphere (tsa of sphere) with the given radius 2.<br />
                                How to find the volume of a sphere?</>}
                            step1="Solution : " step1heading=" Find the volume of a sphere.e"
                            step1value={<>Volume = (4/3) πr³<br/> = (4/3) * 3.14 * 4³ <br/>= 1.33 * 3.14 * 27<br/> = 33.40 </>}
                            step2={<>Solution </>}
                            step2heading={<>Find the curved surface area (CSA)</>}
                            step2value={<>Curved Surface Area (CSA) = 4πr²<br/> = 4 * 3.14 * 2² <br/>= 12.56 * 4<br/>= 50.24 </>}
                            />
                   </div> }

                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt> Volume of Sphere <span>= (4/3) πr³</span> </dt>
                            <dt>Curved Surface Area (CSA) of Sphere <span> = 4πr²</span></dt>
                            <dt>Where,</dt>
                            <span> r = radius, π = 3.14</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >

    )
}

export default Sphere