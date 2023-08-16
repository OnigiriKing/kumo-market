import { Link } from "react-router-dom";

export default function Products() {

   return (
     <div className="products-screen">
       <div className="products-wrapper">
         <h2>Products we are proud of</h2>
         <div>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
           <Link to="/">Product</Link>
         </div>
       </div>
     </div>
   );
}