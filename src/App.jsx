import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Error from './Pages/Error'
import Login from './Pages/Login'
import Nav from './Component/Nav'
import { Checkout } from './Pages/Checkout'


function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
  
    <BrowserRouter> 
     
      <Routes>
        <Route path='/*' element={<Error/>}/>  
         {/* <Nav/>       */}
            <Route path='/' element={<Nav/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/product/:product-Id/checkout' element ={<Checkout/>}/>
            </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
