import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Financial() {
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
            <h2 className='text-center fw-bold'>Financial</h2>
            <p>To set financial objectives for the future and create plans to accomplish them, use a financial calculator. Discover a solution for various financial calculators, such as the EMI, investment, mortgage, and lease calculators.</p>
            <Row className='mb-2'>
            <Col sm={6} xs={12}><CalculatorName CalculatorName="Retriment planner"/></Col> 
            <Col sm={6} xs={12}><CalculatorName CalculatorName="EMI"/></Col> 
        </Row>
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Fifi Lifo calculator"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Future value annuity"/></Col>
        </Row>
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="home loa"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="induan income tax"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="intrest only mortgaeg payment "/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="invesment"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="lease"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="loan comparision"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="mortgae down payment"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="pre-payment penalty"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="pressure value amunity"/></Col>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="saving / invesment"/></Col>
        </Row> 
        <Row className='mb-2'>
            <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="simple / fixed rate mortage(RRM) payment"/></Col>
        </Row> 
            </div>
        </Container>
    </div>
  )
}

export default Financial