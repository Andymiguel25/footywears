import React from 'react'
import Nav from '../Component/Nav'
import { Outlet } from 'react-router-dom'
import Hero from '../Component/Hero'

const Home = () => {
  return (
   

    <div> 
    {/* <Nav/> */}
    <Outlet/>
    <Hero/>
    

    </div>
  )
}

export default Home