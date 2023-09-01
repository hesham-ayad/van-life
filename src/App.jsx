import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./app.css"

import Login, { loader as LoginLoader } from "./Login";
import Error from "./Error"
import { requireAuth } from "./utils";

import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetails, { loader as vanDetsLoader } from "./pages/Vans/VanDetails"

import HostLayout from "./host/HostLayout"
import Dashboard from "./host/Dashboard"
import Income from "./host/Income"
import Reviews from "./host/Reviews"

import HostVans, { loader as hostVansLoader } from "./host/vans/HostVans"
import HostVanLayout, { loader as hostVanDetsLoader } from "./host/vans/HostVan/HostVanLayout"
import HostVanDetails from "./host/vans/HostVan/HostVanDetails"
import HostVanPricing from "./host/vans/HostVan/HostVanPricing"
import HostVanPhotos from "./host/vans/HostVan/HostVanPhotos"

async function authReq() {
  return await requireAuth()
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        errorElement: <Error />
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: vanDetsLoader,
        errorElement: <Error />
      },
      {
        path: "host",
        element: <HostLayout />,
        loader: async () => authReq(),
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async () => authReq()
          },
          {
            path: "income",
            element: <Income />,
            loader: async () => authReq()
          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: async () => authReq()
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader
          },
          {
            path: "vans/:id",
            element: <HostVanLayout />,
            loader: hostVanDetsLoader,
            children: [
              {
                index: true,
                element: <HostVanDetails />,
                loader: async () => authReq()
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
                loader: async () => authReq()
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
                loader: async () => authReq()
              }
            ]
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
        loader: LoginLoader
      },
      {
        path: "*",
        element: <h1>Sorry not found</h1>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App