import React, { useState } from 'react'
import "../Styling/Login.css"





const Login = () => {
 const [text,setText]=useState('Sign up');
 
  return (
    <div className='container1'>
        <div className='header'>
         
            <div className='text1'><h3>{text}</h3></div>
        
            <div className="underline">


            </div>


        </div>

    <div className="inputcontainer">
        {text==='Login'?<div></div>: <div className="input">
            <h3 className='details'>Username:</h3>
            <input type="text" placeholder='enter username' />
        </div>}
       
        <div className="input">
        <h3 className='details'>Email:</h3>
            <input type="Email"  placeholder='enter e-mail address'/>
        </div>
        <div className="input">
        <h3 className='details'>Password:</h3>
            <input type="password"  placeholder='enter password'/>
        </div>
    </div>
    {text==='Sign up'?<div></div>: <div className='forgotpassword'>Lost Password? <span>click here</span></div>
   }
   
    <div className="submitcontainer">

       <button className={text==="Login"?"submit gray":"submit"}  onClick={()=>{setText("Sign up")}}>Sign up</button>
       <button className={text==="Sign up"?"submit gray":"submit"} onClick={()=>{setText("Login")}}>Login</button>


    </div>
    </div>
  )
}

export default Login