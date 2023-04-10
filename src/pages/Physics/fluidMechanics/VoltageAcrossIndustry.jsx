import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Popup from '../../../components/Popup';
import Input from '../../../components/Input';
function VoltageAcrossIndustry() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
   const [IND,setIND]= useState(null);
   const [CC, setCC] = useState(null);
   const [TM, setTM] = useState(null);
   const [VAI, setVAI] = useState(0);
    const calculate = () => {
    if(CC && TM && IND !== null){
        const VAI = CC * TM / IND;
        setVAI(VAI.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }

 function Reset() {
    if(CC && TM && IND !== 0){
    setCC(0);
    setIND(0);
    setTM(0);
    setVAI(0)
}
else{
    setShowPopup(true);
}
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
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>Cone calculate</h2>
                <p>A cone is a single-vertex, three-dimensional geometric shape having a circular base. The perpendicular height is the line that runs from the centre of the base to the apex.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={6} sm={12} xs={12} ><label>  Inductance:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={IND}
                                    onChange={(e) => setIND(e.target.value)} /> </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} ><label>Rate of change of current:</label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={CC}
                                    onChange={(e) => setCC(e.target.value)} /> </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2">
                            <Col md={6} sm={12} xs={12} > <label>  Time: </label></Col>
                            <Col md={6} sm={12} xs={12}>
                                <Input value={TM}
                                    onChange={(e) => setTM(e.target.value)} /> </Col>
                        </Row>
                        
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>Total Surface Area(TSA) of Cone:</dt>[ πr(l+r) ]</Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{VAI.toString().substring(0, 5)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={Reset} text="Reset" />
                        {showPopup &&<Popup onClick={togglePopup} /> }
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <div ref={divRef}>
                        <Example heading="Example" title={<>Calculate the voltage across inductor for the given details and apply the Ohms law formula for an inductor.<br />
                            Inductance (L) = 5<br />
                            Rate of change of current = 15<br />
                            Time = 20</>}
                            step1={<>Solution : Apply Formula</>}
                            step1heading={<>Ohm's Law for an Inductor: V = L (di/dt)<br/>
                                V = 5(15/20)<br/>
                                V = 5*0.75<br/></>}
                            step1value="V = 3.75"
                            step2="Voltage across Inductor = 3.75" /></div>
                    }

                </div>
                <div className="my-2">
                    The advanced online Voltage across Inductance Calculator is used to calculate and find the voltage and current across the given inductor.
                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt>  Ohm's Law for an Inductor: V = L (di/dt)</dt><br />
                            <dt> Where,</dt><br />
                            V - Voltage drop across inductor<br />
                            L - Inductance in henry<br />
                            di/dt - instantaneous rate of change of current with respect to time<br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>

            </div>
        </Container>
        </div >

    )
}

export default VoltageAcrossIndustry