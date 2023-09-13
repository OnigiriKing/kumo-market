import Start from "./HomeComp.Start/Start";
import Products from "./HomeComp.Products/Products";
import Trending from "./HomeComp.Trending/Trending";
import Banner from "./HomeComp.Banner/Banner";
import React from "react";

export default function HomeComp({ cat, setCat }) {

  return (
    <div id="home-page">
      <Start cat={cat} setCat={setCat} />
      <Products />
      <Banner />
      <Trending />
      <Banner reverse={true} />
    </div>
  );
}
