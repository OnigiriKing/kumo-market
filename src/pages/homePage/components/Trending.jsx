import { Link } from "react-router-dom";
import testImg from "../../../img/test.png";
import { displayProducts } from "../../../scripts/displayProudcts";

export default function Trending() {

   return (
     <div id="trending-screen">
       <div className="wrapper trending-wrapper">
         <div className="trending-nav">
           <h2>Popilar Picks</h2>
           <div>
             <button>Button</button>
             <button>Button</button>
           </div>
         </div>
         {displayProducts(undefined, "trending-items")}
       </div>
     </div>
   );
}