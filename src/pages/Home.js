import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>DMB CHECKIN [NGÀY / THÁNG / NĂM]</h1>
      <h2>Tại VGU</h2>

      <p className="process-title">
        <strong>Quy trình Check-in</strong>
      </p>

      <div className="block-container">
        <Link to="/di-chuyen" className="block block-1">
          <strong>Di chuyển</strong> <br />
          Hướng dẫn đường đến ký túc xá và khu vực đậu xe.
        </Link>
        <span className="arrow"></span>
        <Link to="/thu-tuc" className="block block-2">
          <strong>Thủ tục</strong> <br />
          Danh sách giấy tờ và vật dụng cần chuẩn bị.
        </Link>
        <span className="arrow"></span>
        <Link to="/nhan-phong" className="block block-3">
          <strong>Nhận phòng</strong> <br />
          Điểm danh, nhận chìa khóa, kiểm tra phòng.
        </Link>
      </div>

      <p className="footer">© 2025 Dormitory Management Board - VGU</p>
    </div>
  );
}

export default Home;
