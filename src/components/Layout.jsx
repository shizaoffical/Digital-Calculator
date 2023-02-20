import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/footer/Footer'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     
    </>
  )
}
export default Layout