import { Outlet } from "react-router-dom"
import { Header } from "../Shared/Header"
import NavBar from "../Shared/NavBar"
import Sidebar from "../Shared/Sidebar"   // Import Sidebar
import { Footer } from "../Shared/Footer"
import { AuthProvider } from "../Context/AuthContext"

export default function Layout() {
  return (
    <AuthProvider>
      <Header />
      <NavBar />

      {/* Main content area with sidebar + page content */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      <Footer />
    </AuthProvider>
  )
}