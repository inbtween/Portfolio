import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">
        Home
      </Link> */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" || location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
            </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
            </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
