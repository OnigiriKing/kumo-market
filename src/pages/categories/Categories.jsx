import { Link } from "react-router-dom";
import { displayProducts } from "../../scripts/displayProudcts";
import Category from "./components/Category";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { allSvg } from "../../svg/allSvg";

export default function Categories() {

  const [category, setCategory] = React.useState("ALL")
  return (
    <div id="categories-page">
      <div className="wrapper categories-wrapper">
        <div className="categories-des">
          <div className="categories-nav">
            <Link to="/">{allSvg(15).arrowLeft}Home</Link>
            <h2>{category.toUpperCase()}</h2>
          </div>
          <div className="categories-btns">
            <Link to={"all"}>
              <button onClick={() => setCategory("all")}>All</button>
            </Link>
            <Link to={"furniture"}>
              <button onClick={() => setCategory("furniture")}>
                Furniture
              </button>
            </Link>
            <Link to={"skin-care"}>
              <button onClick={() => setCategory("skin care")}>
                Skin Care
              </button>
            </Link>
            <Link to={"kitchen"}>
              <button onClick={() => setCategory("kitchen")}>Kitchen</button>
            </Link>
            <Link to={"lamps"}>
              <button onClick={() => setCategory("lamps")}>Lamps</button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/all" element={<Category />} />
          <Route path="/furniture" element={<Category type={category} />} />
          <Route path="/skin-care" element={<Category type={category} />} />
          <Route path="/kitchen" element={<Category type={category} />} />
          <Route path="/lamps" element={<Category type={category} />} />
        </Routes>
      </div>
    </div>
  );
}
