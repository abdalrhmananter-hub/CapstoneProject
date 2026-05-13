import { Outlet } from "react-router-dom"
import NavBar from "../Shared/Navbar"
import Sidebar from "../Shared/Sidebar"
import Footer from "../Shared/Footer"
import { AuthProvider } from "../Context/AuthContext"

export default function Layout() {
    return (
        <AuthProvider>
            <NavBar />
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