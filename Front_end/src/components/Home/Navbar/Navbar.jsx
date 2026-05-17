import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCalendarDays, faHouse, faMagnifyingGlass, faUsers } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logo.png";

export default function Navbar() {
  const navLinks = [
    { name: "Home", to: "/home", icon: faHouse },
    { name: "Explore", to: "/explore", icon: faMagnifyingGlass },
    { name: "Library", to: "/library", icon: faBook },
    { name: "Events", to: "/events", icon: faCalendarDays },
    { name: "Groups", to: "/groups", icon: faUsers },
  ];

  return (
    <>
      <nav className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 col-md-2">
            <img src={logo} alt="logo" className="w-75" />
          </div>

          <div className="col-12 col-md-2 d-flex d-flex justify-content-center align-items-center">
            <div className="search-wrapper position-relative w-100">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
              <input type="text" className="form-control rounded-pill ps-5" placeholder="Search books..." />
            </div>
          </div>

          <div className="col-12 col-md-3">
            <ul className="nav d-flex align-items-center gap-4 px-4">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `nav-link d-flex flex-column align-items-center gap-1 transition-all custom-nav-link ${isActive ? "active text-success border-success" : "text-secondary"
                      }`
                    }
                  >
                    <FontAwesomeIcon icon={link.icon} className="fs-5" />
                    <span className="fw-bold uppercase tracking-wide" style={{ fontSize: '11px' }}>
                      {link.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-3">

          </div>
        </div>
      </nav>
    </>
  );
}
