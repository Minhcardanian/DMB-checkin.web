import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function DiChuyen() {
  return (
    <div className="container">
      <h1>🚗 Hướng dẫn di chuyển</h1>
      <p>Chi tiết hướng dẫn di chuyển đến ký túc xá và khu vực đậu xe sẽ được cập nhật.</p>
      <Link to="/" className="back-button">⬅️ Quay lại</Link>
    </div>
  );
}

export default DiChuyen;
