import { createBrowserRouter } from 'react-router-dom'   // createBrowserRouter = specific/named export
import Layout from "../Layout/Layout"
import EditProfile from "../Pages/EditProfile"
import Home from '../Pages/Home'
import Explore from '../Pages/Explore'
import Library from '../Pages/Library'
import Eventes from '../Pages/Eventes'
import Groups from '../Pages/Groups'
import Info from '../Pages/Info'
import Setting from '../Pages/Setting'

export const Router = createBrowserRouter ([
 {
   path:"",           // Base path (empty = root URL)
   element:<Layout />, // Layout is the "container"
   children:[         // Nested routes that render inside Layout
    { element:<EditProfile /> , index:true }, // Renders at root URL
    { element: <Home />, path:"home" },
    { element: <Explore />, path:"explore" },
    { element: <Library />, path:"library" },
    { element: <Eventes />, path:"events" },
    { element: <Groups />, path:"groups" },
    { element: <Setting />, path:"setting" },
    { element: <Info />, path:"info" },
    { /* path:"home", element:<Home/> */ },
   ]
 },
])
 