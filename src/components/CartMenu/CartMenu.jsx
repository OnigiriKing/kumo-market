import { allSvg } from "svg/allSvg";
import { handleCartClick } from "common/utils/changeClass";
import React from "react";
import emptyCart from "img/navBar/emptyCart.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeSubtotal } from "features/reducers/subtotalSlice";
import {
  deleteFromCart,
  changeItemAmount,
} from "features/reducers/cartItemsSlice";

export default function CartMenu() {
  const { t } = useTranslation();

  // state
  const dispatch = useDispatch();
  const subtotal = useSelector((state) => state.subtotal);
  const cartCount = useSelector((store) => store.cartCount);
  const cartItems = useSelector((state) => state.cartItems);

  // updates subtotal
  React.useEffect(() => {
    dispatch(changeSubtotal({ items: cartItems }));
  }, [cartItems, dispatch]);

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
                  dispatch(changeItemAmount({ type: "minus", key: key }))
                }
              >
                -
              </button>
              <h2>{el.amount}</h2>
              <button
                onClick={() =>
                  dispatch(changeItemAmount({ type: "plus", key: key }))
                }
              >
                +
              </button>
            </div>
            <div
              className="cart-delete-btn"
              onClick={() => dispatch(deleteFromCart({ key: key }))}
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
          <h3>
            {t("YOURCART")}({cartCount})
          </h3>
          <div className="cart-close-button" onClick={() => handleCartClick()}>
            {allSvg(30).closeBtn}
          </div>
        </div>
        {cartCount < 1 && (
          <div className="cart-no-items">
            <img src={emptyCart} alt="empty"></img>
            <h2>{t("CARTEMPTY")}</h2>
            <button className="no-items-btn" onClick={() => handleCartClick()}>
              {t("BROWSING")}
            </button>
          </div>
        )}
        {cartCount >= 1 && (
          <div className="cart-menu-container">
            <div className="cart-menu-products">
              {cartCount < 1 && <div>{t("NOITEMS")}</div>}
              {allProducts}
            </div>
            <div className="cart-menu-checkout">
              <div>
                <h3>{t("SUBTOTAL")}</h3>
                <h3>{subtotal}$</h3>
              </div>
              <button className="checkout-btn">{t("CHECKOUT")}</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
