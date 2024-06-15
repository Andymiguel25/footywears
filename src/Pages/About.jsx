import React from 'react'
import Nav from '../Component/Nav'
import "../Styling/About.css"
import img2 from "../assets/aboutimg.jpeg"

const About = () => {
    <Nav/>
  return (
    <div className='about_container'>

        <h2>Welcome to Footywears</h2>
        <h1 className='aboutH1'>About Us</h1>

        <p>
            Welcome to Footywears E-commerce!
            We are your go-to online store for the latest and greatest in footwear fashion
        </p>
        
        <h2 className='mission'>Our Mission</h2>
        <p>
            Our Mission is to provide high quality, stylish shoes that make you look and feel your best.
        </p>
        <img src={img2} alt="" className='img2' />
        <h1 className='aboutH1'>400+ Million </h1>
        <p>Visits on website this year</p>

        <h1 className='aboutH1'>30.8 Million </h1>
        <p>Orders in 2023</p>

        <h1 className='aboutH1'>4 Million </h1>
        <p>Active customer across Africa</p>

       <hr style={{backgroundColor:'crimson', width:"50px",height:"1px"}} />
        <p>
            Thank you for choosing Footywears E-commerce. Step into style with us!
        </p>
       
       
    
    
    </div>
  )
}

export default About