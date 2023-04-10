import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function AntennaArray() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [PA, setPA] = useState(null);
    const [WL, setWL] = useState(null);
    const [PTWOE, setPTWOE] = useState(null);
    const [DTWOE, setDTWOE] = useState(null);
    const [NE, setNE] = useState(null);
    const [AF, setAF] = useState(0)

    const calculate = () => {
        const K = 2 * Math.PI / WL;
        const pa = PA* Math.PI/180;
        const D = (K * DTWOE* Math.cos(pa)) + PTWOE;
        if (PA && WL && NE && PTWOE && DTWOE !== null) { 
            const af = Math.sin(NE * D / 2) / Math.sin(D / 2);
            setAF(af.toPrecision(6));
            console.log("hello");
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (AF  !== 0) {
            setPA(0);
            setWL(0);
            setPTWOE(0);
            setDTWOE(0);
            setNE(0);
            setAF(0);
        }
        else {
            setShowPopup(true);
        }
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
                    <h2 className='text-center fw-bold'>Antenna Array calculate</h2>
                    
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>  Polar Angle:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={PA}
                                            onChange={(event) => setPA(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Wave Length:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={WL}
                                            onChange={(event) => setWL(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Difference Phase of two Elements:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={PTWOE}
                                            onChange={(event) => setPTWOE(parseFloat(event.target.value))} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>  Distance between each two Elements:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={DTWOE} 
                                            onChange={(event) => setDTWOE(parseFloat(event.target.value) )} /> </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Number of Elements in Array:</label> </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <Input value={NE}
                                            onChange={(event) => setNE(parseFloat(event.target.value))} /> </Col>
                                </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Array Factor</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{AF.toString().substring(0, 7)}</button></Col>
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
                                Calculate the antenna array factor for the given details.<br />
                                Polar Angle (θ) = 5<br />
                                Wave Length (λ) = 10<br />
                                Difference Phase of two Elements (β) = 15<br />
                                Distance between each two Elements (d) = 20<br />
                                Number of Elements in Array (N) = 2
                                </>}
                                step1="Apply Formula" 
                                step1heading={<><br/>
                                 AF = [ ( Sin (N×φ / 2 )) / ( Sin (φ / 2 ) )]<br/>
                                k = 2π / λ<br/>
                                k = 2*3.14/10<br/>
                                k = 6.28/10<br/>
                                k = 0.628<br/>
                                φ = ( k×d×Cos θ) + β<br/>
                                φ = (0.628*20*cos5) +15<br/>
                                φ = (0.628*20*0.283) + 15<br/>
                                φ = 3.554 +15<br/>
                                φ = 18.554<br/>
                                AF = [ ( Sin (N×φ / 2 )) / ( Sin (φ / 2 )) ]<br/>
                                AF = [(sin(2*18.554/2)) /(sin(18.554/2))]</>}
                                step1value="AF = 0.7379222793164559"
                                step2="Array Factor (AF) = 0.737922279316455"  /></div> }

                    </div>
                    <div className='mt-2'>
                        Antenna Array refers to the set of several antennas that are connected and arranged in a regular structure to form a single antenna. An assembly of antenna elements with dimensions, spacing, and illumination sequence such that the fields for the individual elements are combined to produce a maximum intensity in a particular direction and minimum field intensities in other directions.<br/>
                        The spatial relationship of the individual antennas contributes to the directivity of the antenna array. Antennas exhibit a specific radiation pattern.<br/>
                        The overall radiation pattern of an array is determined by this array factor combined with the radiation pattern of the antenna element. The array factor is denoted by the symbol "AF".<br/>
                        The advanced online Antenna Array Calculator is used to calculate the
                         <span style={{color:"#F7941D"}}>antenna</span>  array factor by applying the formula and putting the respective values. The overall radiation pattern changes when several antenna elements are combined in an array<br/>
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Solution:</dt>
                                <dt> Apply Formula:</dt>
                                AF = [ ( Sin (N×φ / 2 )) / ( Sin (φ / 2 ) )]<br/>
                                k = 2π / λ<br/>
                                k = 2*3.14/10<br/>
                                k = 6.28/10<br/>
                                k = 0.628<br/>
                                φ = ( k×d×Cos θ) + β<br/>
                                φ = (0.628*20*cos5) +15<br/>
                                φ = (0.628*20*0.283) + 15<br/>
                                φ = 3.554 +15<br/>
                                φ = 18.554<br/>
                                AF = [ ( Sin (N×φ / 2 )) / ( Sin (φ / 2 )) ]<br/>
                                AF = [(sin(2*18.554/2)) /(sin(18.554/2))]<br/>
                                AF = 0.7379222793164559<br/>
                                <dt>Array Factor (AF) = 0.7379222793164559</dt>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default AntennaArray;