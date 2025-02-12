import React from "react";
import "./Loading.css";

function Loading({ fadeOut }) {
  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="logo-container">
        <img src="/dmblogo.jpg" alt="DMB Logo" className="logo-spin" />
      </div>
    </div>
  );
}

export default Loading;
