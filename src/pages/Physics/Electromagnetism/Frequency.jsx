import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';

function Frequency() {
    const [showPopup, setShowPopup] = useState(false);
    const [frequency, setFrequency] = useState(null);
    const [units, setUnits] = useState("Hz");
    const [wavelength, setWavelength] = useState(0);

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    };

    const handleUnitsChange = (e) => {
        setUnits(e.target.value);
    };
    const calculate = () => {

        if (frequency !== null) {
            const c = 299792458; // speed of light in m/s

            let f = parseFloat(frequency);
            switch (units) {
                case "kHz":
                    f *= 1000;
                    break;
                case "MHz":
                    f *= 1000000;
                    break;
                case "GHz":
                    f *= 1000000000;
                    break;
                default:
                    // no action needed for Hz
                    break;
            }

            const lambda = c / f;
            setWavelength(lambda.toFixed(2) + " meters");
        }
        else {
            setShowPopup(true);
        }
    }
    const handleResetClick = () => {
        if (wavelength !== 0) {
            setWavelength(0);
            setFrequency(0)
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
                    <h2 className='text-center fw-bold'>Frequency calculate</h2>
                    <p>To calculate antenna gain input efficiency, wavelength, physical aperture area, and press calculate button using antenna gain calculator</p>
                    <div className='polygon-calculator-div '>
                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                        <div className='text-center'> <dt>Formula</dt> <span> λ = C / f </span></div>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                                <Col md={6} sm={12} xs={12} >
                                    <label htmlFor="frequency">Frequency:</label></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <input
                                        type="number"
                                        id="frequency"
                                        name="frequency"
                                        value={frequency}
                                        onChange={handleFrequencyChange}
                                    />
                                    <select className='ms-2' value={units} onChange={handleUnitsChange}>
                                        <option value="Hz">Hz</option>
                                        <option value="kHz">kHz</option>
                                        <option value="MHz">MHz</option>
                                        <option value="GHz">GHz</option>
                                    </select></Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Wavelength:</dt> </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{wavelength}</button></Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <ButtonA onClick={calculate} text="Calaulate" />
                            <ButtonA onClick={handleResetClick} text="Reset" />
                            {showPopup && <Popup onClick={togglePopup} />}
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}
export default Frequency;