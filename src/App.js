import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DiChuyen from "./pages/DiChuyen";
import ThuTuc from "./pages/ThuTuc";
import NhanPhong from "./pages/NhanPhong";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/di-chuyen" element={<DiChuyen />} />
        <Route path="/thu-tuc" element={<ThuTuc />} />
        <Route path="/nhan-phong" element={<NhanPhong />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
