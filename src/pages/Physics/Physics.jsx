import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'
import CalculatorName from '../../components/CalculatorName'

function Physics() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="Number conversation"
            title1="half angle identify Calculator" title2="long addition Calculator"
            title3="ordering fractions  Calculator" title4="GCF Calculator"/>
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Physcis</h2>
        <p>Physics is a natural science that examines matter and its motion as well as ideas like energy and force. Temperature is also determined. Calculate the temperature and kinetic energy using an advanced online physics calculator.</p>
        <dt className='text-center mb-3'>Fluid Mechanics</dt>
        <Row className='mb-2'>
        <Col sm={6} xs={12}><CalculatorName CalculatorName="Bernoulli Numbers"  
        path="/physics/fluid-machine/bernoulli-numbers"/></Col> 
        <Col sm={6} xs={12}><CalculatorName CalculatorName="brake horsepower" 
        path="/physics/fluid-machine/break-horse-power" /></Col> 
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="broad crested weir" 
        path="/physics/fluid-machine/broad-crusted-weir"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="euler numbers"
        path="/physics/fluid-machine/euler-numbers"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="flow rate"
        path="/physics/fluid-machine/flow-rate"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="froude number"
        path="/physics/fluid-machine/fourier-number"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="hydralic radius"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="kusdsen numbers"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="levis  numbers"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="mach  numbers"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="mean depth"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="nussselt  numbers"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="peclet  numbers"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="poiseuille's equation"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="prandtl  number"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="pump efficency"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="rectangular weir flow rate"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="reynolda number"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="schmidt  number"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="sherwood number"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="specific gas constant "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="specific volume"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="stokes law"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="voltage across industance"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="water horsepower"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="weber number"/></Col>
    </Row>
     <dt className='text-center py-3'>Electromagnetism</dt>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="AC to DC  calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="antenna array"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="antenna gain"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="aperature antenna"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="capacitance calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="capacitive reactance"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cylindrical capacitor"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="dipole antenna"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="energy storage"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="frequency calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="inductive reactance"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="OHms law current"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="parallel plate capacitor"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="planet weight converter"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="transformer calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="wavelength calculator"/></Col>
    </Row>
    <dt className='text-center py-3'>Thermodynamics</dt>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="heat flow"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="heat transfer rate"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="SUVAT calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="Thurmal conductivity"/></Col>
    </Row> 
    <dt className='text-center py-3'>Classical</dt>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="acceleration calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="amount of substance"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="average velocity"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="battery charge time"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="battery life"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="centripital force"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="centripital accerlation calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="circular velocity calculator"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="constant angular accerlation"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="critical frequencies"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="cylinder task "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="density"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="diiference pressure measurement"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="displacement calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="einstein mass energy"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="electrical harmonics"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="elentric gain calculation "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="force"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="GSM of paper"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="hooke's law"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="horsepower"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="impulse calculator"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="impulse with velocity"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="kinematic visosity"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="kinetic energy"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="kinetic fraction"/></Col>
    </Row> 
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="newton's law of cooling calculation"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="leaf spring"/></Col>
    </Row>
     <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="lens marker equation"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="mass flow rate calculator calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="moment of force calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="moment of inertia calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="change momentum  calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="momentum with velocity"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="newton's law of gravity"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="newton's second law calculator "/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="physical pendulum"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="potential energy"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="potentiometer "/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="power with displacement"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="power with velocity"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="power with work"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="prandtl number"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="rader range"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="resultant force calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="simple pendulum calculation"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="sound intensity level"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="sound power emitted"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="sound pressure level"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="wavelenght"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="speed of length"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="static friction"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="strain"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="stress"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="temperature"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="torque calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="torsional pendulum"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="total work"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="velocity calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="voltage calculator"/></Col>
    </Row> <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="vertical voltage calculator"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="weight / Force"/></Col>
    </Row>
    <Row className='mb-2'>
        <Col  sm={6} xs={12}>  <CalculatorName CalculatorName="work"/></Col>
        <Col  sm={6} xs={12}> <CalculatorName CalculatorName="young modullus"/></Col>
    </Row>  
        </div>
    </Container>

</div>
  )
}

export default Physics