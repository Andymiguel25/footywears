import React from 'react'
import img from "../assets/Feetimage.jpeg"
import "../Styling/Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container'>
      <img src={img} alt="" className='img1'/>
       
       <div className='text'>
        <p>Shop at Footywears today!</p>
       <Link to="/login"><button>Get Started</button></Link> 
        </div> 
    </div>
    
  )
}

export default Hero