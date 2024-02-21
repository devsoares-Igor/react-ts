import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./pages/Main/index";
import AuthLoginFirebase from './pages/Login';
import Catalog from './pages/Catalog';


const router = createBrowserRouter([

  {
    path: "/",
    element: <AuthLoginFirebase />,
  },
 
  {
    path: "/login",
    element: <AuthLoginFirebase />,
  },
  {
    path: "/main",
    element: <Main />
  },
  {
    path: "/catalogo",
    element: <Catalog />
  }

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


