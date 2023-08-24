import { Route, Router } from "react-router-dom";
import Trending from "../homePage/components/Trending" 
import React from "react";
import { useParams } from "react-router-dom";


export default function Product() {

  const {id} = useParams()

  console.log(id)

   return (
     <div id="product-page">
       <div className="product-wrapper">
       
       </div>
       <Trending />
     </div>
   );
}