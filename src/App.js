import React from "react";
import "./App.css";
import logo from "./logo.svg"; // Nếu muốn thay logo DMB, thay đổi đường dẫn

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="DMB Logo" className="logo" />
        <h1>
          DMB Checkin <span>[Ngày / Tháng / Năm]</span>
        </h1>
        <h2>Tại VGU</h2>
      </header>

      {/* Hướng dẫn Check-in */}
      <section className="guide">
        <h3>Quy trình Check-in</h3>
        <ul>
          <li>
            <strong>Di chuyển:</strong> Hướng dẫn đường đến ký túc xá và khu vực đậu xe.
          </li>
          <li>
            <strong>Thủ tục:</strong> Danh sách giấy tờ và vật dụng cần chuẩn bị.
          </li>
          <li>
            <strong>Nhận phòng:</strong> Điểm danh, nhận chìa khóa, kiểm tra phòng.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Dormitory Management Board - VGU</p>
      </footer>
    </div>
  );
};

export default App;
