import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./Components/About"
import Home from "./Components/Home"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Van from "./Components/Van"
import VanDetail from './Components/VanDetail'

function App() {
  return (
    <BrowserRouter>
    <header className='flex justify-between'>
      <Link to="/" className='text-5xl'>#vanlife</Link>
      <nav>
        <div className='text-2xl '>

        <Link to="/about">About</Link>
        <Link to="/van" className='pl-4'>Van</Link>


        </div>
      

      </nav>
    </header>
    

    <Routes>
    <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/van' element = {<Van/>}/>
      <Route path='/vandetail' element = {<VanDetail/>}/>
      

    </Routes>
    </BrowserRouter>
    
  )
 
}

export default App
