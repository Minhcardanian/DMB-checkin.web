import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src="/dmblogo.jpg" alt="DMB Logo" className="logo" />
      </div>
      <h1>DMB CHECKIN [NGÀY / THÁNG / NĂM]</h1>
      <h2>Tại VGU</h2>

      <p className="process-title">
        🚀 <strong>Quy trình Check-in</strong>
      </p>

      <div className="checkin-boxes">
        <div className="checkin-box red">
          🚗 <strong>Di chuyển:</strong> Hướng dẫn đường đến ký túc xá và khu vực đậu xe.
        </div>
        <div className="checkin-box green">
          📜 <strong>Thủ tục:</strong> Danh sách giấy tờ và vật dụng cần chuẩn bị.
        </div>
        <div className="checkin-box blue">
          🔑 <strong>Nhận phòng:</strong> Điểm danh, nhận chìa khóa, kiểm tra phòng.
        </div>
      </div>

      <p className="footer">© 2025 Dormitory Management Board - VGU</p>
    </div>
  );
}

export default App;
