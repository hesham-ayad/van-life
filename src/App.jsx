import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./app.css";

import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"

import Vans from "./pages/Vans/Vans"
import VanDetails from "./pages/Vans/VanDetails"

import HostLayout from "./host/HostLayout"
import Dashboard from "./host/Dashboard"
import Income from "./host/Income"
import Reviews from "./host/Reviews"

import HostVans from "./host/vans/HostVans"
import HostVanLayout from "./host/vans/HostVan/HostVanLayout"
import HostVanDetails from "./host/vans/HostVan/HostVanDetails"
import HostVanPricing from "./host/vans/HostVan/HostVanPricing"
import HostVanPhotos from "./host/vans/HostVan/HostVanPhotos"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>

            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>

          </Route>

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App