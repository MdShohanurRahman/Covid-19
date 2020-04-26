import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          COVID-19
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <NavLink
                className="nav-link"
                activeClassName="main-nav-active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="main-nav-active"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
