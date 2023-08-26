
import { allSvg } from "../../../svg/allSvg";
import products from "../../../data/products"
import { closeCart } from "../../../scripts/changeClass";




export default function DropMenu() {

  const el = products.product1

  const testEl = (<div className="cart-product">
            <div className="cart-product-img">
              <img src={el.img} />
            </div>
              <div className="cart-product-des">
                <div className="cart-product-price">
                  <p>{el.name}</p>
                  <h3>34$</h3>
                </div>
                <div className="cart-product-quantity">
                  <div className="cart-product-btns">
                    <button>-</button>
                    <h2>1</h2>
                    <button>+</button>
                  </div>
                  <div className="cart-delete-btn">{allSvg(25).closeBtn}</div>
                </div>
              </div>
            </div>);

  return (
    <>
      <div className="full-overlay" {...closeCart()} />
      <div className="cart-menu">
        <div className="cart-menu-des">
          <h3>Your Shopping Cart (8)</h3>
          <div className="cart-close-button" {...closeCart()}>
            {allSvg(30).closeBtn}
          </div>
        </div>
        <div className="cart-menu-container">
          <div className="cart-menu-products">
          {testEl}
          {testEl}
          {testEl}
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
