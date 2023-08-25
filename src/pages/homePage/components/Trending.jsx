import { Link } from "react-router-dom";
import { DisplayProducts } from "../../../scripts/DisplayProudcts";

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
         <DisplayProducts newClass="trending-items" />
       </div>
     </div>
   );
}