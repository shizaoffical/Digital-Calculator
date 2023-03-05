import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'

import CalculatorName from '../../components/CalculatorName'
function Area() {

   
    return (
        <div>
            <Container className='home-page'>
                <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                    <NewCalculator title="Triangle Pyramid Calculator"
                    title1="Square Calculator" title2="Triangle Calculator"/>
                </div>
                <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                <h2 className='text-center fw-bold'>Cube Calculator</h2>
                <p>An Area can be termed as a surface or size of a surface, especially an open, unoccupied piece of ground or any shape. The superficial contents of any figure; the surface included within any given lines; superficial extent; as, the area of a square or a triangle.</p>
                <Row className='mb-2'>
                <Col sm={6} xs={12}><CalculatorName CalculatorName="Area of Polygon Calculator"  path="/area/polygoncalculator" /></Col> 
                <Col sm={6} xs={12}><CalculatorName CalculatorName="Barrel" path="/area/barrel"/></Col> 
            </Row>
            <Row className='mb-2'>
            <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Circle" path="/area/circle"/></Col>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Cone" path="/area/cone"/></Col>
              
            </Row>
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Cube" path="/area/cube"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Cylinder" path="/area/cylinder"/></Col>
            </Row> 
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Ellipse" path="/area/elipse"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Hemisphere" path="/area/hemisphere"/></Col>
            </Row>
             <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Kite" path="/area/kite"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Area of Parallelogram Calculator" 
                path="/area/parallogram"/></Col>
            </Row> <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Rectangular popular conversation" path="/area/rectangular"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Rhombus" path="/area/rhombus"/></Col>
            </Row>
             <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Square" path="/area/square"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Sphere" path="/area/sphere"/></Col>
            </Row>
             <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Triangle" path="/area/triangle"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Trapezium" path="/area/trapezium"/></Col>
            </Row>
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="pyramid"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="volume of hemisphere calculator" path="/area/volumeOfHemisphere"/></Col>
            </Row>
                </div>
            </Container>

        </div>
    )
}

export default Area