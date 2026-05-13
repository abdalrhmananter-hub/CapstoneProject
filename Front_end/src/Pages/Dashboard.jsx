import React from 'react'
import DashNavBar from '../Components/DashBord/DashNavBar/DashNavBar'
import DashSidebar from '../Components/DashBord/DashSidebar/DashSidebar'

export default function Dashboard() {
    return (
        <div className='containter-fluid'>
            <div className="row">
                <div className="col-2">
                    <DashSidebar />
                </div>
                <div className="col-10">
                    <DashNavBar />
                </div>
                
            </div>

        </div>
    )
}
