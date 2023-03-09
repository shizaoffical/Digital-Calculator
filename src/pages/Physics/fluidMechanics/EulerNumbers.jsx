import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function EulerNumbers() {


    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Euler Number');
    // main states 
    const [EN, setEN] = useState(10);
    const [PC, setPC] = useState(10);
    const [D, setD] = useState(10);
    const [CV, setCV] = useState(10);
    // states
    const [ENvalue, setENvalue] = useState(0);
    const [Dvalue, setDvalue] = useState(0);
    const [PCvalue, setPCvalue] = useState(0);
    const [CVvalue, setCVvalue] = useState(0);

    // ENcalculator 
 const ENcalculator =() => {
    const encalculate = PC / (D *(CV*CV));
    setENvalue(encalculate);
 }
 function ENcalculatorReset() {
    setENvalue(0);
    setCV(0)
    setD(0)
    setPC(0)

 }
    // PCcalculator 
    const PCcalculator =() => {
        const pccalculate = EN / (D *(CV*CV)) ;
        setPCvalue(pccalculate);
        console.log("helo")
     }
     function PCcalculatorReset() {
        setPCvalue(0);
        setCV(0)
        setD(0)
        setEN(0)
     }
       // PCcalculator 
    const Dcalculator =() => {
        const Dcalculate = PC / (EN *(CV*CV));
        setDvalue(Dcalculate);
     }
     function DcalculatorReset() {
        setDvalue("");
        setCV(0)
        setPC(0)
        setEN(0)
    
     }
       // PCcalculator 
    const CVcalculator =() => {
        const cvcalculate =Math.sqrt(PC / (EN*CV)) ;
        setCVvalue(cvcalculate);
     }
     function CVcalculatorReset() {
        setCVvalue("");
        setEN(0)
        setPC(0)
        setD(0)
    
     }
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
                                        <Col md={12} sm={12} xs={12} >
                                            <label> Pressure Change (Δp):
                                                <input type="number" className='ms-3 me-2' value={PC}
                                                onChange={(e) => setPC(e.target.value) } />p
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Density (ρ):
                                                <input type="number" className='ms-3 me-2' value={D}
                                                onChange={(e) => setD(e.target.value)}/>kg/m3
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Character Velocity (V):
                                                <input type="number" className='ms-3 me-2' value={CV}
                                               onChange={(e) => setCV(e.target.value)}  />m/s
                                            </label></Col>
                                    </Row>
                                    <h5 className='text-center py-2'>Result</h5>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Euler Number</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{ENvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={ENcalculator} />
                                        <ButtonA text="Reset" onClick={ENcalculatorReset}/>

                                    </div>
                                </>}


                            {/* //////////////////////////////////// Pressure Change  /////////////////////////////// */}
                            {
                                selectCondition === "Pressure Change" && <>
                                    
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label> Density (p)     
                                                <input type="number" className='ms-3 me-2' value={D}
                                                onChange={(e) => setD(e.target.value)} />kg/m3
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Characteristic Velocity (V):
                                                <input type="number" className='ms-3 me-2' value={CV}
                                                onChange={(e) => setCV(e.target.value)} />m/s
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Euler Number (Eu):
                                                <input type="number" className='ms-3' value={EN}
                                                onChange={(e) => setEN(e.target.value)} />
                                            </label></Col>
                                    </Row>
                                    <h5 className='text-center py-2'>Result</h5>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Pressure Change</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{PCvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={PCcalculator} />
                                        <ButtonA text="Reset" onClick={PCcalculatorReset} />

                                    </div>
                                </>}
                            {/* //////////////////////////////////// Density /////////////////////////////// */}
                            {
                                selectCondition === "Density" && <>
                                    
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label> Pressure Change (Δp):   
                                                <input type="number" className='ms-3 me-2' value={PC}
                                                onChange={(e) => setPC(e.target.value)} />p
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Characteristic Velocity (V):
                                                <input type="number" className='ms-3 me-2' value={CV}
                                                onChange={(e) => setCV(e.target.value)} />m/s
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Euler Number (Eu):
                                                <input type="number" className='ms-3' value={EN}
                                                onChange={(e) => setEN(e.target.value)} />
                                            </label></Col>
                                    </Row>
                                    <h5 className='text-center py-2'>Result</h5>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Density</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{Dvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={Dcalculator}/>
                                        <ButtonA text="Reset" onClick={DcalculatorReset} />

                                    </div>
                                </>}
                                   
                            {/* ////////////////////////////////////Character Velocity /////////////////////////////// */}
                            {
                                selectCondition === "Character Velocity" && <>
                                   
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label> Pressure Change (Δp):
                                                <input type="number" className='ms-3 me-2' value={PC}
                                                onChange={(e) => setPC(e.target.value)} />p
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Density (ρ):
                                                <input type="number" className='ms-3 me-2' value={D}
                                                onChange={(e) =>  setD(e.target.value)} />kg/m3
                                            </label></Col>
                                    </Row>
                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                        <Col md={12} sm={12} xs={12} >
                                            <label>Euler Number (Eu):
                                                <input type="number" className='ms-3' value={EN}
                                               onChange={(e) => setEN(e.target.value)}  />
                                            </label></Col>
                                    </Row>
                                    <h5 className='text-center py-2'>Result</h5>

                                    <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                        <Col md={6} sm={12} xs={12}><dt>Character Velocity</dt></Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <button className='formula-value-btn'>{CVvalue.toString().substring(0,6)}</button></Col>
                                    </Row>
                                    <div className='text-center'>
                                        <ButtonA text="Calculate" onClick={CVcalculator} />
                                        <ButtonA text="Reset" onClick={CVcalculatorReset}/>

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
                                <Example heading="Flow Rate or Discharge"
                                    title={<>Calculate the Euler Number for the given details.<br />
                                        Pressure Change (Δp) = 25 P<br />Density (ρ) = 15 kg/m3<br />
                                        Characteristic Velocity (V) = 5 m/s</>}
                                    step1={<>Solution <br /> Apply Formula</>} step1heading="Eu = Δp/ρV2"
                                    step2="Euler Number (Eu) = 0.07" />
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