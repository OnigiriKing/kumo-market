import { Link } from "react-router-dom";
import { displayProducts } from "../../scripts/displayProudcts";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { allSvg } from "../../svg/allSvg";
import { useParams } from "react-router-dom";

export default function Categories({ cat, setCat }) {
  const pages = {
    all: {
      link: "all",
      state: "All",
    },
    furniture: {
      link: "furniture",
      state: "Furniture",
    },
    skinCare: {
      link: "skin-care",
      state: "Skin Care",
    },
    kitchen: {
      link: "kitchen",
      state: "Kitchen",
    },
    chairs: {
      link: "chairs",
      state: "Chairs",
    },
  };

  return (
    <div id="categories-page">
      <div className="wrapper categories-wrapper">
        <div className="categories-des">
          <div className="categories-nav">
            <Link to="/">{allSvg(15).arrowLeft}Home</Link>
            <h2>{cat.toUpperCase()}</h2>
          </div>
          <div className="categories-btns">
            {Object.keys(pages).map((key) => {
              const el = pages[key];
              console.log(el.link);
              return (
                <Link to={el.link}>
                  <button onClick={() => setCat(el.state)}>{el.state}</button>
                </Link>
              );
            })}
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
