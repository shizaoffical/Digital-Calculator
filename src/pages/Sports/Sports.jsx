import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Sports() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="footbal / soccer statistics calculator"/>
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Sports</h2>
        <p>Sports are activities requiring skill and physical effort in which an individual or team competes against another individual or group. Any physical activities that attempt to use, maintain, or enhance physical fitness and give participants entertainment fall under the umbrella term of sport. Use an online sports calculator to calculate football statistics.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="baseball batting average"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="baseball earned run average(ERA)"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="baseball fielding percentage"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="slugging percentage calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="basketball statistics"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="football / soccer statistics"/></Col>
    </Row> 
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="ice hockey statistics"/></Col>
    </Row> 
        </div>
    </Container>

</div>
  )
}

export default Sports