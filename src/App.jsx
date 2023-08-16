import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/navBar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import FooterPage from "./pages/footerPage/Footer";
import DropMenu from "./pages/navBar/DropMenu";

export default function App() {
  

  return (
    <div className="App">
      <NavBar />
      {/* <DropMenu /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
