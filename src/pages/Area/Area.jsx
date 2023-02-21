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
                <h2 className='text-center fw-bold'>Area</h2>
                <p>An Area can be termed as a surface or size of a surface, especially an open, unoccupied piece of ground or any shape. The superficial contents of any figure; the surface included within any given lines; superficial extent; as, the area of a square or a triangle.</p>
                <Row className='mb-2'>
                <Col sm={6} xs={12}><CalculatorName CalculatorName="Area of Polygon Calculator"  path="/polygonCalculator" /></Col> 
                <Col sm={6} xs={12}><CalculatorName CalculatorName="Barrel"/></Col> 
            </Row>
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Cone"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Circle"/></Col>
            </Row>
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Cube"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Cylinder"/></Col>
            </Row> 
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Ellipse"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Hemisphere"/></Col>
            </Row>
             <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Kite"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Area of Polygon Calculator"/></Col>
            </Row> <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Rectangular popular conversation"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Rhombus"/></Col>
            </Row>
             <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Square"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Sphere"/></Col>
            </Row>
             <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Triangle"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Trapezium"/></Col>
            </Row>
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="pyramid"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="volume of hemisphere calculator"/></Col>
            </Row>
                </div>
            </Container>

        </div>
    )
}

export default Area