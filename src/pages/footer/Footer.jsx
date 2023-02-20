import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from "../../images/header-logo.png"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='pt-5' >

          <Col xl={4} lg={4} md={12}   sm={12} xs={12} className='footer-col'>
            <div className='footer-col-div1 d-flex align-items-center' >
              <img src={Logo} alt="" style={{ width: "3.3rem" }} className="pb-1" />
              <h5 className='ps-2 fw-bold'>Digital Calculator</h5>
            </div>
            <div className='footer-col-div2'>
              <p>The webpage for the free online calculator Meracalculator. To make calculations simpler, meracalculator has created more than 100 calculators in the categories of math, physics, chemistry, and health.</p>
            </div>
            <button className='footer-btn'><Link to="/Contact Us">Contact Us</Link></button>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}  className='footer-col'>
            <div className='footer-col-div1 ' >
              <h5 className='ps-1 pt-3 pb-2 fw-bold'>Resources</h5>
            </div>
            <div className='footer-col-div2'>
              <p target="_blank"><Link to="/blog" className='footer-link'>Blog</Link></p>
              <p target="_blank"><Link to="/polices" className='footer-link'>Privacy Policy</Link></p>
              <p target="_blank"><Link to="/conditions" className='footer-link'>Terms & Conditions</Link></p>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} xs={12}  className='footer-col'>
            <div className='footer-col-div1  ' >
              <h5 className='ps-1 pt-3 pb-2 fw-bold'>Follow Us</h5>
            </div>
            <div className='footer-col-div2'>
              <p target="_blank"><Link to="/" className='footer-link'>Facebook</Link></p>
              <p target="_blank"><Link to="/" className='footer-link'>Twitter</Link></p>
              <p target="_blank"><Link to="/" className='footer-link'>LinkedIn</Link></p>
              <p target="_blank"><Link to="/" className='footer-link'>Pinterest</Link></p>
            </div>

          </Col>
          <small className='text-center'>Copyright © 2011 - 2023 Enzipe.</small>
        </Row>
      
      </Container>
    </div>
  )
}
export default Footer