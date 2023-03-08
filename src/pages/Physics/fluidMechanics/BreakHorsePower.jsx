import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewCalculator from '../../../components/NewCalculator'
import { useReactToPrint } from 'react-to-print';
import Example from '../../../components/Example';
import ButtonA from '../../../components/ButtonA';

function BreakHorsePower() {

  const [show, setShow] = useState(false);
  const [textShow, settextShow] = useState(false);
  const [selectCondition, setSelectCondition] = useState('Area of Trapezium');
  

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

    <div>     <Container className='home-page '>
      <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
        <NewCalculator title="Area of polygon calculate"
          title1="remainder theorem Calculator" title2="law of science Calculator"
          title3="scienthic division Calculator" title4="curl Calculator" />
      </div>
      <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'> Brake Horsepower Calculator</h2>
        <span>Use brake horsepower calculator to find water horsepower by entering the required values</span>
        <div className='polygon-calculator-div '>


          <Row className='text-center my-3'>
            <Col md={12} sm={12} xs={12} >
              <select className='dropdown-select' value={selectCondition} onChange={handleSelectChange} >
                <option value="Area of Trapezium " className='value-dropdown'>Area of Trapezium </option>
                <option value='Perimeter OF Trapezium ' className='value-dropdown' >Perimeter of Trapezium </option>
              </select>
            </Col>
          </Row>

          <ButtonA onClick={handlePrint} text="Print" />
          <div className="polygon-calculator px-2" ref={componentsRef}>
            {/* ////////////////////////////////////  Area of Trapezium  /////////////////////////////// */}
            {
              selectCondition === "Area of Trapezium" && <>
                <div className='text-center'> <dt>Formula</dt> Area  = ½ × (a + b) × h</div>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={12} sm={12} xs={12} >
                    <label> Parallel side 1 (a):
                      <input type="number" className='ms-3' 
                         />
                    </label></Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={12} sm={12} xs={12} >
                    <label>Parallel side 1 (b):
                      <input type="number" className='ms-3' 
                       />
                    </label></Col>
                </Row>
                <Row style={{ alignItems: "center", textAlign: "center" }} className="my-2 ">
                  <Col md={12} sm={12} xs={12} >
                    <label>Distance between parallel sides: (h):
                      <input type="number" className='ms-3' 
                        />
                    </label></Col>
                </Row>
                <h5 className='text-center py-2'>Result</h5>

                <Row style={{ alignItems: "center", textAlign: "center" }} className="py-2">
                  <Col md={6} sm={12} xs={12}><dt>Area of Trapezium: </dt></Col>
                  <Col md={6} sm={12} xs={12}>
                    <button className='formula-value-btn'></button></Col>
                </Row>
                <div className='text-center'>
                  <ButtonA text="Calculate"  />
                  <ButtonA text="Reset"  />

                </div>
              </>

            }

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
                {selectCondition === "Area of Trapezium" &&
                  <Example heading="Area of Trapezium"
                    title="step by step solution"
                    step1="Data : " step1heading="Area = ? , a = 4 , b = 6 , h = 12"
                    step2="Formula" step2heading="Area  = a + b /2 * h"
                    step3="Solution: " step3heading={<> Now we have to put values in above formula: <br />
                      A = ((4) + (6) / 2 ) * 12<br />A = (10 / 2 ) * 12</>}
                    step4="Area of trapezium = 60" />
                }

              </>

            }</div>

        </div>

        {/* ***************   formula ********** */}
        <div className='polygon-calculator-text-div'>
          <ButtonA onClick={() => setShow(!show)} text={show === true ? "Close Formula" : " Formula"} />
          {show ?
            <div className='formula-backside'>
              <dt> Flow Rate or Discharge(frd):<br/> <span>(((3960*wh1*pe1)/(th1*100))*100)/100</span></dt>
             <dt>Work Horsepower(wh):<br/><span>(((100*frd*th)/(3960*pe))*100)/100</span> </dt>
             <dt>Total Head(th):<br/> <span>(((3960*wh1*pe1)/(frd1*100))*100)/100</span> </dt>
             <dt>Pump Efficiency(pe):<br/><span>(((100*frd1*th1)/(3960*wh1))*100)/100</span> </dt>
            </div>
            : null}
          {/* ***************   formula end and example start ********** */}
        </div>
        Brake Horsepower is defined as the actual or useful horsepower of an engine that is determined from a force exerted on a friction brake. Here the horsepower of an engine is recorded on a device called dynamometer. The advanced online Brake Horsepower Calculator is useful in calculating the brake horsepower of an engine by using the formula.<br />
        The Brake Horsepower is termed as the dynamometer connected to the drive shaft.
      </div>
    </Container >
    </div >


  )
}

export default BreakHorsePower