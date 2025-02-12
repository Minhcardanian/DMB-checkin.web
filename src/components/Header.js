import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/dmblogo.jpg" alt="DMB Logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/about">About</Link>
          <a href="https://www.facebook.com/VGU.Dormitory" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
