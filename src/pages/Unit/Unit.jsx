import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Unit() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="magic flex calculator"
            title1="electric charge Calculator" title2="electric field strength Calculator"
            title3="pressure Calculator" title4="energy Calculator"
            />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Unit</h2>
        <p>Use a sophisticated online unit conversion calculator to convert the data into several units, including feet, inches, metres, centimetres, and millimetres.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Ascii to decimal"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="ascii to hex"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="ascii to text"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="binary to decimal"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="binary to hex"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="binary to octal"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="decimal to ASCII"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="decimal to binary converter"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="decimal to hex"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="decimal to octal"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="electiic charge converter"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="electiic field strength converter"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="energy converter"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="force converter"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="heat converter"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="heat flux density converter "/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="heat transfer converter"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="hex to ASCII"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="hex to binary"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="hex to decimal"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="hex to octal"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="hex to text"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="hijri to gregorian calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="light illumination converter"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="magnatic flux conversion"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="magnetics flux density converter"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="magnimotive force conversion"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="octal to binary"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="octal to decimal"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="octal to hexadecimal"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="pressure converter"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="radiation absorbed dose   conversion"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="sound converter"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="speed converter"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="text to ASCII"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="text to binary"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="text to hex"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="torque converter"/></Col>
    </Row>
        </div>
    </Container>

</div>
  )
}

export default Unit