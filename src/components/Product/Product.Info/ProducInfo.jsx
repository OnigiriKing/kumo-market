import productList from "common/utils/products";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "features/actions";

export default function ProductInfo({ id, setCartItems, cartItems }) {
  const { t } = useTranslation();
  const product = productList[`product${id}`];


  React.useEffect(() => {
    dispatch(actions.changeImage(product.img));
  }, [id, product.img]);

  function addItem() {
    const item = `product${id}`;
    if (cartItems.hasOwnProperty(item) && cartItems[item].amount <= 10) {
      const baseObject = { ...cartItems };
      if (baseObject[item].amount + amount > 10) {
        baseObject[item].amount = 10;
      } else {
        baseObject[item].amount = baseObject[item].amount + amount;
      }
      setCartItems(baseObject);
    } else {
      setCartItems({
        ...cartItems,
        [`product${id}`]: {
          img: product.img,
          name: product.name,
          price: product.price,
          amount: amount,
        },
      });
    }
  }

  // state
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);

  const imgType = useSelector((state) => state.imgType);

  const amount = useSelector((state) => state.amount);



  return (
    <div className="product-info-screen">
      <div className="wrapper product-info-wrapper">
        <div className="product-info-all">
          <div className="product-info-images">
            <img src={imgType} alt={product.name} />
            <div className="product-info-img-list">
              <img
                src={product.img}
                alt={product.name}
                onMouseEnter={() => dispatch(actions.changeImage(product.img))}
              />
              <img
                src={product.addImg[0]}
                alt={product.name}
                onMouseEnter={() =>
                  dispatch(actions.changeImage(product.addImg[0]))
                }
              />
              <img
                src={product.addImg[1]}
                alt={product.name}
                onMouseEnter={() =>
                  dispatch(actions.changeImage(product.addImg[1]))
                }
              />
            </div>
          </div>
          <div className="product-info-des">
            <h1 className="product-info-name">{product.name}</h1>
            <p>{product.des}</p>
            <div className="product-info-price">
              <h1>{t("QUANTITY")}</h1>
              <div className="product-info-btns">
                <button
                  onClick={() => {
                    dispatch(actions.changeAmount("sub"));
                  }}
                >
                  <h2>-</h2>
                </button>
                <h1>{amount}</h1>
                <button
                  onClick={() => {
                    dispatch(actions.changeAmount("add"));
                  }}
                >
                  <h2>+</h2>
                </button>
              </div>
              <h1>${product.price * amount}</h1>
            </div>
            <div className="product-info-cart">
              <button onClick={() => addItem()}>{t("ADDCART")}</button>
              <button
              >
                {t("BUYNOW")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
