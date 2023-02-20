import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
    import NewCalculator from '../../components/NewCalculator'
    import CalculatorName from '../../components/CalculatorName'

function Health() {
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
            <h2 className='text-center fw-bold'>Health</h2>
            <p>Health</p>
            <Row className='mb-2'>
            <Col sm={6} xs={12}><CalculatorName CalculatorName="Basal Metabolic Rate(BMR)"/></Col> 
            <Col sm={6} xs={12}><CalculatorName CalculatorName="BMI calculator"/></Col> 
        </Row>
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="calorie calculator"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Fat calculator"/></Col>
        </Row>
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Food calorie counter"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="food storage"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="human water requirement"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="ideal weight calculator"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="pragnency"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="propoints weight watcher"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="smoking cost"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="weight watcher points plus calculation"/></Col>
        </Row> 
            </div>
        </Container>
    </div>
  )
}

export default Health