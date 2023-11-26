import { Link } from "react-router-dom";
import { DisplayProducts } from "common/utils/DisplayProudcts";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { allSvg } from "svg/allSvg.jsx";
import { useTranslation } from "react-i18next";

export default function Categories({ cat, setCat }) {
  const { t } = useTranslation();
  const links = {
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
      state: "SkinCare",
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
            <Link to="/">
              {allSvg(15).arrowLeft}
              {t("HOME")}
            </Link>
            <h2>{t(cat.toUpperCase())}</h2>
          </div>
          <div className="categories-btns">
            {Object.keys(links).map((key) => {
              const el = links[key];
              return (
                <Link to={el.link}>
                  <button onClick={() => setCat(el.state)}>{el.state}</button>
                </Link>
              );
            })}
          </div>
        </div>
        <Routes>
          <Route
            path="all"
            element={
              <div>
                <DisplayProducts type="all" />
              </div>
            }
          />
          <Route
            path="furniture"
            element={
              <div>
                <DisplayProducts type="furniture" />
              </div>
            }
          />
          <Route
            path="skin-care"
            element={
              <div>
                <DisplayProducts type="skin care" />
              </div>
            }
          />
          <Route
            path="kitchen"
            element={
              <div>
                <DisplayProducts type="kitchen" />
              </div>
            }
          />
          <Route
            path="chairs"
            element={
              <div>
                <DisplayProducts type="chairs" />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
