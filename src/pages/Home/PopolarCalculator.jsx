import React from 'react'
import { Row , Col} from 'react-bootstrap'
import CalculatorName from '../../components/CalculatorName'
import Headings from '../../components/Headings'

function PopolarCalculator() {
  return (
    <div className='popular-calculator'>
      <h2 className='text-center fw-bold'>Populator Calculator</h2>
        <div>
            <Headings PopularCalculatorName="Physics" path="/Physics"/>
            <Row className='mb-2'>
                <Col sm={6} xs={12}><CalculatorName CalculatorName="Physics / Electromagnetism"/></Col> 
                <Col sm={6} xs={12}><CalculatorName CalculatorName="Physics / Fluid Mechanics"/></Col> 
            </Row>
            <Row className='mb-2'>
                <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Physics / Thermodynamics"/></Col>
                <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Physics / Classical"/></Col>
            </Row>
            <Headings PopularCalculatorName="Area" path="/Area"/>
            <Headings PopularCalculatorName="Fun" path="/Fun"/>
            <Headings PopularCalculatorName="Love" path="/Love"/>
            <Headings PopularCalculatorName="Sports" path="/Sports"/>
            <Headings PopularCalculatorName="Chemistry" path="/Chemistry"/>
            <Headings PopularCalculatorName="Engineering" path="/Engineering"/>
            <Headings PopularCalculatorName="Physics" path="/Physics"/>
            <Headings PopularCalculatorName="Units" path="/Units"/>
            <Headings PopularCalculatorName="Math" path="/Math"/>
            <Headings PopularCalculatorName="Weather" path="/Weather"/>
            <Headings PopularCalculatorName="Health" path="/Health"/>
            <Headings PopularCalculatorName="Financial" path="/Financial"/>
            <Headings PopularCalculatorName="Currency" path="/Currency"/>
        </div>

    </div>
  )
}

export default PopolarCalculator