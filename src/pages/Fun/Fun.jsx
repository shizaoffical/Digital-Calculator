import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Fun() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="footbal / soccer statistics calculator"/>
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Fun</h2>
        <p>Fun Calculator gives you the solution for age, birth date, death date, and your age in hours, minutes and days.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="age"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="animal speed"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="daya added"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="days between date calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="days in month / find leap year"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="GPA calculator"/></Col>
    </Row> 
        </div>
    </Container>

</div>
  )
}

export default Fun