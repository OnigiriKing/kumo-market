import Start from "./components/Start"
import Products from "./components/Products";
import Trending from "./components/Trending"
import Banner from "./components/Banner"
import React from "react";



export default function HomePage({ cat, setCat }) {




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