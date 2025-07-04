import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Cart from "./components/Cart";
import Body from "./components/Body";
import '../src/index.css'
// import Grocery from "./components/Grocery";

// TO OPTIMISE APP
// chunking
// bundling 
// lazy loading
// on the demand load

const Grocery = lazy(()=>import('../src/components/Grocery'));

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path:'/',
          element:<Body/>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/grocery',
          element: <Suspense fallback={<h1>Suspence Lazy Loading...</h1>}><Grocery/></Suspense>
        },
        {
          path:'/restaurant/:resId',
          element: <RestaurantDetails />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
