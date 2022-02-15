import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="containerOne">
        <ul>Tracis Parrots 4U


        </ul>

        <ul>4870 South Redwood Road
          Salt Lake City, UT 84123</ul>

        <ul>Phone: (385) 474-6238</ul>

      </div>

      <div className="containerOne">
        <ul className="nav justify-content-center">
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
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
