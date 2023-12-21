import React from 'react'
import ReactDOM from 'react-dom/client'


import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routers/AppRoutes';


const router = AppRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
