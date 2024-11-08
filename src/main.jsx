import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Statistics from './components/Statistics/Statistics';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/Error/Error';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/Details/ProductDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/Data.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch('/Data.json')
      },
    
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch('/Data.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)

