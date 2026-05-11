import { Outlet } from "react-router-dom"
import { Header } from "../Shared/Header"
import NavBar from "../Shared/NavBar/NavBar"
import { Footer } from "../Shared/Footer"
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