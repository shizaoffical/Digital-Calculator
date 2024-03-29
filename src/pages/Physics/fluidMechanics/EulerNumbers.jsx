import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function EulerNumbers() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Euler Number');
    // main states 
    const [EN, setEN] = useState(null);
    const [PC, setPC] = useState(null);
    const [D, setD] = useState(null);
    const [CV, setCV] = useState(null);
    // states
    const [ENvalue, setENvalue] = useState(0);
    const [Dvalue, setDvalue] = useState(0);
    const [PCvalue, setPCvalue] = useState(0);
    const [CVvalue, setCVvalue] = useState(0);

    // ENcalculator 
 const ENcalculator =() => {
    if(PC && CV && D !== null){
    const encalculate = Math.round((PC / (D * CV * CV)) * 100) / 100;
    setENvalue(encalculate.toPrecision(6));
}
else{
  setShowPopup(true);
} 
 }
 function ENcalculatorReset() {
    if(PC && CV && D !== 0){
        setENvalue(0);
    setCV(0)
    setD(0)
    setPC(0)
    setEN(0);
    setPCvalue(0);
    setCVvalue(0);
    setDvalue(0); 
    }
  else{
    setShowPopup(true);
  } 

 }
    // PCcalculator 
    const PCcalculator =() => {
        if(EN && CV && D !== 0){

        const pccalculate = Math.round(EN * D * CV * CV * 100) / 100 ;
        setPCvalue(pccalculate.toPrecision(6));
        console.log("helo")
    }
    else{
      setShowPopup(true);
    } 
     }
     function PCcalculatorReset() {
        if(EN && CV && D !== 0){
            setENvalue(0);
        setCV(0)
        setD(0)
        setPC(0)
        setEN(0);
        setPCvalue(0);
        setCVvalue(0);
        setDvalue(0); 
        }
      else{
        setShowPopup(true);
      } 
    
     }
       // PCcalculator 
    const Dcalculator =() => {
        if(PC && EN && CV !== null){
        const Dcalculate =Math.round((PC / (EN * CV * CV)) * 100) / 100;
        setDvalue(Dcalculate.toPrecision(6));
    }
    else{
      setShowPopup(true);
    }
     }
     function DcalculatorReset() {
        if(PC && EN && CV !== 0){
            setENvalue(0);
        setCV(0)
        setD(0)
        setPC(0)
        setEN(0);
        setPCvalue(0);
        setCVvalue(0);
        setDvalue(0); 
        }
      else{
        setShowPopup(true);
      } 
     }
       // PCcalculator 
    const CVcalculator =() => {
        if(PC && EN && D !== null){
        const cvcalculate = Math.round(Math.sqrt(PC / (EN * D)) * 100) / 100 ;
        setCVvalue(cvcalculate.toPrecision(6));
    }
    else{
      setShowPopup(true);
    } 
     }
     function CVcalculatorReset() {
        if(PC && EN && D !== 0){
            setENvalue(0);
        setCV(0)
        setD(0)
        setPC(0)
        setEN(0);
        setPCvalue(0);
        setCVvalue(0);
        setDvalue(0); 
        }
      else{
        setShowPopup(true);
      } 
    
     }

     const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    // handle change
    const handleSelectChange = (event) => {
        setSelectCondition(event.target.value);
    }

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
                    <h2 className='text-center fw-bold'> Euler Number Calculator</h2>
                    <span>Select the term you want to calculate, fill the required input boxes and click calculate button using Euler number calculator</span>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Euler Number" className='value-dropdown'>Euler Number </option>
                                    <option value='Pressure Change' className='value-dropdown' >Pressure Change</option>
                                    <option value='Density' className='value-dropdown' >Density</option>
                                    <option value='Character Velocity' className='value-dropdown' >Character Velocity</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  Euler Number /////////////////////////////// */}
                            {
                                selectCondition === "Euler Number" && <>
                                    
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Pressure Change (Δp):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={PC}
                                                onChange={(e) => setPC(e.target.value) } text="p"/>
                                                </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Density (ρ):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={D}
                                                onChange={(e) => setD(e.target.value)} text="kg/m3"/>
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Character Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={CV}
                                               onChange={(e) => setCV(e.target.value)}  text="m/s"/>
                                            </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Euler Number</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{ENvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={ENcalculator} />
                                        <ButtonA text="Reset" onClick={ENcalculatorReset}/>
                                        {showPopup &&<Popup onClick={togglePopup} /> }
                                    </div>
                                </>}
            {/* //////////////////////////////////// Pressure Change  /////////////////////////////// */}
                            {
                                selectCondition === "Pressure Change" && <>
                                    
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Density (p) : </label></Col>   
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={D}
                                                onChange={(e) => setD(e.target.value)} text="kg/m3" />
                                            </Col> 
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Characteristic Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={CV}
                                                onChange={(e) => setCV(e.target.value)} text="m/s"/>
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Euler Number (Eu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={EN}
                                                onChange={(e) => setEN(e.target.value)}  />
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Pressure Change</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{PCvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={PCcalculator} />
                                        <ButtonA text="Reset" onClick={PCcalculatorReset} />
                                        {showPopup &&<Popup onClick={togglePopup} /> }
                                    </div>
                                </>}
                            {/* //////////////////////////////////// Density /////////////////////////////// */}
                            {
                                selectCondition === "Density" && <>
                                    
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Pressure Change (Δp): </label></Col> 
                                        <Col md={6} sm={12} xs={12} >

                                                <Input value={PC}
                                                onChange={(e) => setPC(e.target.value)} text="p"/>
                                            </Col> 
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Characteristic Velocity (V):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={CV}
                                                onChange={(e) => setCV(e.target.value)} tetx="m/s"/>
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Euler Number (Eu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <Input value={EN}
                                                onChange={(e) => setEN(e.target.value)} />
                                            </Col>
                                    </Row>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Density</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{Dvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={Dcalculator}/>
                                        <ButtonA text="Reset" onClick={DcalculatorReset} />
                                        {showPopup &&<Popup onClick={togglePopup} /> }
                                    </div>
                                </>}    
                            {/* ////////////////////////////////////Character Velocity /////////////////////////////// */}
                            {
                                selectCondition === "Character Velocity" && <>
                                   
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label> Pressure Change (Δp):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <input type="number" className='ms-3 me-2' value={PC}
                                                onChange={(e) => setPC(e.target.value)} />p
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Density (ρ):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <input type="number" className='ms-3 me-2' value={D}
                                                onChange={(e) =>  setD(e.target.value)} />kg/m3
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={6} sm={12} xs={12} >
                                            <label>Euler Number (Eu):</label></Col>
                                        <Col md={6} sm={12} xs={12} >
                                                <input type="number" className='ms-3' value={EN}
                                               onChange={(e) => setEN(e.target.value)}  />
                                            </Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Character Velocity</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{CVvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={CVcalculator} />
                                        <ButtonA text="Reset" onClick={CVcalculatorReset}/>
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
                            {
                                textShow &&
                                <div ref={divRef}>
                                <Example heading="Flow Rate or Discharge"
                                    title={<>Calculate the Euler Number for the given details.<br />
                                        Pressure Change (Δp) = 25 P<br />Density (ρ) = 15 kg/m3<br />
                                        Characteristic Velocity (V) = 5 m/s</>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="Eu = Δp/ρV2"
                                    step2="Euler Number (Eu) = 0.07" /></div>
                            }</div>

                    </div>
                    <span >The Euler Number, Pressure Change, Density, and Characteristic Velocity are calculated and determined using this sophisticated online Euler Number Calculator.</span>
                    <br />
                    <h4>The Euler number is what?</h4>
                    The dimensional number used to calculate fluid flow is known as the Euler Number. The link between the local pressure drop and the kinetic energy per volume is expressed by the Euler Number.<br />
                    A perfect frictionless flow corresponds to an Euler Number of 1, and it is used to describe losses in the flow between a local pressure and the kinetic energy per volume.
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Euler Number :<br /> <span>Eu = Δp/ ρV2</span></dt>
                                <dt>Pressure Change :<br /><span>Δp= EuρV2</span> </dt>
                                <dt>Density:<br /> <span>ρ = Δp/ EuV2</span> </dt>
                                <dt>Characteristic Velocity :<br /><span>V =√ Δp/ Euρ</span> </dt>
                                <dt>Where, </dt>
                                Eu = Euler Number,<br />
                                Δp = Pressure Change,<br />
                                ρ = Density,<br />
                                V = Characteristic Velocity.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >


    )
}

export default EulerNumbers