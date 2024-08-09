import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { redirect } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Van, { loader as vansLoader } from "./Components/Van";
import VanDetail from "./Components/VanDetail";
import Layout from "./Components/Layout";
import Dashboard from "./Host/Dashboard";
import Income from "./Host/Income";
import Reviews from "./Host/Reviews";
import HostLayout from "./Host/HostLayout";
import HostVansDetails from "./Host/HostVansDetails";
import HostVans from "./Host/HostVans";
import HostVanInfo from "./Host/HostVanInfo";
import HostVanPhotos from "./Host/HostVanPhotos";
import HostVanPricing from "./Host/HostVanPricing";
import NotFound from "./Components/NotFound";
import Error from "./Components/Errors";
import Login from "./Components/Login";
import AuthRequired from "./Components/Authrequired";
import { Router } from "lucide-react";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="protected" element={<h1>Only sensitive information here</h1>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="van">
          <Route index element={<Van />} loader={vansLoader} />
          <Route path=":id" element={<VanDetail />} />
        </Route>

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetails />}>
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="bg-orange-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
