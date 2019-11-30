import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
       <img src="images/logo.tracis.png" alt="tracis parrots 4u logo"/>
      </a>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/discover"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
export default Nav;
