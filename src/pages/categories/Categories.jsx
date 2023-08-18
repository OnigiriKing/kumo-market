import { displayProducts } from "../homePage/components/Products";

export default function Categories() {

   return (
     <div id="categories-page">
       <div className="categories-wrapper">
         <div>
           <button>All</button>
           <button>Furniture</button>
           <button>Skin care</button>
           <button>Kitchen</button>
           <button>Lamps</button>
         </div>
         <div>{displayProducts()}</div>
       </div>
     </div>
   );
}