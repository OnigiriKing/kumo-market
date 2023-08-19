import { Link } from "react-router-dom";
import { displayProducts } from "../../scripts/displayProudcts";
import Categorie from "./components/Categorie";
import { Route, Routes } from "react-router-dom";

export default function Categories() {

   return (
     <div id="categories-page">
       <div className="wrapper categories-wrapper">
         <div className="categories-des">
           <Link to="/">Home</Link>
           <h2>All</h2>
           <div className="categories-btns">
             <Link to={"all"}>
               <button>All</button>
             </Link>
             <Link to={"furniture"}>
               <button>Furniture</button>
             </Link>
             <Link to={"skin-care"}>
               <button>Skin care</button>
             </Link>
             <Link to={"kitchen"}>
               <button>Kitchen</button>
             </Link>
             <Link to={"lamps"}>
               <button>Lamps</button>
             </Link>
           </div>
         </div>
         <Routes>
           <Route path="/all" element={<Categorie />} />
           <Route path="/skin-care" element={<Categorie type="skinCare"/>} />
           <Route path="/lamps" element={<Categorie type="lamps"/>} />
         </Routes>
       </div>
     </div>
   );
}

