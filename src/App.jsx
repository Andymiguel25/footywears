import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Nav from './Component/Nav'
import Product from './Pages/Product'
import Error from './Pages/Error'
import Login from './Pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/*' element={<Error/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path='/login' element={<Login/>}/>

      
      






      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
