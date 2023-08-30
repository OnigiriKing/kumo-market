import Trending from "../homePage/components/Trending";
import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./components/ProducComt";

export default function Product({ setCartItems, cartItems }) {
  const { id } = useParams();

  return (
    <div id="product-page">
      <div className="product-element">
        <ProductInfo
          id={id}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      </div>
      <Trending />
    </div>
  );
}
