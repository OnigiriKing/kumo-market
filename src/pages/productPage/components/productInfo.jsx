import productList from "../../../data/products";

export default function ProductInfo({id = "1"}) {


    const product = productList[`product${id}`];

   return (
     <div className="product-info-screen">
       <div className="product-info-wrapper">
         <div className="product-info-all">
           <div className="product-info-images">
             <img src={product.img} />
             <div className="product-info-img-list">
               <img src={product.img} />
               <img src={product.img} />
             </div>
           </div>
           <div className="product-info-des">
             <h1>{product.name}</h1>
             <p>{product.des}</p>
             <div>
               <h1>Quantiti</h1>
               <div></div>
               <h1>{product.price}</h1>
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