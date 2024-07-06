import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

function Main() {
  return (
    <div>
        <Navbar/>
        {/* all children will render from here */}
        <Outlet/> 
        <Footer/>
    </div>
  )
}

export default Main