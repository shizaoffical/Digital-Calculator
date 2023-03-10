import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function FourierNumber() {

  const [show, setShow] = useState(false);
  const [textShow, settextShow] = useState(false);
  const [selectCondition, setSelectCondition] = useState('Fourier Number(Fo)');

  // main startest 
  const [FO, setFO] = useState(16);
  const [A, setA] = useState(5);
  const [L, setL] = useState(3);
  const [T, setT] = useState(6.5);
  // values tate
  const [CLvalue, setCLvalue] = useState(0);
  const [FOvalue, setFOvalue] = useState(0);
  const [TDvalue, setTDvalue] = useState(0);
  const [CTvalue, setCTvalue] = useState(0);
  // FOcalculator
  const FOcalculator = () => {
    const fo = (A * T) / (L * L)
    setFOvalue(fo);
  }
  function FOcalculatorReset() {
    setFOvalue(0);
    setA(0);
    setL(0);
    setT(0);
  }
  // TDcalculator
  const TDcalculator = () => {
    const a = FO * (L * L) / T;
    setTDvalue(a);
  }
  function TDcalculatorReset() {
    setTDvalue(0);
    setFO(0);
    setL(0);
    setT(0);
  }
  // CTcalculator
  const CTcalculator = () => {
    const t = FO * (L * L) / A;
    setCTvalue(t);
  }
  function CTcalculatorReset() {
    setCTvalue(0);
    setA(0);
    setL(0);
    setFO(0);
  }
  // CTcalculator
  const CLcalculator = () => {
    const l = Math.sqrt((A * T) / FO)
    setCLvalue(l);
  }
  function CLcalculatorReset() {
    setCLvalue(0);
    setA(0);
    setT(0);
    setFO(0);
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
          <h2 className='text-center fw-bold'> Fourier Number Calculator</h2>
          <div className='polygon-calculator-div '>


            <Row className='text-center my-3'>
              <Col md={12} sm={12} xs={12} >
                <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                  <option value='Fourier Number(Fo)' className='value-dropdown' >Fourier Number(Fo)</option>
                  <option value="Thermal Diffusivity(a)" className='value-dropdown'>Thermal Diffusivity(a) </option>
                  <option value='Character Time(t)' className='value-dropdown' >Character Time(t)</option>
                  <option value='Character Length(l)' className='value-dropdown' >Character Length(l)</option>
                </select>
              </Col>
            </Row>

            <ButtonA onClick={handlePrint} text="Print" />
            <div className="polygon-calculator px-2" ref={componentsRef}>

              {/* ////////////////////////////////////  FLOW RATE /////////////////////////////// */}
              {selectCondition === "Fourier Number(Fo)" && <>
                <div className='text-center'> <dt>Formula</dt> <span>FO = at / L²</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Thermal Diffusivity(a):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={A}
                      onChange={(e) => setA(e.target.value)} />
                  </Col>

                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Character Time(t):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={T}
                      onChange={(e) => setT(e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Character Length(l):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={L}
                      onChange={(e) => setL(e.target.value)} /></Col>

                </Row>
                <h5 className='text-center py-2'>Result</h5>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Fourier Number(Fo)</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{FOvalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={FOcalculator} />
                  <ButtonA text="Reset" onClick={FOcalculatorReset} />

                </div>
              </>}



              {/* ////////////////////////////////////  Thermal Diffusivity(a) /////////////////////////////// */}
              {selectCondition === "Thermal Diffusivity(a)" && <>
                <div className='text-center'> <dt>Formula</dt> <span>a = Fo * L² / t</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Fourier Number (Fo):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={FO}
                      onChange={(e) => setFO(e.target.value)} /></Col>

                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Character Time(t):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={T}
                      onChange={(e) => setT(e.target.value)} /></Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Character Length(l):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={L}
                      onChange={(e) => setL(e.target.value)} />
                  </Col>
                </Row>
                <h5 className='text-center py-2'>Result</h5>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Thermal Diffusivity(a)</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{TDvalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={TDcalculator} />
                  <ButtonA text="Reset" onClick={TDcalculatorReset} />
                </div>
              </>}
              {/* ////////////////////////////////////  Character Time(t) /////////////////////////////// */}
              {selectCondition === "Character Time(t)" && <>
                <div className='text-center'> <dt>Formula</dt> <span>t = Fo * L² / a</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Thermal Diffusivity(a): </label></Col>
                  <Col md={6} sm={12} xs={12}>
                    <input type="number" className='ms-3 me-2' value={A}
                      onChange={(e) => setA(e.target.value)} /></Col>

                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Fourier Number (Fo):</label></Col>
                  <Col md={6} sm={12} xs={12}>
                    <input type="number" className='ms-3 me-2' value={FO}
                      onChange={(e) => setFO(e.target.value)} />
                  </Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Character Length(l):</label></Col>
                  <Col md={6} sm={12} xs={12}>
                    <input type="number" className='ms-3 me-2' value={L}
                      onChange={(e) => setL(e.target.value)} /></Col>

                </Row>
                <h5 className='text-center py-2'>Result</h5>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Character Time(t)</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn me-2'>{CTvalue.toString().substring(0, 6)}</button>m</Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={CTcalculator} />
                  <ButtonA text="Reset" onClick={CTcalculatorReset} />

                </div>
              </>}
              {/* ////////////////////////////////////  CHARACTER LENGTH /////////////////////////////// */}
              {selectCondition === "Character Length(l)" && <>
                <div className='text-center'> <dt>Formula</dt> <span>L = (αt / Fo) * (αt / Fo)</span></div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label> Thermal Diffusivity(a):</label></Col>
                  <Col md={6} sm={12} xs={12}>
                    <input type="number" className='ms-3 me-2' value={A}
                      onChange={(e) => setA(e.target.value)} /></Col>

                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Character Time(t):</label></Col>
                  <Col md={6} sm={12} xs={12}>
                    <input type="number" className='ms-3 me-2' value={T}
                      onChange={(e) => setT(e.target.value)} /></Col>

                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={6} sm={12} xs={12} >
                    <label>Fourier Number (Fo):</label></Col>
                  <Col md={6} sm={12} xs={12} >
                    <input type="number" className='ms-3 me-2' value={FO}
                      onChange={(e) => setFO(e.target.value)} />
                  </Col>
                </Row>
                <h5 className='text-center py-2'>Result</h5>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Character Length(l)</dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'>{CLvalue.toString().substring(0, 6)}</button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate" onClick={CLcalculator} />
                  <ButtonA text="Reset" onClick={CLcalculatorReset} />

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
                <>
                  {selectCondition === "Fourier Number(Fo)" &&
                    <Example heading="Fourier Number(Fo)"
                      title="step by step solution"
                      step1="Solution:" step1heading="Fo = ? , L = 3 , α = 5 , t = 6.5"
                      step2="Formula" step2heading="Fo = at / L²"
                      step3="Steps: Putting values" step3heading={<>
                        = 5 x 6.5 / (3)²<br />= 32.5 / 9<br />= 3.611</>} />
                  }
                  {selectCondition === "Thermal Diffusivity(a)" &&
                    <Example heading="Thermal Diffusivity(a)"
                      title="step by step solution"
                      step1="Solution:" step1heading="Fo = 3.611 , L = 3 , α = 5 , t = ?"
                      step2="Formula" step2heading="a = fo * L² / a"
                      step3="Steps: Putting values" step3heading={<>
                        =3.611 x (3)² / 5 <br /> 3.611 x 9 / 5 <br />= 32.499 / 6.5 <br />=65</>} />
                  }
                  {selectCondition === "Character Time(t)" &&
                    <Example heading="Character Time(t)"
                      title="step by step solution"
                      step1="Solution:" step1heading="Fo = 3.611 , L = 3 , α = 5 , t = ?"
                      step2="Formula" step2heading="a = fo * L² / a"
                      step3="Steps: Putting values" step3heading={<>
                        =3.611 x (3)² / 5 <br /> 3.611 x 9 / 5 <br />= 32.499 / 6.5 <br />=65</>} />
                  }
                  {selectCondition === "Character Length(l)" &&
                    <Example heading="Character Length(l)"
                      title="step by step solution"
                      step1="Solution:" step1heading="Fo = 3.611 , L = ? , α = 5 , t = 6.5"
                      step2="Formula" step2heading="L =αt / Fo"
                      step3="Steps: Putting values" step3heading={<>
                        =(5 * 6.5 / 11 ) <br /> (32.5 / 3.611 ) <br />=  9.0002769315979<br />=3</>} />
                  }

                </>

              }
            </div>

          </div>
          <div className='mt-3'>
            The phrase "Fourier Number" refers to a dimensionless number that is used to describe heat conduction. Fourier modulus is another name for the Fourier Number. The ratio of the rate of heat conduction to the rate of thermal energy storage is known as the Fourier number. The letter "Fo" stands for the Fourier Number. It is, in essence, the study of unsteady-state mass transfer, where the characteristic time is the product of the diffusion coefficient.<br />

            The term "Fourier Number" refers to a dimensionless number used in the study of unsteady-state mass transfer that is equal to the product of the diffusion coefficient and a characteristic time divided by a characteristic length. With this sophisticated online Fourier Number Calculator, one can determine<br />
          </div>

          {/* ***************   formula ********** */}
          <div className='polygon-calculator-text-div'>
            <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
            {show ?
              <div className='formula-backside'>
                <dt> Fourier Number :<br /> <span>Fo = αt/L2</span></dt>
                <dt>Thermal Diffusivity :<br /><span>α = Fo L2/t</span> </dt>
                <dt>Characteristic Time :<br /> <span>t = Fo L2/ α</span> </dt>
                <dt>Characteristic Length :<br /> <span>L = √αt/Fo</span> </dt>
                <dt>Where, </dt>
                Fo = Fourier Number,<br />
                α = Thermal Diffusivity,<br />
                t = Characteristic Time<br />
                L = Characteristic Length.<br />
              </div>
              : null}
            {/* ***************   formula end and example start ********** */}
          </div>
        </div>
      </Container >
    </div >

  )
}

export default FourierNumber