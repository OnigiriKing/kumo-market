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
import { setCount } from "features/reducers/cartCountSlice";

export default function App() {

  // state
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItems);


    React.useEffect(() => {
      try {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      } catch (e) {
        console.error("Failed to save state to local storage:", e);
      }
    }, [cartItems]);

  React.useEffect(() => {
    dispatch(setCount({items: cartItems}));
  }, [cartItems, dispatch]);

  const html = useLocation().pathname;

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [html]);


  return (
    <div className="app">
      <Overlay />
      <NavPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/*" element={<CategoriesPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
