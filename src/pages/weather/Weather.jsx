import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
    import NewCalculator from '../../components/NewCalculator'
    import CalculatorName from '../../components/CalculatorName'

function Weather() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
        <NewCalculator title="cloud atitude calculator"
        title1="cloud base calculator" title2="lightning distance calculator"
        title3="rain harvest calculator" title4="room air condition(AC) calculator"
        />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Weather</h2>
        <p>The term "weather" describes the condition of the atmosphere, or the temperature of the atmosphere, depending on whether it is hot, cold, wet, quiet, stormy, clear, or cloudy. Weather is defined as the density of temperature and moisture that varies from one location to another. The most frequent meteorological events on Earth include wind, clouds, rain, snow, fog, and dust storms. One of the primary processes that moulds the Earth is weather.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="cloud atitude calculator"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="cloud base calculator"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cyclone"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="lightning distance calculator"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="rain harvest calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="room air condition(AC) calculator"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="wind chill"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="wing power"/></Col>
    </Row> 
        </div>
    </Container>
</div>
  )
}

export default Weather