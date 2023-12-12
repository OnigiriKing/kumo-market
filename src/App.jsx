import React from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import NavPage from "pages/navPage/navPage";
import HomePage from "pages/homePage/HomePage";
import FooterPage from "pages/footerPage/FooterPage";
import CategoriesPage from "pages/categoriesPage/CategoriesPage";
import ProductPage from "pages/productPage/ProductPage";
import Overlay from "pages/overlay/Overlay";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "features/actions";

export default function App() {
  const local = window.localStorage;

  // state
  const dispatch = useDispatch()
  const cartCount = useSelector((store)=>store.cartCount)

  const [category, setCategory] = React.useState("ALL");


  const [cartItems, setCartItems] = React.useState(
    JSON.parse(localStorage.getItem("cartItems")) || {}
  );

  React.useEffect(() => {
    local.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartCount, cartItems, local]);

  React.useEffect(() => {
    dispatch(actions.setCount(cartItems));
  }, [cartItems]);

  const html = useLocation().pathname;

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [html]);

  return (
    <div className="app">
      <Overlay
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartCount={cartCount}
      />
      <NavPage cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cat={category}
              setCat={setCategory}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/categories/*"
          element={<CategoriesPage cat={category} setCat={setCategory} />}
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage setCartItems={setCartItems} cartItems={cartItems} />
          }
        />
      </Routes>
      <FooterPage />
    </div>
  );
}
