import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/navBar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import FooterPage from "./pages/footerPage/Footer";
import DropMenu from "./pages/navBar/DropMenu";
import Categories from "./pages/categories/Categories";

export default function App() {

  const [category, setCategory] = React.useState("ALL");
  
  return (
    <div className="App">
      <NavBar />
      {/* <DropMenu /> */}
      <Routes>
        <Route
          path="/"
          element={<HomePage cat={category} setCat={setCategory} />}
        />
        <Route
          path="/categories/*"
          element={<Categories cat={category} setCat={setCategory} />}
        />
      </Routes>
      <FooterPage />
    </div>
  );
}
