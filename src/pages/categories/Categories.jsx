import { Link } from "react-router-dom";
import { displayProducts } from "../homePage/components/Products";

export default function Categories() {

   return (
     <div id="categories-page">
       <div className="categories-wrapper">
         <div>
           <Link to="/">Home</Link>
           <h2>All</h2>
           <div>
             <button>Furniture</button>
             <button>Skin care</button>
             <button>Kitchen</button>
             <button>Lamps</button>
           </div>
         </div>
         <div className="categories-products">{displayProducts()}</div>
       </div>
     </div>
   );
}