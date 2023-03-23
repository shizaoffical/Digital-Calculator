import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';

function AntennaGain() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [EF, setEF] = useState(null);
    const [WL, setWL] = useState(null);
    const [AA, setAA] = useState(null)
    const [Gain, setGain] = useState(0)
    

    const calculate = () => {
        const  res_1=(EF*4*AA*Math.PI)/Math.pow(WL,2);
        if (AA && EF && WL !== null) {
            const gain = ((100000*(10*Math.log(res_1)/Math.log(10)))/100000).toPrecision(6);
            setGain(gain.toPrecision(6));
            console.log("hello");
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (Gain !== 0) {
            setWL(null);
            setEF(null);
            setAA(null);
            setGain(0)
        }
        else { setShowPopup(true);}
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

    useEffect(() => {
        if (textShow) {
          divRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, [textShow]);
    return (

        <div>
            <Container className='home-page '>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Area of polygon calculate"
                        title1="remainder theorem Calculator" title2="law of science Calculator"
                        title3="scienthic division Calculator" title4="curl Calculator" />
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                    <h2 className='text-center fw-bold'>Antenna Gain calculate</h2>
                    <p>To calculate antenna gain input efficiency, wavelength, physical aperture area, and press calculate button using antenna gain calculator</p>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Effiency:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={EF}
                                        onChange={(event) => setEF(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Wave Length:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={WL}
                                        onChange={(event) => setWL(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Physical Aperature Angle:</label> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input type="number" value={AA}
                                        onChange={(event) => setAA(parseFloat(event.target.value))} /> </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Antenna Gain:</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{Gain.toString().substring(0, 7)}</button></Col>
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
                                title={<>
                                    <br />
                                    Example:<br />
                                    Calculate the Antenna Gain for the given details.<br />
                                    Efficiency (η) = 5<br />
                                    Wave Length (λ) = 10<br />
                                    Physical Aperture Area (A) = 15<br />
                                </>}
                                step1={<>Solution:<br />Apply Formula</>}
                                step1heading=" GdBi = 10 LOG10 ( η4πA / λ2)"
                                step1value=" GdBi = 9.74271"
                                step2=" Antenna Gain (GdBi) = 9.74271" /></div>
                        }

                    </div>
                    <div className='mt-2'>
                        The directivity and electrical efficiency of an antenna are combined to form its gain. On the basis of efficiency, wave length, and physical aperture area, antenna gain is calculated. In other words, the ratio of the power supplied to the input of the given antenna to the power needed at the input of a loss-free reference antenna is known as the antenna gain.
                        The sign "dB" stands for antenna gain. The term "dB" stands for decibel, a unit of measurement for loss or gain. The square root of an antenna's gain for a given frequency and radiation resistance determines an antenna's effective length in terms of antenna gain.
                        An antenna's gain (dbi) or antenna gain in a specific direction is
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt>GdBi = 10 LOG10 ( η4πA / λ2) </dt>
                                <dt>Where,</dt>
                                η = Efficiency<br />
                                λ = Wave Length<br />
                                A = Physical Aperture Area<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default AntennaGain;