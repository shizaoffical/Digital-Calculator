import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Math() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="Number conversation"
            title1="half angle identify Calculator" title2="long addition Calculator"
            title3="ordering fractions  Calculator" title4="GCF Calculator"/>
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Math</h2>
        <p>Math calculator is helpful in solving math problems quickly and efficiently. Put the values in the respect boxes and get the appropriate result.</p>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Antiderivative(Integral) calculator"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Antilog"/></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="arc calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Arcsin Calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Arithmetic Mean Calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Arithmetic Sequence Calculator"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Asymptote Calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Average Calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Bernoulli Inequality Calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Average Calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Bernoulli Inequality Calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Beta Function Calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="Binary Calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Binary Translator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="binomial theorem calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="BODMAS calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="boolean aljebra calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="circumference"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cofficent of vibration"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="combination"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="fraction comparision "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="complex number"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="confindence intervel calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="continuced fraction calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="continuity calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="contendent calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="covariance"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="camera rules calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="critical point calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="cross product calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cubic equation calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="cubic free calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cubic meter calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="curl calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="decimal calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="derivative fraction calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="decimal to fraction calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="determinent calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="discount calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="directional derivative calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="discriminent calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="distance between 2 points"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="divergence calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="dot product calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="double angle calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="e power calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="eigenvalues calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="elimination calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="equation calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="even or odd function"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="exponents"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="f-test"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="factorial calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="five number summary"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="faction calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="faction simplifier"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="faction to decimal conversation "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="full precision calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="gaussian elimination calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="GCF calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="geomatic mean"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Geomatric progression"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="gradient claculator  "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="group work"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="half angle calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="haromatic mean calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="hessian matrix calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="hexadecimal calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="implicit diffferentiate calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="inflection point calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="interval notation calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="inverse function calculator"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="inverse matrix calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="inflection point calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="law of science"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="log calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="long division calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="long addition calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="math expression calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="matrix calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="matrix power calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="mean calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="mean value theorem"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="median calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName=" mode calculator "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="multiplication table"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="multiply binomials calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="octal calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="one`s calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="partial derivative calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="partial fraction calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="percentage"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="permutation calculator "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="polynomial factoring  calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="polynomial long division"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="polynomial standerd form calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="power reducing formula"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="power series calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="polynomial long division"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="prime factor calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="polynomial long division"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="probability"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="proportion"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="quadratic formula"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="rational/Irrational calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="rational zeros calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="regression "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="remainder calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="remainder theorem calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="scientfic notation"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="scientfic notation converter "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="second derivative calculator"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="sidnificant feature "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="remainder calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="slope calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="standard deviation calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="standard form"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="subsituation calculator"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="sum of square"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="summation calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="syenthic division"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="transport matrix calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="trigonometry calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="two's complemet addition"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="two's complemet  calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="standard deviation calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="unit vector calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="variance calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="vector  calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="vector subtraction calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="vector addition calculatorr"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="vertex form calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="weighted average"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="variance calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="working togehter calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="wronskian calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="z score calculator"/></Col>
    </Row>
        </div>
    </Container>

</div>
  )
}

export default Math