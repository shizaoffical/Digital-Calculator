import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Chemistry() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="ideal gas law calculator"
            title1="combined gas law Calculator" title2="specific gas constant Calculator"
            />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Chemistry</h2>
        <p>A substance or body's physical characteristics and chemical make-up. Chemistry is the study of matter's composition, structure, characteristics, and reactions, particularly those involving atomic and molecular systems. Use the advanced online calcium calculator in the chemical calculator to determine the body's percentage of calcium.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Avogadro's numbers"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="charles law calculator"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="checmical equation balancer"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="combined gas law"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="crube fiber"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="crube protein"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="dalton's law"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="dilution Calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="double decomposition"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="enthalpy Calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="equivalent mass Calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="estimation of hydrogen ion concentration"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="ether extract"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="fatty acid"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="gay-Lussac's law"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="grams to moles calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="henderson calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="ideal gass law"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cofficent of vibration"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="combination"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="metal weight"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="molar mass of gas"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="molarity"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="mole calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="mole fraction calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="mole to grams calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="neutralization reaction"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="oxide"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="oxidizing-Reducing"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="percent yeild calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="PH calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="polyatomic calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="reverse osmosis"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="sand silica"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="sodium chloride"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="theorietical yeild"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="titration calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="weight of acid"/></Col>
    </Row>
        </div>
    </Container>

</div>
  )
}

export default Chemistry