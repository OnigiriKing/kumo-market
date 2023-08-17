import { Link } from "react-router-dom";
import testImg from "../../../img/test.png";

export default function Trending() {

   return (
     <div id="trending-screen">
       <div className="trending-wrapper">
         <div className="trending-nav">
           <h2>Popilar Picks</h2>
           <div>
             <button>Button</button>
             <button>Button</button>
           </div>
         </div>
         <div className=" trending-items">
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
           <div>
             <Link to="/">
               <img src={testImg} alt="product" />
               <p>Name</p>
               <h3>Price</h3>
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
}