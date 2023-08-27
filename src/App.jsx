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

  const [category, setCategory] = React.useState("ALL");

  const [cartCount, setCount] = React.useState(0);

  const [cartItems, setCartItems] = React.useState({});

  React.useEffect(() => {
    setCount(Object.keys(cartItems).length);
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
      <NavBar cartCount={cartCount} />
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
          element={<Categories cat={category} setCat={setCategory} />}
        />
        <Route
          path="/product/:id"
          element={
            <Product setCartItems={setCartItems} cartItems={cartItems} />
          }
        />
      </Routes>
      <FooterPage />
    </div>
  );
}
