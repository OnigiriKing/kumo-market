import productList from "../../../data/products";

export default function ProductInfo({id}) {

   return (
     <div className="product-info-screen">
       <div className="product-info-wrapper">
         <div className="product-info-all">
           <div className="product-info-images">
             <img></img>
             <div className="product-info-img-list">
               <img></img>
               <img></img>
             </div>
           </div>
           <div className="product-info-des">
             <h1></h1>
             <p></p>
             <div>
               <h1></h1>
               <div></div>
               <h1></h1>
             </div>
             <div>
               <button></button>
               <button></button>
             </div>
           </div>
         </div>
         <div className="product-info-add">
            <div></div>
            <div></div>
            <div></div>
         </div>
       </div>
     </div>
   );
}