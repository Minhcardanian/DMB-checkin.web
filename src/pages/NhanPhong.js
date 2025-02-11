import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NhanPhong() {
  return (
    <div className="container">
      <h1>🔑 Nhận phòng</h1>
      <p>Điểm danh, nhận chìa khóa và kiểm tra phòng.</p>
      <Link to="/" className="back-button">⬅️ Quay lại</Link>
    </div>
  );
}

export default NhanPhong;
