import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Graphics() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="ideal gas law calculator"
            title1="combined gas law Calculator" title2="specific gas constant Calculator"
            />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Graphics</h2>
        <p>The term "graphic" describes plotted graphs, equations, and a variety of other jobs with variables created by writing, drawing, or engraving. Use an advanced online graphic calculator to find solutions to graphic-related difficulties.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Centroid of a triangle"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Circumcenter of triangle"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="distance between two points"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="midpoint 3 dimension"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="midpoint"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="perpandicular bisector"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="perpandicular length"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="point slope form"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="partition calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="section or ratio 3(dimension)"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="slope-Intercept form"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="two point form calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="two point intercept form calculator"/></Col>
    </Row>
        </div>
    </Container>

</div>
  )
}

export default Graphics