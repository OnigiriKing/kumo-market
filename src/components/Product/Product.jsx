import Trending from "components/HomeComp/HomeComp.Trending/Trending.jsx";
import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./Product.Info/ProducInfo";

export default function Product() {

  // ! see if this can be moved to ProductInfo
  const { id } = useParams();

  return (
    <div id="product-page">
      <div className="product-element">
        <ProductInfo
          id={id}
        />
      </div>
      <Trending />
    </div>
  );
}
