import styles from './DashSidebar.module.css';

export default function DashSidebar() {

    const cont = [
        { icon: "fa-tachograph-digital", title: "Dashboard" },
        { icon: "fa-users", title: "User Mangement" },
        { icon: "fa-gavel", title: "Content Moderation" },
        { icon: "fa-chart-gantt", title: "Liberary Analytics" },
        { icon: "fa-table-cells", title: "System logs" },
    ]
    return (
        <div className='ps-4'>
            <div className='py-4 mb-5'>
                <h3 className={`${styles.pColor} `}>Library Social</h3>
                <p className={`${styles.textColor}`}>ADMIN CONSOLE</p>
            </div>
            <div className='d-flex flex-column gap-5 mt-5'>

                {
                cont.map((item,i)=>(
                <div key={i} className={` d-flex align-items-center ${styles.textColor}` }>
                    <i className={`fa-solid  ${item.icon} `} ></i>
                    <p className={` mb-0 ps-1`}>{item.title}</p>
                </div>
                ))
                }

            </div>
        </div>
    )
}
