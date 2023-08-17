import { Link } from "react-router-dom";
import testImg from "../../../img/test.png"

export default function Start() {

   return (
     <div id="start-screen">
       <div className="start-wrapper">
         <div className="start-products">
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img src={testImg}></img>
               <p>Product</p>
             </Link>
           </div>

           
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img src={testImg}></img>
               <p>Product</p>
             </Link>
           </div>
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img src={testImg}></img>
               <p>Product</p>
             </Link>
           </div>
           <div>
             <Link to="/">
               <div className="start-img-cover"></div>
               <img src={testImg}></img>
               <p>Product</p>
             </Link>
           </div>



         </div>
       </div>
     </div>
   );
}