import { allSvg } from "../../../svg/allSvg";
import { closeCart } from "../../../scripts/changeClass";
import React from "react";
import emptyCart from "../../../img/emptyCart.png"

export default function CartMenu({ cartItems, setCartItems, cartCount }) {
  const [subtotal, setSubtotal] = React.useState(0);

  // updates subtotal
  React.useEffect(() => {
    let result = 0;
    Object.keys(cartItems).map((key) => {
      const el = cartItems[key];
      return (result += el.price * el.amount);
    });
    setSubtotal(result);
  }, [cartItems]);

  // function to delete product
  function deleteObject(key) {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[key];
    setCartItems(updatedCartItems);
  }

  // To change amount of product
  function changeAmount(type, key) {
    const baseObject = { ...cartItems };
    if (type === "plus") {
      if (baseObject[key].amount < 10) {
        baseObject[key].amount++;
      }
    }
    if (type === "minus") {
      if (baseObject[key].amount > 1) {
        baseObject[key].amount--;
      }
    }
    setCartItems(baseObject);
  }

  // creates a product from state
  const allProducts = Object.keys(cartItems).map((key) => {
    const el = cartItems[key];
    return (
      <div className="cart-product" key={key}>
        <div className="cart-product-img">
          <img src={el.img} alt={key}/>
        </div>
        <div className=" cart-product-des">
          <div className="cart-product-price">
            <p>{el.name}</p>
            <h3>{el.price * el.amount}$</h3>
          </div>
          <div className="cart-product-quantity">
            <div className="cart-product-btns">
              <button onClick={() => changeAmount("minus", key)}>-</button>
              <h2>{el.amount}</h2>
              <button onClick={() => changeAmount("plus", key)}>+</button>
            </div>
            <div className="cart-delete-btn" onClick={() => deleteObject(key)}>
              {allSvg(25).closeBtn}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="full-overlay" {...closeCart()} />
      <div className="cart-menu">
        <div className="cart-menu-des">
          <h3>Your Shopping Cart ({cartCount})</h3>
          <div className="cart-close-button" {...closeCart()}>
            {allSvg(30).closeBtn}
          </div>
        </div>
        {cartCount < 1 && (
          <div className="cart-no-items">
            <img src={emptyCart} alt={key}></img>
            <h2>Your cart is empty</h2>
            <button className="no-items-btn" {...closeCart()}>
              Keep Browsing
            </button>
          </div>
        )}
        {cartCount >= 1 && (
          <div className="cart-menu-container">
            <div className="cart-menu-products">
              {cartCount < 1 && <div>You have no items</div>}
              {allProducts}
            </div>
            <div className="cart-menu-checkout">
              <div>
                <h3>Subtotal</h3>
                <h3>{subtotal}$</h3>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
