import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { redirect } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Van from "./Components/Van";
import VanDetail from "./Components/VanDetail";
import Layout from "./Components/Layout";
import Dashboard from "./Host/Dashboard";
import Income from "./Host/Income";
import Reviews from "./Host/Reviews";
import HostLayout from "./Host/HostLayout";
import HostVans from "./Host/HostVans";
import HostVansDetails from "./Host/HostVansDetails";

function App() {
  return (
    <div className="bg-orange-50">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="van">
              <Route index element={<Van />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
