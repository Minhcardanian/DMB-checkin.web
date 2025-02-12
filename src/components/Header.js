import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const handleLogoClick = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <header className={`header ${isHidden ? "hidden" : ""}`}>
      <div className="header-content">
        <Link to="/" className="logo" onClick={handleLogoClick}>
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
