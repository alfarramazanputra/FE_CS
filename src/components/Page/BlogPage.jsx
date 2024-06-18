import React from 'react'
import Home from '../Layouts_blog/Home/Home'
import Blog from '../Layouts_blog/Blog/Blog'
import Footer from "../../components/Layouts/Footer/Footer"
import Navbar from "../../components/Navbar"
const BlogPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default BlogPage
