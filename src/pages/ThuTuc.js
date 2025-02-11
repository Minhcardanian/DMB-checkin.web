import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ThuTuc() {
  return (
    <div className="container">
      <h1>📜 Thủ tục cần thiết</h1>
      <p>Danh sách giấy tờ và vật dụng cần chuẩn bị sẽ được cập nhật.</p>
      <Link to="/" className="back-button">⬅️ Quay lại</Link>
    </div>
  );
}

export default ThuTuc;
