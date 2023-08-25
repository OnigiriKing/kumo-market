import { Link } from "react-router-dom";
import { DisplayProducts } from "../../../scripts/DisplayProudcts";
import { allSvg } from "../../../svg/allSvg";

export default function Trending() {

   return (
     <div id="trending-screen">
       <div className="wrapper trending-wrapper">
         <div className="trending-nav">
           <h2>Popilar Picks</h2>
           <div className="trending-btns">
             <button>{allSvg(20).arrowSides}</button>
             <button>{allSvg(20).arrowSides}</button>
           </div>
         </div>
         <DisplayProducts newClass="trending-items" />
       </div>
     </div>
   );
}