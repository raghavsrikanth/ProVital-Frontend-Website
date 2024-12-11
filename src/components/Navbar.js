import React, { useState } from "react";
import Logo from "../assets/provital logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      {/* Left Side - Logo */}
      <div className="leftSide">
        <img src={Logo} alt="ProVital Logo" />
      </div>

      {/* Right Side - Links */}
      <div className={`rightSide ${openLinks ? "active" : ""}`}>
        <Link to="/">List your practice</Link>
        <Link to="/">For Employers</Link>
        <Link to="/">Courses</Link>
        <Link to="/">Books</Link>
        <Link to="/about">Speakers</Link>
        <Link to="/">Doctors</Link>

        {/* Dropdown for Login/Signup */}
        <div className="dropdown-container">
          <button className="dropdown-button">Login / Signup ▼</button>
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <strong>Doctor:</strong> <Link to="/contact">Login</Link> |{" "}
              <Link to="/contact">Sign Up</Link>
            </div>
            <div className="dropdown-item">
              <strong>Patients:</strong> <Link to="/contact">Login</Link> |{" "}
              <Link to="/contact">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="menuToggle" onClick={toggleNavbar}>
        ☰
      </button>
    </div>
  );
}

export default Navbar;