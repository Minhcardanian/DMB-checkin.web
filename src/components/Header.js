import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // Import icons
import "./Header.css";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleHeader = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className={`header ${isCollapsed ? "collapsed" : ""}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/dmblogo.jpg" alt="DMB Logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/about">About</Link>
          <a
            href="https://www.facebook.com/VGU.Dormitory"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>

        {/* Toggle Button */}
        <button className="toggle-button" onClick={toggleHeader}>
          {isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
      </div>
    </header>
  );
}

export default Header;
