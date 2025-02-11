import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Logo */}
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/dmblogo.jpg`} alt="DMB Logo" className="logo" />
      </div>

      {/* Title */}
      <h1 className="title">
        DMB Checkin <span className="highlight">[Ngày / Tháng / Năm]</span>
      </h1>
      <h2 className="subtitle">Tại VGU</h2>

      {/* Section Title */}
      <h3 className="section-title">🚀 Quy trình Check-in</h3>

      {/* Check-in Steps */}
      <div className="checkin-steps">
        <div className="step step-red">
          🚗 <strong>Di chuyển:</strong> Hướng dẫn đường đến ký túc xá và khu vực đậu xe.
        </div>
        <div className="step step-green">
          📜 <strong>Thủ tục:</strong> Danh sách giấy tờ và vật dụng cần chuẩn bị.
        </div>
        <div className="step step-blue">
          🔑 <strong>Nhận phòng:</strong> Điểm danh, nhận chìa khóa, kiểm tra phòng.
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Dormitory Management Board - VGU
      </footer>
    </div>
  );
}

export default App;
