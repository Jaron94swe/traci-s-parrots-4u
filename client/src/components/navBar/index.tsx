import React from "react";
import "./style.css";
import logo from "./images/logo-tracis.png"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <img src= {logo} alt="parrots 4u logo" />


      <span>
        <span className="navbar-nav">
          <li>
            <Link className="navbar-brand" to="/">
              Home
        </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
              </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}
            >
              Products
              </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
              </Link>
          </li>
        </span>
      </span>
    </nav>
  );
}

export default Nav;
