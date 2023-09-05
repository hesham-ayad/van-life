import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./app.css"

import Login, { loader as loginLoader, action as loginAction } from "./Login";
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

async function authReq(request) {
  return await requireAuth(request)
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
        loader: async ({request}) => authReq(request),
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async ({request}) => authReq(request)
          },
          {
            path: "income",
            element: <Income />,
            loader: async ({request}) => authReq(request)
          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: async ({request}) => authReq(request)
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
            errorElement: <Error />
          },
          {
            path: "vans/:id",
            element: <HostVanLayout />,
            loader: hostVanDetsLoader,
            errorElement: <Error />,
            children: [
              {
                index: true,
                element: <HostVanDetails />,
                loader: async ({request}) => authReq(request)
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
                loader: async ({request}) => authReq(request)
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
                loader: async ({request}) => authReq(request)
              }
            ]
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
        loader: loginLoader,
        action: loginAction
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