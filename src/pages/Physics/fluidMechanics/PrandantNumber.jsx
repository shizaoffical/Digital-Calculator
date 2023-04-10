import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function PrandantNumber() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Prandtl Number (Pr)');

    const [PR, setPR] = useState(null);
    const [A, setA] = useState(null);
    const [V, setV] = useState(null);

    // main states
    const [PRvalue, setPRvalue] = useState(0)
    const [Avalue, setAvalue] = useState(0)
    const [Vvalue, setVvalue] = useState(0)
    // functionality
    const PRcalculator = () => {
        if( V && A !== null){
        const PR = V/A ;
        setPRvalue(PR.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function PRcalculatorReset() {
        if( V && A !== 0){
        setPRvalue(0);
        setA(0);
        setV(0);
        setPR(0);
        setAvalue(0);
        setVvalue(0);
    }
    else{
        setShowPopup(true);
    }
    }
    const Acalculator = () => {
        if( V && PR !== null){
        const a = V/PR;
        setAvalue(a.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function AcalculatorReset() {
        if( V && PR !== 0){
            setPRvalue(0);
            setA(0);
            setV(0);
            setPR(0);
            setAvalue(0);
            setVvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    const Vcalculator = () => {
        if( PR && A !== null){
        const V= PR*A;
        setVvalue(V.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function VcalculatorReset() {
        if( PR && A !== 0){
            setPRvalue(0);
            setA(0);
            setV(0);
            setPR(0);
            setAvalue(0);
            setVvalue(0);
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
                    <h2 className='text-center fw-bold'> Prandtl Number Calculator</h2>
                    
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Prandtl Number (Pr)" className='value-dropdown'>Prandtl Number (Pr) </option>
                                    <option value='Kinematic Viscosity (v)' className='value-dropdown' >Kinematic Viscosity (v)</option>
                                    <option value='Thermal Diffusivity (a)' className='value-dropdown' >Thermal Diffusivity (a)</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  Prandtl Number (Pr) /////////////////////////////// */}
                            {selectCondition === "Prandtl Number (Pr)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Kinematic Viscosity (v):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m2/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Thermal Diffusivity (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} text="m2/s"/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Prandtl Number (Pr)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PRvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PRcalculator} />
                                    <ButtonA text="Reset" onClick={PRcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}

                            {/* ////////////////////////////////////  Kinematic Viscosity (v) /////////////////////////////// */}
                            {selectCondition === "Kinematic Viscosity (v)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Thermal Diffusivity (a):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} text="m/s2"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Prandtl Number (Pr): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PR}
                                            onChange={(e) => setPR(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Kinematic Viscosity (v)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Vvalue.toString().substring(0, 6)} m2/s</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Vcalculator} />
                                    <ButtonA text="Reset" onClick={VcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////////////////////////////  Thermal Diffusivity (a) /////////////////////////////// */}
                            {selectCondition === "Thermal Diffusivity (a)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Kinematic Viscosity (v): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={V}
                                            onChange={(e) => setV(e.target.value)} text="m2/s"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Prandtl Number (Pr):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={PR}
                                            onChange={(e) => setPR(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Thermal Diffusivity (a)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0, 6)} ms/2</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator} />
                                    <ButtonA text="Reset" onClick={AcalculatorReset} />
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
                            {textShow && <>
                                {selectCondition === "Prandtl Number (Pr)" &&
                                <div ref={divRef}>
                                    <Example heading="Prandtl Number (Pr)"
                                        title="step by step solution"
                                        step1="Data : "
                                         step1heading="Prandtl Number (Pr) = ? , Kinematic Viscosity (v) = 12 , Thermal Diffusivity (a) = 15"
                                        step2="Formula" step2heading="pr=v/a"
                                        step3="Solution:" step3heading={<>By putting Values in the above formula:
                                            <br />pr = 12 / 5</>} step4="Pr = 0.80000" 
                                            /></div>
                                }
                                {selectCondition === "Kinematic Viscosity (v)" &&
                                <div ref={divRef}>
                                    <Example heading="Kinematic Viscosity (v)"
                                        title="step by step solution"
                                        step1="Data : "
                                         step1heading="Kinematic Viscosity (v) = ? , Prandtl Number (Pr) = 18 , Thermal Diffusivity (a) = 15"
                                        step2="Formula" step2heading="v = Pr * a"
                                        step3="Solution:" step3heading={<>By putting Values in the above formula:
                                            <br />v = 18 * 15</>} step4="v = 270m2/s" 
                                            /></div>

                                }
                                {selectCondition === "Thermal Diffusivity (a)" &&
                                <div ref={divRef}>
                                    <Example heading="Thermal Diffusivity (a)"
                                        title="step by step solution"
                                        step1="Data : " 
                                        step1heading="Thermal Diffusivity (a) = ? , Kinematic Viscosity (v) = 12 , Prandtl Number (Pr) = 18"
                                        step2="Formula" step2heading="a =  12 / 18 "
                                        step3="Solution:" step3heading={<>By putting Values in the above formula:
                                            <br />a = 12 / 18 </>} step4="a = 0.66667m2/s" 
                                            /></div>
                                } </>}
                        </div>

                    </div>
                    <div className='mt-1'>
                        The Prandtl Number refers to a dimensionless number. It is a ratio of momentum diffusivity or kinematic viscosity to thermal diffusivity. In short, the Prandtl Number is the ratio of the product of the coefficient of viscosity and the specific heat at constant pressure to the thermal conductivity in fluid flow.

                        This advanced online Prandtl Number Calculator is used to calculate the diffusion in flowing systems by applying the given formulas. It is named after the German physicist Ludwig Prandtl.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Prandtl Number:<br /> <span>Pr = v/ α</span></dt>
                                <dt>Kinematic Viscosity:<br /><span>v = Pr α</span> </dt>
                                <dt>Thermal Diffusivity:<br /> <span>α = v/Pr</span> </dt>
                                <dt>Where, </dt>
                                Pr = Prandtl Number,<br />
                                v = Kinematic Viscosity,<br />
                                α = Thermal Diffusivity.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >

    )
}

export default PrandantNumber