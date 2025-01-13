import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const BasicLayout = () => {
  return (
    <div className="flex relative ">
      <Navbar />
      <div className="flex-auto pl-16 lg:px-[4.5rem] min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default BasicLayout