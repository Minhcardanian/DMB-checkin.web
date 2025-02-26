import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>📢 Giới thiệu về DMB</h1>
      <p>
        DMB (Dormitory Management Board) là đội ngũ quản lý ký túc xá của VGU. 
        Chúng tôi đảm bảo môi trường sống an toàn, tiện nghi và hỗ trợ sinh viên.
      </p>
      <a
        href="https://www.facebook.com/VGU.Dormitory"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook-link"
      >
        🌐 Kết nối với chúng tôi trên Facebook
      </a>
      <br />
      <Link to="/" className="return-link">
        ↩ Quay về trang chủ
      </Link>
    </div>
  );
}

export default About;
