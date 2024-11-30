import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import PageTitle from './components/PageTitle/PageTitle';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Root from './components/Root/Root';
import ErrorPage from './components/Error/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import ProductDetails from './components/Details/ProductDetails';
import TechSpotlight from './components/TechSpot/TechSpotLIght';



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
        path: '/category/:category',
        element: <Home/>,
        loader: ()=> fetch('../Data.json'), /*this part will show gadgets accroding to their category */
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
          path:"/TechSpotlight",
          element:<TechSpotlight/>

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
