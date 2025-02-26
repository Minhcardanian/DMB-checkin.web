import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Countdown from "../components/Countdown";

function Home() {
  return (
    <div className="home-container">
      <h1>DMB CHECKIN [NGÀY / THÁNG / NĂM]</h1>
      <h2>Tại Vietnamese-German University</h2>

      <Countdown /> {/* Countdown Timer Here */}

      <p className="process-title">
        🚀 <strong>Quy trình Check-in</strong>
      </p>

      <div className="block-container">
        <Link to="/di-chuyen" className="block block-1">
          <strong>Di Chuyển</strong> <br />
          Chỉ dẫn đường đến ký túc xá và khu vực đỗ xe.
        </Link>
        <Link to="/thu-tuc" className="block block-2">
          <strong>Thủ Tục</strong> <br />
          Danh sách giấy tờ và vật dụng cần chuẩn bị.
        </Link>
        <Link to="/nhan-phong" className="block block-3">
          <strong>Nhận Phòng</strong> <br />
          Điểm danh, nhận chìa khóa, kiểm tra phòng.
        </Link>
      </div>

      <p className="footer">© 2025 Dormitory Management Board - VGU</p>
    </div>
  );
}

export default Home;
