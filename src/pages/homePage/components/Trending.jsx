import { Link } from "react-router-dom";
import { DisplayProducts } from "../../../scripts/DisplayProudcts";
import { allSvg } from "../../../svg/allSvg";

export default function Trending() {

  function scroll(direction) {
    if (direction == "right") {
      document.querySelector(".trending-items").scrollBy(225, 0);
    } else {
      document.querySelector(".trending-items").scrollBy(-225, 0);
    }
  }

   return (
     <div id="trending-screen">
       <div className="wrapper trending-wrapper">
         <div className="trending-nav">
           <h2>Popilar Picks</h2>
           <div className="trending-btns">
             <button onClick={() => scroll("left")}>{allSvg(20).arrowSides}</button>
             <button onClick={() => scroll("right")}>{allSvg(20).arrowSides}</button>
           </div>
         </div>
         <DisplayProducts newClass="trending-items" />
       </div>
     </div>
   );
}