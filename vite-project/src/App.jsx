import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Van from "./Components/Van";
import VanDetail from "./Components/VanDetail";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="bg-orange-50">
      <BrowserRouter>

      <Routes>
        <Route element = {<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/van" element={<Van />} />
        <Route path="/van/:id" element={<VanDetail />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
