import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function Schmidt() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('schmidt Number');
    const [SN, setSN] = useState(null);
    const [KV, setKV] = useState(null);
    const [MD, setMD] = useState(null);
    const [SNvalue, setSNvalue] = useState(0);
    const [KVvalue, setKVvalue] = useState(0);
    const [MDvalue, setMDvalue] = useState(0);

    // SNcalculator
    const SNcalculator = () => {
        if(KV && MD !== null){
         const SN = Math.round((KV / MD) * 100) / 100;
         setSNvalue(SN.toPrecision(6));
        }
        else{
            setShowPopup(true);
        }
    }
    function SNcalculatorReset() {
        if(KV && MD !== 0){
            setKV(0);
            setMD(0);
            setSN(0);
            setKVvalue(0);
            setMDvalue(0);
            setSNvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // KVcalculatorReset
    const KVcalculator = () => { 
        if(SN && MD !== null){
             const KV = Math.round((SN * MD) * 100) / 100; 
             setKVvalue(KV.toPrecision(6));
            }
            else{
                setShowPopup(true);
            } 
    }
    function KVcalculatorReset() {
        if(SN && MD !== 0){
            setKV(0);
            setMD(0);
            setSN(0);
            setKVvalue(0);
            setMDvalue(0);
            setSNvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    // MDcalculatorReset
    const MDcalculator = () => {
        if(KV && SN !== null){
         const MD = Math.round((KV / SN) * 100) / 100;
          setMDvalue(MD.toPrecision(6)); 
        }
        else{
            setShowPopup(true);
        }
    }
    function MDcalculatorReset() {
        if(KV && SN !== 0){
            setKV(0);
            setMD(0);
            setSN(0);
            setKVvalue(0);
            setMDvalue(0);
            setSNvalue(0);
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


        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'> Schmidt Calculator</h2>
                <div className='polygon-calculator-div '>


                    <Row className='text-center my-3'>
                        <Col md={12} sm={12} xs={12} >
                            <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                <option value="schmidt Number" className='value-dropdown'>schmidt Number</option>
                                <option value='kinematics viscosity' className='value-dropdown' >kinematics viscosity</option>
                                <option value='Mass Diffusivity' className='value-dropdown' >Mass Diffusivity </option>
                            </select>
                        </Col>
                    </Row>

                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////   Area of Kite  /////////////////////////////// */}
                        {selectCondition === "schmidt Number" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Kinematic Viscosity (Sc):</label></Col>
                                <Col md={6} sm={12} xs={12} >

                                    <Input value={KV}
                                        onChange={(e) => setKV(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Mass Diffusivity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={MD}
                                        onChange={(e) => setMD(e.target.value)} />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>schmidt Number</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{SNvalue.toString().substring(0, 6)}</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={SNcalculator} text="Calculate" />
                                <ButtonA onClick={SNcalculatorReset} text="Reset" />
                                {showPopup &&<Popup onClick={togglePopup} /> }
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "kinematics viscosity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>schmidt Number</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={SN}
                                        onChange={(e) => setSN(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>Mass Diffusivity (v):</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={MD}
                                        onChange={(e) => setMD(e.target.value)} />

                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>kinematics viscosity</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{KVvalue.toString().substring(0, 6)}</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={KVcalculator} text="Calculate" />
                                <ButtonA onClick={KVcalculatorReset} text="Reset" />
                                {showPopup &&<Popup onClick={togglePopup} /> }
                            </div>
                        </>}
                        {/* ////////////////////////////// kinematics viscosity ////////////////////////// */}
                        {selectCondition === "Mass Diffusivity" && <>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>schmidt Number</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={SN}
                                        onChange={(e) => setSN(e.target.value)} />
                                </Col>
                            </Row>
                            <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                <Col md={6} sm={12} xs={12} >
                                    <label>kinematics viscosity</label></Col>
                                <Col md={6} sm={12} xs={12} >
                                    <Input value={KV}
                                        onChange={(e) => setKV(e.target.value)} />

                                </Col>
                            </Row>

                            <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                <Col md={6} sm={12} xs={12}><dt>Mass Diffusivity</dt></Col>
                                <Col md={6} sm={12} xs={12}>
                                    <button className='formula-value-btn'>{MDvalue.toString().substring(0, 6)}</button></Col>
                            </Row>
                            <div className='text-center'>
                                <ButtonA onClick={MDcalculator} text="Calculate" />
                                <ButtonA onClick={MDcalculatorReset} text="Reset" />
                                {showPopup &&<Popup onClick={togglePopup} /> }
                            </div>
                        </>}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {
                            textShow &&
                            <div ref={divRef}>
                            <Example heading="Example"
                                title={<>Calculate the Schmidt number for the given details.<br />
                                    Kinematic Viscosity (v) = 15 m2/s<br />
                                    Mass Diffusivity (Dc) = 10 m2/s<br /></>}
                                step1={<>Solution : Apply Formula</>} step1heading={<>Sc = v/ Dc<br />
                                    Sc = 15/10<br />
                                    Sc = 1.5<br /></>}
                                step2="Schmidt Number (Sc) = 1.5 " /></div>
                        }</div>
                </div>
                <div className='my-2'>
                    The Schmidt Number is used to characterize fluid flows in which there are simultaneous momentum and mass diffusion convection processes. The Schmidt Number is named after the German engineer Ernst Heinrich Wilhelm Schmidt (1892-1975).
                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>

                            <dt>Schmidt Number :</dt><br />
                            Sc = v/ Dc<br />
                            <dt>   Kinematic Viscosity :</dt><br />
                            v = Sc*Dc<br />
                            <dt>Mass Diffusivity :</dt><br />
                            Dc = v/Sc<br />
                            <dt> Where,</dt><br />
                            Sc = Schmidt Number,<br />
                            v = Kinematic Viscosity,<br />
                            Dc = Mass Diffusivity.<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container >
        </div >


    )
}

export default Schmidt