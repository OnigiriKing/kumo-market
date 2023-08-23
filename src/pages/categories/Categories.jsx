import { Link } from "react-router-dom";
import { displayProducts } from "../../scripts/displayProudcts";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { allSvg } from "../../svg/allSvg";
import { useHistory } from "react-router-dom";


export default function Categories({ cat, setCat }) {
  return (
    <div id="categories-page">
      <div className="wrapper categories-wrapper">
        <div className="categories-des">
          <div className="categories-nav">
            <Link to="/">{allSvg(15).arrowLeft}Home</Link>
            <h2>{cat.toUpperCase()}</h2>
          </div>
          <div className="categories-btns">
            <Link to={"all"}>
              <button onClick={() => setCat("All")}>All</button>
            </Link>
            <Link to={"furniture"}>
              <button onClick={() => setCat("furniture")}>Furniture</button>
            </Link>
            <Link to={"skin-care"}>
              <button onClick={() => setCat("skin care")}>Skin Care</button>
            </Link>
            <Link to={"kitchen"}>
              <button onClick={() => setCat("kitchen")}>Kitchen</button>
            </Link>
            <Link to={"chairs"}>
              <button onClick={() => setCat("chairs")}>Chairs</button>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="all" element={<div>{displayProducts("all")}</div>} />
          <Route
            path="furniture"
            element={<div>{displayProducts("furniture")}</div>}
          />
          <Route
            path="skin-care"
            element={<div>{displayProducts("skin care")}</div>}
          />
          <Route
            path="kitchen"
            element={<div>{displayProducts("kitchen")}</div>}
          />
          <Route
            path="chairs"
            element={<div>{displayProducts("chairs")}</div>}
          />
        </Routes>
      </div>
    </div>
  );
}
