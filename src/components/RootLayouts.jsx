import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Serachbar from './layouts/Serachbar'
import Footer from './layouts/Footer'

const RootLayouts = () => {
  return (
    <>
    <Navbar/>
    <Serachbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayouts