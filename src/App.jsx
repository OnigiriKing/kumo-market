import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/navBar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import FooterPage from "./pages/footerPage/Footer";
import DropMenu from "./pages/navBar/DropMenu";
import Categories from "./pages/categories/Categories";

export default function App() {
  

  return (
    <div className="App">
      <NavBar />
      {/* <DropMenu /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
