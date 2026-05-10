import { Outlet } from "react-router-dom"
import { Header } from "../shared/Header"
import { NavBar } from "../shared/NavBar"
import { Footer } from "../shared/Footer"
import { AuthProvider } from "../Context/AuthContext"  // Import AuthContext

export default function Layout() {
  return (
    <AuthProvider>
      <Header/>
      <NavBar/>
      <Outlet/>   {/* Child routes render here // You can swap different pages through here */}
      <Footer/>
    </AuthProvider>
  )
}