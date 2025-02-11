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

      {/* 🎯 Layout 3 block liền nhau + mũi tên */}
      <div className="block-container">
        <div className="block block-1">
          1️⃣ 🚗 <strong>Di chuyển</strong> <br />
          Hướng dẫn đường đến ký túc xá và khu vực đậu xe.
        </div>
        <div className="arrow">➡️</div>
        <div className="block block-2">
          2️⃣ 📜 <strong>Thủ tục</strong> <br />
          Danh sách giấy tờ và vật dụng cần chuẩn bị.
        </div>
        <div className="arrow">➡️</div>
        <div className="block block-3">
          3️⃣ 🔑 <strong>Nhận phòng</strong> <br />
          Điểm danh, nhận chìa khóa, kiểm tra phòng.
        </div>
      </div>

      <p className="footer">© 2025 Dormitory Management Board - VGU</p>
    </div>
  );
}

export default App;
