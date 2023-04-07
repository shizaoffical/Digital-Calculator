import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Example from '../../../components/Example';


function PlanetWeight() {
    const divRef = useRef(null);
    const [textShow, settextShow] = useState(false);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [Weigth, setWeight] = useState(null);
    const [Mercury, setMercury] = useState(0);
    const [Venus, setVenus] = useState(0);
    const [Mars, setMars] = useState(0);
    const [Jupiter, setJupiter] = useState(0);
    const [Saturn, setsaturn] = useState(0);
    const [Uranus, setUranus] = useState(0);
    const [Neptune, setNeptune] = useState(0);
    const [Pluto, setPluto] = useState(0);
    const [Moon, setMoon] = useState(0);

    const calculate = () => {
        if (Weigth !== null) {
          const weight =parseFloat(Weigth);
            setMercury( weight*0.38.toFixed(3))
            setVenus( weight*0.91.toFixed(3));
            setMars( weight*0.38.toFixed(3));
            setJupiter( weight*2.54.toFixed(3));
            setsaturn( weight*1.08.toFixed(3));
            setUranus(weight*0.91.toFixed(3));
            setNeptune( weight*1.19.toFixed(3));
            setPluto( weight*0.06.toFixed(3));
            setMoon( (weight*0.17).toFixed(3));
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (  Mercury && Venus && Mars && Jupiter && Saturn && Uranus && Neptune && Pluto && Moon !== 0) {
            setMercury(0);
            setVenus(0);
            setMars(0);
            setJupiter(0);
            setsaturn(0);
            setUranus(0);
            setNeptune(0);
            setPluto(0);
            setMoon(0);
            setWeight(0);

        }
        else { setShowPopup(true); }
    };
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: <div> <img src={logo} alt="" /></div>,
        onAfterPrint: () => alert("print success"),
    })


    return (

        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'>Planet Weight Calculator</h2>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Magnetic Current:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={Weigth}
                                        onChange={(event) => setWeight(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On mercury you weight:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Mercury.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On venus you weight:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Venus.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On mars you weight:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Mars.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On jupiter you weight:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Jupiter.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On saturn you weight:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Saturn.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On uranus you weight:</dt> </Col>
                                <Col xl={6} g={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Uranus.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On neptune you weight:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Neptune.toString().substring(0, 9)}</button></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On pluto you weight:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Pluto.toString().substring(0, 10)}</button></Col>
                            </Row> <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}><dt>On moon you weight:</dt> </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Moon.toString().substring(0, 9)}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>

                        <center>
                            <button type='button'
                                style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                        </center>
                        {
                            textShow &&
                            <div ref={divRef}>
                                <Example heading=" Example"
                                    title={<>Calculate and find weight on other planets for the given details.
                                        Enter Your Weight = 42</>}
                                    step1="Solution"
                                    step1heading={<>
                                        On mercury you weigh: 15.96<br />
                                        On venus you weigh: 38.22<br />
                                        On mars you weigh = 15.96<br />
                                        On jupiter you weigh: 106.68<br />
                                        On saturn you weigh: 45.36<br />
                                        On uranus you weigh: 38.22<br />
                                        On neptune you weigh: 49.98<br />
                                    </>} step1value="   On Pluto you weigh: 2.52"
                                    step2="  On moon you weigh: 7.140000000" />
                            </div>
                        }

                    </div>
                    <div className='mt-2'>
                        Weight on planets means your weight that depends on your mass, the mass of the planet, and the distance you are from the center of the planet. Your weight becomes less or more depending on the planet you are on as the planets in our Solar System are of different sizes.<br />
                        This advanced online Weight on Planets Calculator is used to calculate your weight on different planets in the solar system.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                Your weight on other planets are calculated according to their conversion factors (i.e.)<br />
                                Mercury .38,<br />
                                Venus .91,<br />
                                Earth 1,<br />
                                Mars .38,<br />
                                Jupiter 2.54<br />
                                , Saturn 1.08,<br />
                                Uranus .91,<br />
                                Neptune 1.19,<br />
                                Pluto .06,moon .17<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default PlanetWeight;