import React from 'react'
import "../Styling/Login.css"





const Login = () => {
  return (
    <div>
        <div className='header'>
            <div className='text'><h3>Signup</h3></div>
            <div className="underline">


            </div>


        </div>

    <div className="inputcontainer">
        <div className="input">
            <input type="text" />
        </div>
        <div className="input">
            <input type="Email" />
        </div>
        <div className="input">
            <input type="password" />
        </div>
    </div>

    </div>
  )
}

export default Login