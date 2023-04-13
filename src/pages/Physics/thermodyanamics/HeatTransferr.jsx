import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import logo from "../../../images/header-logo.png";
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';

const UNIT_OPTIONS = {
  m: { label: 'meter', value: 1 },
  dm: { label: 'decimeter', value: 0.1 },
  dam: { label: 'decameter', value: 10 },
  hm: { label: 'hectometer', value: 100 },
  in: { label: 'inch', value: 0.0254 },
  cm: { label: 'centimeter', value: 0.01 },
};

function HeatTransferr() {
  const [showPopup, setShowPopup] = useState(false);
  const [unit, setUnit] = useState('m');
  const [temperatureDiff, setTemperatureDiff] = useState(null);
  const [thickness, setThickness] = useState(null);
  const [area, setArea] = useState(null);
  const [heatTransferRate, setHeatTransferRate] = useState(0);

  function calculateHeatTransferRate() {
    if(thickness && area && temperatureDiff !== null){
       const unitValue = UNIT_OPTIONS[unit].value;
    const calculatedHeatTransferRate =
      ((temperatureDiff * area) / thickness) *
      (1 / unitValue); // Convert to selected unit of measurement
    setHeatTransferRate(calculatedHeatTransferRate.toFixed(2));
    }
    else{
      setShowPopup(true);
    }
   
  }


  const handleReset = () => {
      if (thickness && area && temperatureDiff !== 0) {
           setArea(0);
           setHeatTransferRate(0);
           setThickness(0);
           setTemperatureDiff(0);
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

  return (

    <div>
      <Container className='home-page '>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
          <NewCalculator title="Area of polygon calculate"
            title1="remainder theorem Calculator" title2="law of science Calculator"
            title3="scienthic division Calculator" title4="curl Calculator" />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
          <h2 className='text-center fw-bold'>Heat Transferr Rate calculate</h2>
          
          <div className='polygon-calculator-div '>
            <ButtonA onClick={handlePrint} text="Print" />
            <div className="polygon-calculator px-2" ref={componentsRef}>
              <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                <Col md={6} sm={12} xs={12} >
                  <label htmlFor="frequency">Temperature differential (ΔT)in Celcius:</label></Col>
                <Col md={6} sm={12} xs={12}>
                  <Input
                    value={temperatureDiff}
                    onChange={(event) => setTemperatureDiff(event.target.value)}
                  /></Col>
              </Row>
              <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                <Col md={6} sm={12} xs={12} >
                  <label>Distance or length (x) in centimeter ({UNIT_OPTIONS[unit].label}):</label> </Col>
                <Col md={6} sm={12} xs={12}>
                  <Input 
                   value={thickness}
                   onChange={(event) => setThickness(event.target.value)}/>
                </Col>
              </Row>
              <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                <Col md={6} sm={12} xs={12} >
                  <label>  Thermal conductivity constant({UNIT_OPTIONS[unit].label} <sup>2</sup>):</label> </Col>
                <Col md={6} sm={12} xs={12}>
                  <Input value={area}
                    onChange={(event) => setArea(event.target.value)} />
                </Col>
              </Row>
              {/* units of measurements */}
              <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                <Col md={6} sm={12} xs={12} >
                  <label> units of measurements </label> </Col>
                <Col md={6} sm={12} xs={12}>
                <select value={unit} onChange={(event) => setUnit(event.target.value)}>
                    {Object.keys(UNIT_OPTIONS).map((option) => (
                      <option key={option} value={option}>
                        {UNIT_OPTIONS[option].label}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
              {/* units of measurements end*/}


              <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                <Col md={6} sm={12} xs={12}><dt> Heat Transfer Rate: </dt> </Col>
                <Col md={6} sm={12} xs={12}>
                  <button className='formula-value-btn'>{heatTransferRate} {unit}/s</button></Col>
              </Row>
            </div>
            <div className='text-center'>
              <ButtonA onClick={calculateHeatTransferRate}text="Calaulate" />
              <ButtonA onClick={handleReset} text="Reset" />
              {showPopup && <Popup onClick={togglePopup} />}
            </div>
          </div>
        </div>
      </Container>
    </div >
  )
}
export default HeatTransferr;