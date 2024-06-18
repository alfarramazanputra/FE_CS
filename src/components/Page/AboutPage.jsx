import React from 'react'
import Home from '../Layouts_about/Home/Home'
import History from '../Layouts_about/History/History'
import CompanyProfile from '../Layouts_about/Company_Profile/CompanyProfile'
import Visi from '../Layouts_about/Visi_Misi/Visi'
import Culture from '../Layouts_about/Culture/Culture'
import Footer from "../../components/Layouts/Footer/Footer"
import Person from '../Layouts_about/Person/Person'
import Navbar from "../../components/Navbar"
const AboutPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      {/* <History></History> */}
      {/* <CompanyProfile></CompanyProfile> */}
      <Visi></Visi>
      <Culture></Culture>
    <Person></Person>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage
