import Start from "../../components/HomeComp/HomeComp.Start/Start";
import Products from "../../components/HomeComp/HomeComp.Products/Products";
import Trending from "../../components/HomeComp/HomeComp.Trending/Trending";
import Banner from "../../components/HomeComp/HomeComp.Banner/Banner";
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
