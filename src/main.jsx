import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './page/Home.jsx';
import ErrorPage from './page/ErrorPage.jsx';
import AddCoffee from './page/AddCoffee.jsx';
import Layout from './page/Layout.jsx';
import UpdateCoffee from './page/UpdateCoffee.jsx';
import CoffeeDetails from './page/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/add-coffee",
    element: <Layout />,
    children: [
      {
        path: "/add-coffee",
        element: <AddCoffee />
      }
    ]
  },
  {
    path: "/update-coffee/:id",
    element: <Layout />,
    children: [
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />
      }
    ]
  },
  {
    path: "/coffee-details/:id",
    element: <Layout />,
    children: [
      {
        path: "/coffee-details/:id",
        element: <CoffeeDetails />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
