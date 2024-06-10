import React from 'react'
import "../Styling/Nav.css"
import { Link } from 'react-router-dom'
import Hero from './Hero'

const Nav = () => {
  return (
    <div>
       <nav>
        <div>
            <Link to={"/"}><h2>FootyWears</h2></Link>
        </div>
        <div>
            <ul>
                <Link to={"/product"}><li>Product</li></Link> 
                <Link to={"/about"}><li>About</li></Link> 
                <Link to={"/contact"}><li>Contact</li></Link>
            </ul>
        </div>
       </nav>
       <Hero/>
    </div>
  )
}

export default Nav