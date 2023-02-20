import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Love() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="age calculator"
            title1="percentage calculator"/>
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Love</h2>
        <p>Love</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Love"/></Col>  
    </Row>
        </div>
    </Container>

</div>
  )
}

export default Love