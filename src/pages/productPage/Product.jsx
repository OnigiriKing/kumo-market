import { Route, Router } from "react-router-dom";
import Trending from "../homePage/components/Trending" 
import React from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";


export default function Product() {

  const {id} = useParams()


   return (
     <div id="product-page">
       <div className="product-wrapper">
       <ProductInfo id={id} />
       </div>
       <Trending />
     </div>
   );
}