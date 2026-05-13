import { Outlet } from "react-router-dom"
import NavBar from "../Shared/Navbar"
import Sidebar from "../Shared/Sidebar"
import { AuthProvider } from "../Context/AuthContext"

export default function Layout() {
    return (
        <AuthProvider>
            <NavBar />
            <div className="d-flex gap-5">
                <Sidebar />
                <main className="d-flex p-6">
                    <Outlet />
                </main>
            </div>
        </AuthProvider>
    )
}