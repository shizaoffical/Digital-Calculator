import React from 'react'
import { Container } from 'react-bootstrap'
import NewCalculator from '../../components/NewCalculator'


function AreaOfPolygonCal() {
    return (
        <div>

            <div>
                <Container className='home-page'>
                    <div className=' col-xs-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 '>
                        <NewCalculator title="Area of polygon calculate"
                            title1="remainder theorem Calculator" title2="law of science Calculator"
                            title3="scienthic division Calculator" title4="curl Calculator"
                        />
                    </div>
                    <div className='home-page-right-content col-xs-8 col-lg-8 col-md-7 col-sm-12 col-xs-12'>
                        <h2 className='text-center fw-bold'>Area of polygon calculate</h2>
                        <p>Use the area of a polygon calculator to determine the area by entering the length, radius, and number of sides in the appropriate input fields, then pressing the calculate button.</p>
                        <div className='area-div d-flex'>
                            <div>
                                <p>length</p>
                                <input type="text" placeholder='abc' />
                            </div>
                            <div>
                                <p>length</p>
                                <input type="text" placeholder='abc' />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AreaOfPolygonCal