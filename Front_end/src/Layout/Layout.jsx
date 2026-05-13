import { Outlet } from "react-router-dom"
import NavBar from "../Shared/Navbar"
import Sidebar from "../Shared/Sidebar"
import { AuthProvider } from "../Context/AuthContext"

export default function Layout() {
    return (
        <AuthProvider>
            <NavBar />
            <div className="container-fluid d-flex">
                <Sidebar />
                <main className="">
                    <Outlet />
                </main>
            </div>
        </AuthProvider>
    )
}