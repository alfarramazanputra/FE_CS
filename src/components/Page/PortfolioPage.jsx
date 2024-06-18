import React from 'react'

import Home from '../Layouts_Portfolio/Home/Home'
import Index from '../Layouts_Portfolio/Landing/index'
import Navbar from "../../components/Navbar"
const PortfolioPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Index></Index>
    </div>
  )
}

export default PortfolioPage
