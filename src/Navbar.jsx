// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle click event and update active link
  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className={`nav-link ${
                    activeLink === "/" ? "text-bg-primary" : ""
                  }`}
                  onClick={() => handleClick("/")}
                >
                  ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/fsd"}
                  className={`nav-link ${
                    activeLink === "/fsd" ? "text-bg-primary" : ""
                  }`}
                  onClick={() => handleClick("/fsd")}
                >
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/DataScience"}
                  className={`nav-link ${
                    activeLink === "/DataScience" ? "text-bg-primary" : ""
                  }`}
                  onClick={() => handleClick("/DataScience")}
                >
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/CyberSecurity"}
                  className={`nav-link ${
                    activeLink === "/CyberSecurity" ? "text-bg-primary" : ""
                  }`}
                  onClick={() => handleClick("/CyberSecurity")}
                >
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Career"}
                  className={`nav-link ${
                    activeLink === "/Career" ? "text-bg-primary" : ""
                  }`}
                  onClick={() => handleClick("/Career")}
                >
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
