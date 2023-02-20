import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Engineering() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="substitution calculator"
            title1="remainder theorem Calculator" title2="law of science Calculator"
            title3="scienthic division Calculator" title4="curl Calculator"
            />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Engineering</h2>
        <p>Engineering calculator is helpful in solving the complex equations in the engineering field like mechanical, electrical and chemical and also calculate the hydraulic cylinder through this calculator.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="gallons per hour consumption calculation"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="hollow Rectangular beams deflection calculator"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="hydraulic cylinder"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="post trip fuel calculation"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="pipe deflection calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="potential flight time"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="solid Rectangular beams deflection calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="solid Round beams deflection calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="square tube center"/></Col>
    </Row> 
        </div>
    </Container>

</div>
  )
}

export default Engineering