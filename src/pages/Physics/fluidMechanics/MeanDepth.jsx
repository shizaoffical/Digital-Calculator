import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';
import Input from '../../../components/Input';
import Popup from '../../../components/Popup';
function MeanDepth() {
    const divRef = useRef(null);
    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Mean Depth');

    const [HM, setHM] = useState(null);
    const [A, setA] = useState(null);
    const [T, setT] = useState(null);

    // main states
    const [HMvalue, setHMvalue] = useState(0)
    const [Avalue, setAvalue] = useState(0)
    const [Tvalue, setTvalue] = useState(0)
    // functionality
    const HMcalculator = () => {
        if(T && A !== null){
        const HM = A / T;
        setHMvalue(HM.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function HMcalculatorReset() {
        if(T && A !== 0){
        setHMvalue(0);
        setA(0);
        setT(0);
        setHM(0);
        setAvalue(0);
        setTvalue(0);
    }
    else{
        setShowPopup(true);
    }
    }
    const Acalculator = () => {
        if(T && HM !== null){
        const a = HM * T;
        setAvalue(a.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function AcalculatorReset() {
        if(T && HM !== 0){
            setHMvalue(0);
            setA(0);
            setT(0);
            setHM(0);
            setAvalue(0);
            setTvalue(0);
        }
        else{
            setShowPopup(true);
        }
    }
    const Tcalculator = () => {
        if(HM && A !== null){
        const dc = A / HM;
        setTvalue(dc.toPrecision(6));
    }
    else{
        setShowPopup(true);
    }
    }
    function TcalculatorReset() {
        if(HM && A !== 0){
            setHMvalue(0);
            setA(0);
            setT(0);
            setHM(0);
            setAvalue(0);
            setTvalue(0);
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
                    <h2 className='text-center fw-bold'> Mean Depth Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Mean Depth" className='value-dropdown'>Mean Depth </option>
                                    <option value='Area of section flow' className='value-dropdown' >Area of section flow</option>
                                    <option value='top water surfacw width' className='value-dropdown' >top water surfacw width</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Mean Depth" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>hm  =  a / t</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Area of Section Flow (A):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} text="m/s2"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Top Water Surface Width (T):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={T}
                                            onChange={(e) => setT(e.target.value)} text="m/s2"/>
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Mean Depth</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{HMvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={HMcalculator} />
                                    <ButtonA text="Reset" onClick={HMcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}

                            {/* ////////////////////////////////////  Area of section flow /////////////////////////////// */}
                            {selectCondition === "Area of section flow" && <>
                                <div className='text-center'> <dt>Formula</dt> <span>A = HM * T</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Top Water Surface Width (T):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={T}
                                            onChange={(e) => setT(e.target.value)} text="m"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mean Depth (hm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HM}
                                            onChange={(e) => setHM(e.target.value)} text="m"/> 
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Area of Section Flow</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Avalue.toString().substring(0, 6)} m2</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Acalculator} />
                                    <ButtonA text="Reset" onClick={AcalculatorReset} />
                                    {showPopup &&<Popup onClick={togglePopup} /> }
                                </div>
                            </>}
                            {/* ////////////////////////////////////  FLOW Velocity /////////////////////////////// */}
                            {selectCondition === "top water surfacw width" && <>
                                <div className='text-center'> <dt>Formula</dt> <span> T = A * / hm</span></div>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label> Area of Section Flow (A): </label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={A}
                                            onChange={(e) => setA(e.target.value)} text="m2"/>
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mean Depth (hm):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <Input value={HM}
                                            onChange={(e) => setHM(e.target.value)}text="m2" />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>top water surfacw width</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{Tvalue.toString().substring(0, 6)} m</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={Tcalculator} />
                                    <ButtonA text="Reset" onClick={TcalculatorReset} />
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
                                {selectCondition === "Mean Depth" &&
                                <div ref={divRef}>
                                    <Example heading="Mean Depth"
                                        title="step by step solution"
                                        step1="Data : " step1heading="hm = ? , A = 5 , T = 6"
                                        step2="Formula" step2heading="hm  = A / t "
                                        step3="Putting Value :" step3heading="5 / 6 "
                                        step4="0.8333"
                                         /></div>
                                }
                                {selectCondition === "Area of section flow" &&
                                <div ref={divRef}>
                                    <Example heading="Area of section flow"
                                        title="step by step solution"
                                        step1="Data : " step1heading="hm = 0.8333 , A = ? , T = 6"
                                        step2="Formula" step2heading="A = hm x T"
                                        step3="Putting value" step3heading="= 0.8333 x 6"step4="5" 
                                        /></div>
                                }
                                {selectCondition === "top water surfacw width" &&
                                <div ref={divRef}>
                                    <Example heading="top water surfacw width"
                                        title="step by step solution"
                                        step1="Data : " step1heading="hm = 0.8333 , A = 5 , T = ?"
                                        step2="Formula" step2heading="t = a / hm"
                                        step3="5 / 0.8333"  step4="6"
                                        /></div>
                                } </>}
                        </div>

                    </div>
                    <div className='mt-1'>
                        The advanced online Mean Depth Calculator is useful in calculating the hydraulic mean depth of water.
                    </div>
                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Mean Depth :<br /> <span>HM = A / T</span></dt>
                                <dt>Area of Section Flow :<br /><span>A = HM * T</span> </dt>
                                <dt>Top Water Surface Width :<br /> <span>T = A / HM</span> </dt>
                                <dt>Where, </dt>
                                hm = Mean Depth,<br/>
                                A = Area of Section Flow,<br/>
                                T = Top Water Surface Width.<br/>
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default MeanDepth