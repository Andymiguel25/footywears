import React, { useState } from 'react'
import "../Styling/Nav.css"
import { Link, NavLink ,Outlet} from 'react-router-dom'

const Nav = () => {
  const [openMenu,setOpenMenu]= useState(false)
  return (
    <div>
       <nav>
        <div>
            <NavLink to={"/"} className='title'><h2>FootyWears</h2></NavLink>
            <div className='menu' onClick={()=>{
              setOpenMenu(!openMenu)
            }}>
                   <span></span>
                   <span></span>
                   <span></span>

            </div>
        </div>
        <div>
            <ul className={openMenu ? "open":""}>
                <NavLink to={"/product"}><li>Product</li></NavLink> 
                <NavLink to={"/about"}><li>About</li></NavLink> 
            </ul>
        </div>
       </nav>
     <Outlet/>
    </div>
  )
}

export default Nav