 
import { createBrowserRouter } from 'react-router-dom'   // createBrowserRouter = specific/named export

export const Router = createBrowserRouter ([
 {
   path:"",           // Base path (empty = root URL)
   element:<Layout/>, // Layout is the "container"
   children:[         // Nested routes that render inside Layout
    { element:<Sign/> , index:true }, // Renders at root URL
    { /* path:"home", element:<Home/> */ },
   ]
 }
])
 