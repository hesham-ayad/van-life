import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./app.css"

import Layout from "./components/Layout"

import Error from "./Error"

import { requireAuth } from "./utils";



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
        async lazy() {
          let { Home } = await import("./pages/Home")

          return {
            element: <Home />
          }
        }
      },
      {
        path: "about",
        async lazy() {
          let { About } = await import("./pages/About")

          return {
            element: <About />
          }
        }
      },
      {
        path: "vans",
        errorElement: <Error />,
        async lazy() {
          let { Vans, loader } = await import("./pages/Vans/Vans")

          return {
            element: <Vans />,
            loader: loader
          }
        }
      },
      {
        path: "vans/:id",
        errorElement: <Error />,
        async lazy() {
          let { VanDetails, loader } = await import("./pages/Vans/VanDetails")

          return {
            element: <VanDetails />,
            loader: loader
          }
        }
      },
      {
        path: "host",
        async lazy() {
          let { HostLayout } = await import("./host/HostLayout")

          return {
            element: <HostLayout />
          }
        },
        loader: async ({ request }) => authReq(request),
        children: [
          {
            index: true,
            async lazy() {
              let { Dashboard } = await import("./host/Dashboard")

              return {
                element: <Dashboard />
              }
            },
            loader: async ({ request }) => authReq(request)
          },
          {
            path: "income",
            async lazy() {
              let { Income } = await import("./host/Income")

              return {
                element: <Income />
              }
            },
            loader: async ({ request }) => authReq(request)
          },
          {
            path: "reviews",
            async lazy() {
              let { Reviews } = await import("./host/Reviews")

              return {
                element: <Reviews />
              }
            },
            loader: async ({ request }) => authReq(request)
          },
          {
            path: "vans",
            errorElement: <Error />,
            async lazy() {
              let { HostVansList, loader } = await import("./host/vans/HostVans")

              return {
                element: <HostVansList />,
                loader: loader
              }
            }
          },
          {
            path: "vans/:id",
            errorElement: <Error />,
            async lazy() {
              let { HostVanLayout, loader } = await import("./host/vans/HostVan/HostVanLayout")

              return {
                element: <HostVanLayout />,
                loader: loader
              }
            },
            children: [
              {
                index: true,
                async lazy() {
                  let { HostVanDetails } = await import("./host/vans/HostVan/HostVanDetails")

                  return {
                    element: <HostVanDetails />
                  }
                },
                loader: async ({ request }) => authReq(request)
              },
              {
                path: "pricing",
                async lazy() {
                  let { HostVanPricing } = await import("./host/vans/HostVan/HostVanPricing")

                  return {
                    element: <HostVanPricing />
                  }
                },
                loader: async ({ request }) => authReq(request)
              },
              {
                path: "photos",
                async lazy() {

                  let { HostVanPhotos } = await import("./host/vans/HostVan/HostVanPhotos")

                  return {
                    element: <HostVanPhotos />
                  }
                },
                loader: async ({ request }) => authReq(request)
              }
            ]
          }
        ]
      },
      {
        path: "login",
        async lazy() {
          let { Login, loader, action } = await import("./Login")

          return {
            element: <Login />,
            loader: loader,
            action
          }
        }
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