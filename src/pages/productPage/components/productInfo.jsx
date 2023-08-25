import productList from "../../../data/products";
import React from "react";

export default function ProductInfo({id = "1"}) {

  const product = productList[`product${id}`];

    const [amount, setAmount] = React.useState(1)

    const [imgType, changeType] = React.useState(product.img);

    function changeAmount(type) {
      return type=="add"&& amount<10?setAmount(amount+1):type=="sub"&& amount>1?setAmount(amount-1):""
    }






   return (
     <div className="product-info-screen">
       <div className="wrapper product-info-wrapper">
         <div className="product-info-all">
           <div className="product-info-images">
             <img src={imgType} />
             <div className="product-info-img-list">
               <img
                 src={product.img}
                 onMouseEnter={() => changeType(product.img)}
               />
               <img
                 src={product.addImg[0]}
                 onMouseEnter={() => changeType(product.addImg[0])}
               />
               <img
                 src={product.addImg[1]}
                 onMouseEnter={() => changeType(product.addImg[1])}
               />
             </div>
           </div>
           <div className="product-info-des">
             <h1 className="product-info-name">{product.name}</h1>
             <p>{product.des}</p>
             <div className="product-info-price">
               <h1>Quantity</h1>
               <div className="product-info-btns">
                 <button onClick={() => changeAmount("sub")}>
                   <h2>-</h2>
                 </button>
                 <h1>{amount}</h1>
                 <button onClick={() => changeAmount("add")}>
                   <h2>+</h2>
                 </button>
               </div>
               <h1>${product.price * amount}</h1>
             </div>
             <div className="product-info-cart">
               <button>Add to cart</button>
               <button>Buy now</button>
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