import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function BreakHorsePower() {
  const divRef = useRef(null);
  const [show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [textShow, settextShow] = useState(false);
  const [selectCondition, setSelectCondition] = useState('Flow Rate or Discharge');
  // main states
  const [FRD ,setFRD] = useState(null);
  const [WH, setWH] = useState(null);
  const [TH, setTH] = useState(null);
  const [PE, setPE] = useState(null);
  // work states
  const [frdvalue, setfrdvalue] = useState(0)
  const [whvalue, setwhvalue] = useState(0)
  const [thvalue, setthvalue] = useState(0)
  const [pevalue, setpevalue] = useState(0)
  // frdvalue functionalty
  const frdcalculator = () => {
    if(WH && PE && TH !== null){
      const Frdvalue = Math.round(((3960 * WH * PE) / (TH * 100)) * 100) / 100
    setfrdvalue(Frdvalue.toPrecision(6));
    }
    else{
      setShowPopup(true);
    }
  }
  function frdcalculatorReset() {
    if(WH && PE && TH !== 0 ){
      setTH(0);
      setPE(0);
      setWH(0);
      setFRD(0)
      setwhvalue(0)
      setfrdvalue(0)
      setthvalue(0) 
      setpevalue(0) 
    }
    else{
      setShowPopup(true);
    }
  }
  // whvalue
  const whcalculator = () => {
    if(FRD && PE && TH !== null){
       const whvalue = Math.round(((100 * FRD * TH) / ( 3960* PE)) * 100) / 100
    setwhvalue(whvalue.toPrecision(6));
    }
    else{
      setShowPopup(true);
    }
  }
   function whcalculatorReset() {
    if(FRD && PE && TH !== 0 ){
      setTH(0);
      setPE(0);
      setWH(0);
      setFRD(0)
      setwhvalue(0)
      setfrdvalue(0)
      setthvalue(0) 
      setpevalue(0) 
    }
    else{
      setShowPopup(true);
    }
  }
  // thvalue
  const thcalculator = () => {
    if(FRD && PE && FRD !== null ){
    const thvalue = Math.round(((3960 * WH * PE) / ( FRD*  100)) * 100) / 100
    setthvalue(thvalue.toPrecision(6));
  }
  else{
    setShowPopup(true);
  }
  }
   function thcalculatorReset() {
    if(FRD && PE && FRD !== 0 ){
      setTH(0);
      setPE(0);
      setWH(0);
      setFRD(0)
      setwhvalue(0)
      setfrdvalue(0)
      setthvalue(0) 
      setpevalue(0) 
    }
    else{
      setShowPopup(true);
    }
  }
  //pecalculator
   const pecalculator = () => {
    if(FRD && FRD && FRD !== null ){
    const pevalue = Math.round(((100 * FRD * TH) / (3960*  WH)) * 100) / 100 
    setpevalue(pevalue.toPrecision(6));
  }
  else{
    setShowPopup(true);
  }
  }  
  function pecalculatorReset() {
    if(FRD && FRD && FRD !== 0 ){
      setTH(0);
      setPE(0);
      setWH(0);
      setFRD(0)
      setwhvalue(0)
      setfrdvalue(0)
      setthvalue(0) 
      setpevalue(0) 
    }
    else{
      setShowPopup(true);
    }
  }
  
  // handle change
  const handleSelectChange = (event) => {
    setSelectCondition(event.target.value);
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

    <div>
          <Container className='home-page '>
      <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
        <NewCalculator title="Area of polygon calculate"
          title1="remainder theorem Calculator" title2="law of science Calculator"
          title3="scienthic division Calculator" title4="curl Calculator" />
      </div>
      <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'> Brake Horsepower Calculator</h2>
        <span>Use brake horsepower calculator to find water horsepower by entering the required values</span>
        <div className='polygon-calculator-div '>


          <Row className='text-center my-3'>
            <Col md={12} sm={12} xs={12} >
              <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                <option value="Flow Rate or Discharge" className='value-dropdown'>Flow Rate or Discharge </option>
                <option value='Work Horsepower' className='value-dropdown' >Work Horsepower</option>
                <option value='Total Head' className='value-dropdown' >Total Head </option>
                <option value='Pump Efficiency' className='value-dropdown' >Pump Efficiency </option>
              </select>
            </Col>
          </Row>

          <ButtonA onClick={handlePrint} text="Print" />
          <div className="polygon-calculator px-2" ref={componentsRef}>
            {/* ////////////////////////////////////  Flow Rate or Discharge /////////////////////////////// */}
            {
              selectCondition === "Flow Rate or Discharge" && <>
                <div className='text-center'> <dt>Formula</dt> <span>(((3960*wh*pe)/(th*100))*100)/100</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Total Head (th):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={TH}
                        onChange={(e) => setTH(e.target.value)} />
                    </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Pump Efficiency (pe): </label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={PE}
                        onChange={(e) => setPE(e.target.value)} />
                   </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Water Horsepower (wh):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={WH}
                        onChange={(e) => setWH(e.target.value)} />
                    </Col>
                </Row>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Flow Rate or Discharge</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{frdvalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={frdcalculator} />
                  <ButtonA text="Reset" onClick={frdcalculatorReset} />
                  {showPopup &&<Popup onClick={togglePopup} /> }
                </div>
              </>}


               {/* //////////////////////////////////// Work Horsepower  /////////////////////////////// */}
            {
              selectCondition === "Work Horsepower" && <>
                <div className='text-center'> <dt>Formula</dt> <span>(((100*frd*th)/(3960*pe))*100)/100</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Total Head (th):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={TH}
                        onChange={(e) => setTH(e.target.value)} />
                    </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Pump Efficiency (pe): </label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={PE}
                        onChange={(e) => setPE(e.target.value)} />
                   </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Flow Rate or Discharge (frd):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={FRD}
                        onChange={(e) => setFRD(e.target.value)} />
                    </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Water Horsepower</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{whvalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={whcalculator} />
                  <ButtonA text="Reset"  onClick={whcalculatorReset} />
                  {showPopup &&<Popup onClick={togglePopup} /> }
                </div>
              </>}
               {/* ////////////////////////////////////Total Head  /////////////////////////////// */}
            {
              selectCondition === "Total Head" && <>
                <div className=' text-center'> <dt>Formula</dt> <span>(((3960*wh*pe)/(frd*100))*100)/100</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Water Horsepower:</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={WH}
                        onChange={(e) => setWH(e.target.value)} />
                    </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Pump Efficiency (pe):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={PE}
                        onChange={(e) => setPE(e.target.value)} />
                    </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Flow Rate or Discharge (frd):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <Input value={FRD}
                        onChange={(e) => setFRD(e.target.value)} />
                    </Col>
                </Row>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Total Head</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{thvalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={thcalculator} />
                  <ButtonA text="Reset" onClick={thcalculatorReset} />
                  {showPopup &&<Popup onClick={togglePopup} /> }
                </div>
              </>}

   {/* //////////////////////////////////// Pump Efficiency /////////////////////////////// */}
   {
              selectCondition === "Pump Efficiency" && <>
                <div className=' text-center'> <dt>Formula</dt> <span>(((3960*wh*pe)/(frd*100))*100)/100</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Water Horsepower:</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <input type="number" className='ms-3' value={WH}
                        onChange={(e) => setWH(e.target.value)} />
                    </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Total Head (th):  </label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <input type="number" className='ms-3' value={TH}
                        onChange={(e) => setTH(e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Flow Rate or Discharge (frd):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                      <input type="number" className='ms-3' value={FRD}
                        onChange={(e) => setFRD(e.target.value)} />
                    </Col>
                </Row>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Pump Efficiency</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{pevalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={pecalculator} />
                  <ButtonA text="Reset" onClick={pecalculatorReset} />
                  {showPopup &&<Popup onClick={togglePopup} /> }
                </div>
              </>}

          </div>
          <center>
            <button type='button'
              style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }}
              className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
          </center>
          <div>
            {textShow &&<>
                {selectCondition === "Flow Rate or Discharge" &&
                <div ref={divRef}>
                  <Example heading="Flow Rate or Discharge"
                    title="step by step solution"
                    step1="Data : " step1heading="wh = 10 , pe = 10 , th = 10 , frd = ?"
                    step2="Formula" step2heading="frd = (((3960*wh*pe)/(th*100))*100)/100 "
                    step3="360"  
                    /></div>
                }
                 {selectCondition === "Work Horsepower" &&
                <div ref={divRef}>
                  <Example heading="Work Horsepower"
                    title="step by step solution"
                    step1="Data : " step1heading="frd = 10 , pe = 10 , th = 10 , wh = ?"
                    step2="Formula" step2heading="wh = (((100*frd*th)/(3960*pe))*100)/100 "
                    step3="0.25"  
                    /></div>
                } 
                {selectCondition === "Total Head" &&
                <div ref={divRef}>
                  <Example heading="Total Head"
                    title="step by step solution"
                    step1="Data : " step1heading="wh = 10 , pe = 10 , frd = 10 , th = ?"
                    step2="Formula" step2heading="th = (((3960*wh*pe)/(frd*100))*100)/100 "
                    step3="396"  
                    /></div>
                }
                {selectCondition === "Pump Efficiency" &&
                <div ref={divRef}>
                <Example heading="Pump Efficiency"
                  title="step by step solution"
                  step1="Data : " step1heading="wh = 10 , frd = 10 , th = 10 , pe = ?"
                  step2="Formula" step2heading="pe = (((100*frd*th)/(3960*wh))*100)/100 "
                  step3="360"  
                  /></div>
              }  </> }
              </div>

        </div>

        {/* ***************   formula ********** */}
        <div className='polygon-calculator-text-div'>
          <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
          {show ?
            <div className='formula-backside'>
              <dt> Flow Rate or Discharge(frd):<br /> <span>(((3960*wh*pe)/(th*100))*100)/100</span></dt>
              <dt>Work Horsepower(wh):<br /><span>(((100*frd*th)/(3960*pe))*100)/100</span> </dt>
              <dt>Total Head(th):<br /> <span>(((3960*wh*pe)/(frd*100))*100)/100</span> </dt>
              <dt>Pump Efficiency(pe):<br /><span>(((100*frd*th)/(3960*wh))*100)/100</span> </dt>
            </div>
            : null}
          {/* ***************   formula end and example start ********** */}
        </div>
        Brake Horsepower is defined as the actual or useful horsepower of an engine that is determined from a force exerted on a friction brake. Here the horsepower of an engine is recorded on a device called dynamometer. The advanced online Brake Horsepower Calculator is useful in calculating the brake horsepower of an engine by using the formula.<br />
        The Brake Horsepower is termed as the dynamometer connected to the drive shaft.
      </div>
    </Container > 
    </div >


  )
}

export default BreakHorsePower