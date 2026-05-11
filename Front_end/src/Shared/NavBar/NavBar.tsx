import logo from "../../assets/logo.png";

import Style from "./NavBar.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBell, faBook, faCalendarDays, faChevronDown, faEnvelope, faHouse, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export default function NavBar() {

  const navLinks = [
    { name: "Home", to: "/home", icon: faHouse },
    { name: "Explore", to: "/explore", icon: faMagnifyingGlass },
    { name: "Library", to: "/library", icon: faBook },
    { name: "Events", to: "/events", icon: faCalendarDays },
    { name: "Groups", to: "/groups", icon: faUsers },
  ];

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      {/* 1. Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Library Social Logo" className="w-64 h-auto" />
      </div>

      {/* 2. Search Bar */}
      <div className="relative flex items-center w-full max-w-sm">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 text-slate-400 pointer-events-none"
        />

        <input
          type="text"
          placeholder="Search books..."
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        />
      </div>

      {/* 3. Pages */}
      <ul className="flex items-center gap-8 px-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition-all duration-300 border-b-4 pb-2 px-1 ${isActive
                  ? "border-green-600 text-green-700"
                  : "border-transparent text-slate-500 hover:text-green-600 hover:border-slate-200"
                }`
              }
            >
              <FontAwesomeIcon icon={link.icon} className="text-xl" />
              <span className="text-[11px] font-bold uppercase tracking-wide">
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* 4. Notifications Icon */}
      <div className="relative cursor-pointer group">
        <FontAwesomeIcon
          icon={faBell}
          className="text-slate-500 text-xl group-hover:text-green-600 transition-colors"
        />

        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </div>

      {/* 5. Messages Icon */}
      <div className="relative cursor-pointer group">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-slate-500 text-xl group-hover:text-green-600 transition-colors"
        />

        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
          {3}
        </span>
      </div>

      {/* 1. Signning up & Login & Avatar */}
      <div className="flex items-center gap-4">
        <button className="text-slate-600 font-medium hover:text-slate-900">Sign In</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Join Now
        </button>
      </div>

      <div className="flex items-center gap-2 pl-6 border-slate-200">
        <div className={`w-16 h-16 rounded-full bg-cover bg-center border-4 border-white shadow-lg ${Style.profileBackground}`}></div>
        <div className="flex flec-col gap-1">
          <p>Ebram Samuel</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-slate-400 text-[10px] group-hover:text-green-600 transition-colors"
          />
        </div>
      </div>
    </nav>
  );
}