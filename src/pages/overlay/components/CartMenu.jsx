
import { allSvg } from "../../../svg/allSvg";
import products from "../../../data/products"
import { closeCart } from "../../../scripts/changeClass";




export default function CartMenu({ cartItems, setCartItems }) {


  const allProducts = (
    Object.keys(cartItems).map((key)=> {

      function deleteObject(key) {
        const updatedCartItems = { ...cartItems };
        delete updatedCartItems[key];
        setCartItems(updatedCartItems);
      }
      const el = cartItems[key];
      return (
        <div className="cart-product" key={key}>
          <div className="cart-product-img">
            <img src={el.img} />
          </div>
          <div className="cart-product-des">
            <div className="cart-product-price">
              <p>{el.name}</p>
              <h3>{el.price * el.amount}$</h3>
            </div>
            <div className="cart-product-quantity">
              <div className="cart-product-btns">
                <button>-</button>
                <h2>{el.amount}</h2>
                <button>+</button>
              </div>
              <div
                className="cart-delete-btn"
                onClick={() => deleteObject(key)}
              >
                {allSvg(25).closeBtn}
              </div>
            </div>
          </div>
        </div>
      );
    })

  );

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
          {allProducts}
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
