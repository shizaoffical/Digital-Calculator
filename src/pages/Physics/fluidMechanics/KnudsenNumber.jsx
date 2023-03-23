import React, { useRef, useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function KnudsenNumber() {
    const divRef = useRef(null);

    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [selectCondition, setSelectCondition] = useState('Mean Free Path (λ)');

    // main states 
    const [FP, setFP] = useState(34);
    const [KN, setKN] = useState(13);
    const [RPL, setRPL] = useState(17);
    // VALUE STATES
    const [FPvalue, setFPvalue] = useState(0);
    const [KNvalue, setKNvalue] = useState(0);
    const [PRLvalue, setPRLvalue] = useState(0);

    const PRLcalculator = () => {
        const prl = FP / KN;
        setPRLvalue(prl.toPrecision(6));
    }
    function PRLcalculatorReset() {
        setPRLvalue(0);
        setFP(0);
        setKN(0)
    }
    // fpvalue
    const FPcalculator = () => {
        const fp = KN * RPL;
        setFPvalue(fp.toPrecision(6));
    }
    function FPcalculatorReset() {
        setFPvalue(0);
        setRPL(0);
        setKN(0)
    }
    // fpvalue
    const KNcalculator = () => {
        const kn = FP / RPL;
        setKNvalue(kn.toPrecision(6));
    }
    function KNcalculatorReset() {
        setKNvalue(0);
        setRPL(0);
        setFP(0)
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
                    <h2 className='text-center fw-bold'>Knudsen Number Calculator</h2>
                    <div className='polygon-calculator-div '>


                        <Row className='text-center my-3'>
                            <Col md={12} sm={12} xs={12} >
                                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                                    <option value="Mean Free Path (λ)" className='value-dropdown'>Mean Free Path (λ)</option>
                                    <option value='Representative Physical Length Scale (L)' className='value-dropdown' >
                                        Representative Physical Length Scale (L)</option>
                                    <option value='Knudsen Number (Kn)' className='value-dropdown' >Knudsen Number (Kn)</option>
                                </select>
                            </Col>
                        </Row>

                        <ButtonA onClick={handlePrint} text="Print" />
                        <div className="polygon-calculator px-2" ref={componentsRef}>
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Mean Free Path (λ)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Representative Physical Length Scale (L):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={RPL}
                                            onChange={(e) => setRPL(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Knudsen Number (Kn):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={KN}
                                            onChange={(e) => setKN(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Mean Free Path (λ)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{FPvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={FPcalculator} />
                                    <ButtonA text="Reset" onClick={FPcalculatorReset} />

                                </div>
                            </>}
                            {/* ////////////////////////////////////  Representative Physical Length Scale (L) /////////////////////////////// */}
                            {selectCondition === "Representative Physical Length Scale (L)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mean Free Path (λ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={FP}
                                            onChange={(e) => setFP(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Knudsen Number (Kn):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={KN}
                                            onChange={(e) => setKN(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Representative Physical Length Scale (L)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{PRLvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={PRLcalculator} />
                                    <ButtonA text="Reset" onClick={PRLcalculatorReset} />

                                </div>
                            </>}
                            {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
                            {selectCondition === "Knudsen Number (Kn)" && <>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Mean Free Path (λ):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={FP}
                                            onChange={(e) => setFP(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2" >
                                    <Col md={6} sm={12} xs={12} >
                                        <label>Representative Physical Length Scale (L):</label></Col>
                                    <Col md={6} sm={12} xs={12} >
                                        <input type="number" className='ms-3 me-2' value={RPL}
                                            onChange={(e) => setRPL(e.target.value)} />
                                    </Col>
                                </Row>
                                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                                    <Col md={6} sm={12} xs={12}><dt>Knudsen Number (Kn)</dt></Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <button className='formula-value-btn'>{KNvalue.toString().substring(0, 6)}</button></Col>
                                </Row>
                                <div className='text-center'>
                                    <ButtonA text="Calculate" onClick={KNcalculator} />
                                    <ButtonA text="Reset" onClick={KNcalculatorReset} />

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
                                <Example heading="step by step solution"
                                    title={<>Calculate the Knudsen Number for the given details.<br />
                                        Mean Free Path (λ) = 25 m<br />Representative Physical Length Scale (L) = 20 m<br /></>}
                                    step1={<>Solution <br /> Apply Formula : </>} step1heading="Rh = A/Pw"
                                    step1value="Kn = λ/L"
                                    step2="Kn = 1.25" /></div>
                            }</div>

                    </div>
                    <div className='mt-3'>
                        The Knudsen Number refers to the dimensionless number. The Knudsen Number is defined as the ratio of the molecular mean free path length to a representative physical length scale. In short, the Knudsen Number refers to the ratio of the mean free path length of the molecules of a fluid to a characteristic length. It is used to describe the flow of low-density gases.<br />

                        This Advanced Online Knudsen Number Calculator is used to calculate the ratio of the mean free path length of the molecules of a fluid to a characteristic length.
                    </div>

                    {/* ***************   formula ********** */}
                    <div className='polygon-calculator-text-div'>
                        <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                        {show ?
                            <div className='formula-backside'>
                                <dt> Knudsen Number :<br /> <span>Kn = λ/L</span></dt>
                                <dt>Mean Free Path :<br /><span>λ = Kn*L</span> </dt>
                                <dt>Representative Physical Length Scale :<br /> <span>L = λ/ Kn</span> </dt>
                                <dt>Where, </dt>
                                Kn = Knudsen Number,<br />
                                λ = Mean Free Path,<br />
                                L = Representative Physical Length Scale.<br />
                            </div>
                            : null}
                        {/* ***************   formula end and example start ********** */}
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default KnudsenNumber