import { Link } from "react-router-dom";
import { displayProducts } from "../../scripts/displayProudcts";

export default function Categories(category = "none") {

   return (
     <div id="categories-page">
       <div className="wrapper categories-wrapper">
         <div className="categories-des">
           <Link to="/">Home</Link>
           <h2>All</h2>
           <div className="categories-btns">
             <button>Furniture</button>
             <button>Skin care</button>
             <button>Kitchen</button>
             <button>Lamps</button>
           </div>
         </div>
         {displayProducts(category)}
       </div>
     </div>
   );
}