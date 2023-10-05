import { allSvg } from "svg/allSvg";
import { handleCartClick } from "common/utils/changeClass";
import React from "react";
import emptyCart from "img/navBar/emptyCart.png";
import changeAmount from "components/CartMenu/CartMenu.changeAmount.js";
import deleteObject from "components/CartMenu/CartMenu.deleteObject.js";


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

  // creates a product from state
  const allProducts = Object.keys(cartItems).map((key) => {
    const el = cartItems[key];
    return (
      <div className="cart-product" key={key}>
        <div className="cart-product-img">
          <img src={el.img} alt="cart" />
        </div>
        <div className=" cart-product-des">
          <div className="cart-product-price">
            <p>{el.name}</p>
            <h3>{el.price * el.amount}$</h3>
          </div>
          <div className="cart-product-quantity">
            <div className="cart-product-btns">
              <button
                onClick={() =>
                  changeAmount("minus", key, cartItems, setCartItems)
                }
              >
                -
              </button>
              <h2>{el.amount}</h2>
              <button
                onClick={() =>
                  changeAmount("plus", key, cartItems, setCartItems)
                }
              >
                +
              </button>
            </div>
            <div
              className="cart-delete-btn"
              onClick={() => deleteObject(key, cartItems, setCartItems)}
            >
              {allSvg(25).closeBtn}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="full-overlay" onClick={() => handleCartClick()} />
      <div className="cart-menu">
        <div className="cart-menu-des">
          <h3>Your Shopping Cart ({cartCount})</h3>
          <div className="cart-close-button" onClick={() => handleCartClick()}>
            {allSvg(30).closeBtn}
          </div>
        </div>
        {cartCount < 1 && (
          <div className="cart-no-items">
            <img src={emptyCart} alt="empty"></img>
            <h2>Your cart is empty</h2>
            <button className="no-items-btn" onClick={() => handleCartClick()}>
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
