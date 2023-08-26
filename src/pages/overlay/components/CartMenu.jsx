import { Link } from "react-router-dom";
import { allSvg } from "../../../svg/allSvg";
import { changeClass } from "../../../scripts/changeClass";
import products from "../../../data/products"


export default function DropMenu() {
  function closeMenu() {
    return {
      onClick: function () {
        changeClass(".cart-menu", "cart-open");
      },
    };
  }

  const el = products.product1

  return (
    <>
      <div className="full-overlay overlay-active" {...closeMenu()} />
      <div className="cart-menu cart-open">
        <div className="cart-menu-des">
          <h3>Your Shopping Cart (8)</h3>
          <div className="cart-close-button" {...closeMenu()}>
            {allSvg(30).closeBtn}
          </div>
        </div>
        <div className="cart-menu-container">
          <div className="cart-menu-products">
            <div className="cart-product">
              <img src={el.img}/>
              <div className="cart-product-des">
                <div className="cart-product-price">
                  <p>Description</p>
                  <h3>34$</h3>
                </div>
                <div className="cart-product-quantity">
                  <div className="cart-product-btns">
                    <button>-</button>
                    <h2>1</h2>
                    <button>+</button>
                  </div>
                  {allSvg(25).closeBtn}
                </div>
              </div>
            </div>
          </div>
          <div className="cart-menu-checkout">
            <div>
              <h3>Subtotal</h3>
              <h3>720$</h3>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
