 
import { createBrowserRouter } from 'react-router-dom'   // createBrowserRouter = specific/named export
import Layout from "../Layout/Layout"
import Sign from "../Pages/Sign"

export const Router = createBrowserRouter ([
 {
   path:"/",           // Base path (empty = root URL)
   element:<Layout/>, // Layout is the "container"
   children:[         // Nested routes that render inside Layout
    { element:<Sign/>, index:true }, // Renders at root URL
    { element:<Sign/>, path:"home"},
    { element:<Sign/>, path:"explore"},
    { element:<Sign/>, path:"library"},
    { element:<Sign/>, path:"events"},
    { element:<Sign/>, path:"groups"},
    { /* path:"home", element:<Home/> */ },
   ]
 }
])
 