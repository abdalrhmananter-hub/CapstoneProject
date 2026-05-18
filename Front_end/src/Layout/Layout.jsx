import { Outlet } from "react-router-dom"
import NavBar from "../Shared/Navbar/Navbar"
import Sidebar from "../Shared/Sidebar/Sidebar"
import { AuthProvider } from "../Context/AuthContext"

export default function Layout() {
    return (
        <AuthProvider>
            <NavBar />
            <div className="container-fluid d-flex">
                <div className="col-2">
                    <Sidebar />
                </div>
                <main className="col-10">
                    <Outlet />
                </main>
            </div>
        </AuthProvider>
    )
}