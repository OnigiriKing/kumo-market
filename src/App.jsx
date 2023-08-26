import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/navBar/NavBar";
import HomePage from "./pages/homePage/HomePage";
import FooterPage from "./pages/footerPage/Footer";
import Categories from "./pages/categories/Categories";
import Product from "./pages/productPage/Product";
import Overlay from "./pages/overlay/Overlay";
import { useLocation } from "react-router-dom";

export default function App() {
  const html = useLocation().pathname;

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [html]);

  const [category, setCategory] = React.useState("ALL");

  return (
    <div className="app">
    <Overlay />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage cat={category} setCat={setCategory} />}
        />
        <Route
          path="/categories/*"
          element={<Categories cat={category} setCat={setCategory} />}
        />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
