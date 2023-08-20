import { Link } from "react-router-dom";

export default function Start() {

   return (
     <div id="start-screen">
       <div className="start-wrapper">
         <div className="start-products wrapper">
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img></img>
               <p>Product</p>
             </Link>
           </div>

           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img></img>
               <p>Product</p>
             </Link>
           </div>
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img ></img>
               <p>Product</p>
             </Link>
           </div>
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img ></img>
               <p>Product</p>
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
}