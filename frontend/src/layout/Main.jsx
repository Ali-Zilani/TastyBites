import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'

function Main() {
  return (
    <div>
        <Navbar/>
        {/* all children will render from here */}
        <Outlet/> 
        <footer>Footer</footer>
    </div>
  )
}

export default Main