import { Link } from "react-router-dom";
import { displayProducts } from "../../scripts/displayProudcts";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { allSvg } from "../../svg/allSvg";

export default function Categories() {

    const [category, setCategory] = React.useState("ALL");

  
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
              <button>All</button>
            </Link>
            <Link to={"furniture"}>
              <button>Furniture</button>
            </Link>
            <Link to={"skin-care"}>
              <button>Skin Care</button>
            </Link>
            <Link to={"kitchen"}>
              <button>Kitchen</button>
            </Link>
            <Link to={"chairs"}>
              <button>Chairs</button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/all" element={<div>{displayProducts("all")}</div>} />
          <Route
            path="/furniture"
            element={<div>{displayProducts("furniture")}</div>}
          />
          <Route
            path="/skin-care"
            element={<div>{displayProducts("skin care")}</div>}
          />
          <Route
            path="/kitchen"
            element={<div>{displayProducts("kitchen")}</div>}
          />
          <Route path="/chairs" element={<div>{displayProducts("chairs")}</div>} />
        </Routes>
      </div>
    </div>
  );
}
