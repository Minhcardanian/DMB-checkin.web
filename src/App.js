import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DiChuyen from "./pages/DiChuyen";
import ThuTuc from "./pages/ThuTuc";
import NhanPhong from "./pages/NhanPhong";
import About from "./pages/About";
import Header from "./components/Header";
import Loading from "./components/Loading"; // Import Loading Component
import Countdown from "./components/Countdown"; // Import Countdown Component

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // 0.5s fade transition
    }, 1000); // 1s loading time
  }, []);

  return (
    <>
      {loading ? (
        <Loading fadeOut={fadeOut} />
      ) : (
        <div className={`app-container ${fadeOut ? "fade-in" : ""}`}>
          <Header />
          <Countdown /> {/* Positioned above the main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/di-chuyen" element={<DiChuyen />} />
            <Route path="/thu-tuc" element={<ThuTuc />} />
            <Route path="/nhan-phong" element={<NhanPhong />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
