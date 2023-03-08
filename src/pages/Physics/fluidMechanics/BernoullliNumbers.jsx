import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function BernoullliNumbers() {
    const [show, setShow] = useState(false);
    const [textShow, settextShow] = useState(false);
    const [n , setn] = useState(10);
    const [BN, setBN]= useState(0);

    const calculate = () => {
        const value =4*(n / (3.14 * 2.71828)) * (2 * n) * Math.sqrt(n*3.14);
        setBN(value); 
    }

    function reset() {
        setn(0);
        setBN("")
    }
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'calculator',
        onafterprint: () => alert("print success"),
    })

    return (
        <div>     <Container className='home-page '>
            <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                <NewCalculator title="Area of polygon calculate"
                    title1="remainder theorem Calculator" title2="law of science Calculator"
                    title3="scienthic division Calculator" title4="curl Calculator" />
            </div>
            <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>Bernoulli Numbers Calculator</h2>
                <p>To find  Bernoulli numbers input the large number and hit the calculate button using  Bernoulli Numbers calculator.
                </p>
                <div className='polygon-calculator-div '>
                    <ButtonA onClick={handlePrint} text="Print" />
                    <div className="polygon-calculator px-2" ref={componentsRef}>
                        <div className='text-center my-2'> <dt>Formula</dt>B(n) ≈ 4 * (n / π e)2n * √ n π</div>

                        <Row style={{ alignItems: "center", textAlign: "center" }}>
                            <Col md={12} sm={12} xs={12} >
                                <label>Large Number (n) :<input type="number" className='ms-3' value={n}
                                onChange={(e) => setn(e.target.value)} /> </label></Col>
                        </Row>
                        <h5 className='text-center py-2'>Result</h5>
                        <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                            <Col md={6} sm={12} xs={12}><dt>B(n) = </dt></Col>
                            <Col md={6} sm={12} xs={12}>
                                <button className='formula-value-btn'>{BN.toString().substring(0,6)}</button></Col>
                        </Row>
                    </div>
                    <div className='text-center'>
                        <ButtonA onClick={calculate} text="Calculate" />
                        <ButtonA onClick={reset} text="Reset" />
                    </div>
                    <center>
                        <button type='button'
                            style={{ border: "none", textDecoration: "underline", background: "none", color: "#F58648" }} className="my-3" onClick={() => settextShow(!textShow)}>{textShow === true ? "Hide Steps" : "Show Steps"}</button>
                    </center>
                    {
                        textShow &&
                        <Example heading="Example" title={<>Calculate the Bernoulli Number B(n) for the given details.<br/>
                        Large Number (n): 5</>}
                            step1={<>Solution : <br/>Apply Formula:</>} 
                            step1heading={<>B(n)≈ 4 * (n / π e)2n * √ n π<br/>B(n)≈ 4*(5/3.14*2.718281828459)2*5√5*3.14</>} 
                            step2={<>B(n)≈ 0.07505444661992206<br/>If you need further explanation watch this video below:
                            </>}/>
                    }</div>
                {/* ***************   formula ********** */}
                <div className='polygon-calculator-text-div'>
                <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
                    {show ?
                        <div className='formula-backside'>
                            <dt className='Fw-bold'>B(n)≈ 4 * (n / π e)2n * √ n π</dt><br />
                            <dt>where,</dt><br />
                            <span>n = large number</span><br />
                            <span>e = constant ( 2.718281828459...)</span><br />
                        </div>
                        : null}
                    {/* ***************   formula end and example start ********** */}
                </div>
                The numbers known as Bernoulli Numbers are crucial in number theory and analysis because they appear in the series expansions of trigonometric functions. The Bernoulli Numbers are expressed using both contemporary language and classic literature. The symbol Bn is used to represent Bernoulli Numbers in modern usage, while B*n is used in older literature.<br/>
                The equivalent Bernoulli value B(n) for the supplied numeric value is calculated using this sophisticated online calculator for Bernoulli numbers, which is utilised in topology, number theory, and mathematical analysis.
            </div>
        </Container>
        </div >
    )
}

export default BernoullliNumbers