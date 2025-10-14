import { useEffect, lazy, Suspense } from "react";
import "./dist/style.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/homePage/HomePage";
import NavPage from "pages/navPage/navPage";
import FooterPage from "pages/footerPage/FooterPage";
import Overlay from "pages/overlay/Overlay";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "features/reducers/cartCountSlice";

export default function App() {
  // state
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItems);

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save state to local storage:", e);
    }
  }, [cartItems]);

  useEffect(() => {
    dispatch(setCount({ items: cartItems }));
  }, [cartItems, dispatch]);

  const html = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [html]);

  // React lazy

  const CategoriesPage = lazy(() =>
    import("pages/categoriesPage/CategoriesPage")
  );

  const ProductPage = lazy(() => import("pages/productPage/ProductPage"));

  return (
    <div className="app">
      <Overlay />
      <NavPage />
      <Suspense
        fallback={
          <h3
            style={{
              textAlign: "center",
              padding: "4rem",
              marginTop: "5rem",
            }}
          >
            Loading...
          </h3>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/*" element={<CategoriesPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Suspense>
      <FooterPage />
    </div>
  );
}
