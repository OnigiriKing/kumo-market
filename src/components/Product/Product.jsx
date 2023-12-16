import Trending from "components/HomeComp/HomeComp.Trending/Trending.jsx";
import React from "react";
import ProductInfo from "./Product.Info/ProducInfo";

export default function Product() {

  return (
    <div id="product-page">
      <div className="product-element">
        <ProductInfo
        />
      </div>
      <Trending />
    </div>
  );
}
