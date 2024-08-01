import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./Components/About"
import Home from "./Components/Home"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
 
}

export default App
