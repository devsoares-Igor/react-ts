import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from "./pages/Login/index";
import Main from "./pages/Main/index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
