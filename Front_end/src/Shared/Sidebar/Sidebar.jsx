// src/Shared/Sidebar.jsx
import { faBook, faCalendarDays, faCircleInfo, faGear, faHouse, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from "./Sidebar.module.css";

import avatar from "../../assets/avatar.png";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {

  const sidebarNavigation = [
    { name: "Home", to: "home", icon: faHouse },
    { name: "Explore", to: "explore", icon: faMagnifyingGlass },
    { name: "Library", to: "library", icon: faBook },
    { name: "Events", to: "events", icon: faCalendarDays },
    { name: "Groups", to: "groups", icon: faUsers },
  ];

  return (
    <aside className='mt-4'>
      <div className="d-flex flex-column min-vh-100 bg-light">

        <header className="w-100 sticky-top">
          <div className="d-flex align-items-center gap-2 ps-3 border-start border-light-subtle h-25">
            <div
              className={`rounded-circle border border-4 border-white shadow-sm ${Styles.profileBackground}`}
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className="d-flex align-items-center gap-1 w-100" role="button">
              <p className="mb-0 text-nowrap fs-5 fw-bold">Ebram Samuel</p>
            </div>
          </div>
        </header>

        <main className='ms-2'>
          <ul className='d-flex flex-column mt-5 list-unstyled h-50'>
            {
              sidebarNavigation.map((item, index) => {
                return (
                  <>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `d-flex flex-column gap-1 text-decoration-none pb-2 px-1 ${Styles.navigationTabs} ${isActive
                          ? "text-success fw-bold text-success"
                          : "text-secondary"
                        }`
                      }
                    >
                      <li className='d-flex gap-3' key={index}>
                        <FontAwesomeIcon icon={item.icon} className='mt-2 fs-3' />
                        <p className='fs-3'>{item.name}</p>
                      </li>
                    </NavLink>
                  </>
                );
              })
            }
          </ul>
        </main>

        {/* 3. Global Footer (Stays at the very bottom of the page) */}
        <footer className="w-100 mt-5 border-top pt-4 ms-2">
          <div className="d-flex align-items-center gap-3 ms-2 w-100">
            <button className="btn btn-success px-3 py-2 rounded-3 w-100 me-5">
              Join Now
            </button>
          </div>

          <ul className='mt-5 list-unstyled h-50 ">'>
            <li className='d-flex gap-3'>
              <Link to="/setting" className='d-flex gap-3 text-decoration-none text-secondary'>
                <FontAwesomeIcon icon={faGear} className='mt-2 fs-3' />
                <p className='fs-3'>Setting</p>
              </Link>
            </li>

            <li className='d-flex gap-3'>
              <Link to="/info" className='d-flex gap-3 text-decoration-none text-secondary'>
                <FontAwesomeIcon icon={faCircleInfo} className='mt-2 fs-3' />
                <p className='fs-3'>Info</p>
              </Link>
            </li>
          </ul>
        </footer>

      </div>
    </aside>
  );
};

export default Sidebar;