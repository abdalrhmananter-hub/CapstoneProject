import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import Styles from "./Navbar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBook, faCalendarDays, faChevronDown, faEnvelope, faHouse, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export default function NavBar() {

  const navLinks = [
    { name: "Home", to: "home", icon: faHouse },
    { name: "Explore", to: "explore", icon: faMagnifyingGlass },
    { name: "Library", to: "library", icon: faBook },
    { name: "Events", to: "events", icon: faCalendarDays },
    { name: "Groups", to: "groups", icon: faUsers },
  ];

  return (
    <nav className="navbar navbar-expand bg-white px-4 py-2 shadow-sm d-flex align-items-center justify-content-between">

      {/* 1. Logo */}
      <div className="d-flex align-items-center me-3">
        <img src={logo} alt="Library Social Logo" className={`${Styles.logoImage} img-fluid`} />
      </div>

      {/* 2. Search Bar */}
      <div className={`${Styles.searchBar} position-relative d-flex align-items-center w-100`} >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="position-absolute text-muted ms-2"
        />
        <input
          type="text"
          placeholder="Search books..."
          className="form-control rounded-pill border-secondary-subtle"
        />
      </div>

      {/* 3. Pages */}
      <ul className="navbar-nav d-flex flex-row align-items-center gap-4 px-3 mb-0 list-unstyled">
        {navLinks.map((link) => (
          <li key={link.name} className={`nav-item`}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `d-flex flex-column align-items-center gap-1 text-decoration-none pb-2 px-1 border-bottom border-4 ${Styles.navigationTabs} ${isActive
                  ? "border-success text-success fw-bold"
                  : "border-transparent text-secondary"
                }`
              }
            >
              <FontAwesomeIcon icon={link.icon} className={Styles.NavLinkIcons} />
              <span className={`${Styles.navLinkText} text-uppercase tracking-wide fw-bold`} >
                {link.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* 4. Notifications Icon */}
      <div className="position-relative m-2" role="button">
        <FontAwesomeIcon
          icon={faBell}
          className="text-secondary fs-4"
        />
        {/* Animated Badge Notification placeholder using Bootstrap */}
        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </div>

      {/* 5. Messages Icon */}
      <div className="position-relative cursor-pointer m-2" role="button">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-secondary fs-4"
        />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success border border-light" style={{ fontSize: "10px" }}>
          {3}
        </span>
      </div>

      {/* 6. Signing up & Login */}
      <div className="d-flex align-items-center gap-3 ms-2">
        <button className="btn btn-link text-secondary text-decoration-none fw-medium px-2 p-0">Sign In</button>
        <button className="btn btn-success px-3 py-2 rounded-3">
          Join Now
        </button>
      </div>

      {/* 7. Profile Avatar section */}
      <div className="d-flex align-items-center gap-2 ps-3 border-start border-light-subtle">
        <div
          className={`rounded-circle border border-4 border-white shadow-sm ${Styles.profileBackground}`}
          style={{backgroundImage: `url(${avatar})`}}
        ></div>
        <div className="d-flex align-items-center gap-1" role="button">
          <p className="mb-0 text-nowrap fs-6">Ebram Samuel</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-muted fs-6"
          />
        </div>
      </div>

    </nav>
  );
}