import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function BroadCrustedWeir() {
    const divRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    // main state
    const [width, setWidth] = useState(null);
    const [HA, setHA] = useState(null);
    const [HB, setHB] = useState(null);
    const [CD, setCD] = useState(null);
    //    formula 
    const [WFR, setWRF] = useState(0);
    const wfrvalue = () => {
        if(HB && CD && width && HA !== null){
        const value = CD * width * HB * (((2*(9.81))*(HA - HB)) * 1 / 2)
        setWRF(value.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
function wfrvalueReset() {
    if(HB && CD && width && HA !== 0){
        setCD(0);
        setHA(0);
        setHB(0);
        setWidth(0);
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
                <h2 className='text-center fw-bold'> Broad Crested Weir Calculator</h2>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        {/* ////////////////////////////////////  Area of Trapezium  /////////////////////////////// */}

                        <div className='text-center my-2'> <dt>Formula</dt> Area  = ½ × (a + b) × h</div>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label> Width of the Weir:</label></Col>
                            <Col md={6} sm={12} xs={12} >

                                    <Input value={width}
                                        onChange={(e) => setWidth(e.target.value)} text="m"/>
                                </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label>Head 1 on the Weir (h1):</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                    <Input value={HA}
                                        onChange={(e) => setHA(e.target.value)} text="m"/>
                                </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label>Head 2 on the Weir (h2): </label></Col>
                            <Col md={6} sm={12} xs={12} >
                                    <Input value={HB}
                                        onChange={(e) => setHB(e.target.value)}  text="m"/>
                               </Col>
                        </Row>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                            <Col md={6} sm={12} xs={12} >
                                <label> Discharge Constant (Cd):</label></Col>
                            <Col md={6} sm={12} xs={12} >
                                    <input type="number" className='ms-3' value={CD}
                                        onChange={(e) => setCD(e.target.value)} />
                                </Col>
                        </Row>

                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt> Water Flow Rate (q): </dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn me-2'>{WFR.toString().substring(0,6)}</button>m3/s</Col>
                        </Row>
                        <div className='text-center'>
                            <ButtonA text="Calculate" onClick={wfrvalue} />
                            <ButtonA text="Reset" onClick={wfrvalueReset} />
                            {showPopup &&<Popup onClick={togglePopup} /> }
                        </div>
                        {/* ////////////////////////////////  Perimeter OF Trapezium  ////////////////////////////// */}
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    <div>
                        {
                            textShow &&
                            <div ref={divRef}>
                            <Example heading="Step by step solution"
                                title={<>
                                    Calculate the Broad Crested Weir for the given details.<br />
                                    <span> Width of the Weir (b) = 5 m</span><br />
                                    <span> Head 1 on the Weir (h1) = 3 m</span><br />
                                    <span> Head 2 on the Weir (h2) = 1 m</span><br />
                                    <span> Discharge Constant (Cd) = 10"</span></>}
                                step1={<>Solution : <br /> Apply Formula</>} step1heading="q = Cd × b × h2 × (2g (h1 - h2)) 1/2"
                                step2="Water Flow Rate (q) = 313.20919526731655 m3/s" /></div>
                        }
                    </div>
                </div>

                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                    <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>

                            <dt>q = Cd × b × h2 × (2g (h1 - h2)) 1/2</dt>
                            <dt>Where,  </dt>
                            <span>q = Water Flow Rate</span>
                            <span>Cd = Discharge Constant</span>
                            <span>b = Width of the Weir</span>
                            <span>g = Gravity (9.81 m/s2)</span>
                            <span>h1, h2 = Head 1 and Head 2 on the Weir</span>

                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                Broad Crested Weir refers to the flow measurement and regulation of water depth in rivers, canals and other natural open channels. Broad Crested Weirs are a robust structure used to measure the full width of the channel. A broad crested weir is normally a flat topped object which obstructs and extends across the entire channel.<br />

                An overflow structure on which the nappe is supported for an appreciable length in the direction of flow is called as broad crested weir. It is a flat-crested structure, with a long crest compared to the flow thickness of water in canals and rivers.

            </div>
        </Container >
        </div >
    )
}

export default BroadCrustedWeir