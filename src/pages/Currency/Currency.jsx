import React from 'react'
import { Container } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'

function Currency() {
  return (
    <div>
    <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
            <NewCalculator title="Number conversation"
            title1="half angle identify Calculator" title2="long addition Calculator"
            title3="ordering fractions  Calculator" title4="GCF Calculator"/>
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
        <h2 className='text-center fw-bold'>Currency</h2>
        <p>Currency Calculator-Converter</p>
          
    </div>
    </Container>
    </div>
  )
}

export default Currency