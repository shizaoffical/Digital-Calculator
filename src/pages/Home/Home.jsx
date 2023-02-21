import React from 'react'
import NewCalculator from '../../components/NewCalculator'
import ResentBlog from './ResentBlog'
import { Container } from 'react-bootstrap'
import Categories from './Categories'
import PopolarCalculator from './PopolarCalculator'

function Home() {
  return (
    <div>
      <Container className='home-page'>
        <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
          <NewCalculator title="curl Calculator" title1="Substitute Calculator" title2="Remainder Theorem Calculator" title3="law of sines Calculator " title5="syenthetic division calculator  " />
          <ResentBlog />
        </div>
        <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
         <Categories/>
         <PopolarCalculator/>
        </div>
      </Container>
    </div>
  )
}

export default Home