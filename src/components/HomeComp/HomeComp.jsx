import Start from "./HomeComp.Start/Start";
import Products from "./HomeComp.Products/Products";
import Trending from "./HomeComp.Trending/Trending";
import Banner from "./HomeComp.Banner/Banner";
import React from "react";


export default function HomeComp() {

  return (
    <div id="home-page">
      <Start/>
      <Products />
      <Banner />
      <Trending />
      <Banner reverse={true} />
    </div>
  );
}
