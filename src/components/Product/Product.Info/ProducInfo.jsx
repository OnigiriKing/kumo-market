import productList from "common/utils/products";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProductInfo({ id, setCartItems, cartItems }) {

   const { t } = useTranslation();
  const product = productList[`product${id}`];

  const [amount, setAmount] = React.useState(1);

  const [imgType, changeType] = React.useState("");

  function changeAmount(type) {
    return type === "add" && amount < 10
      ? setAmount(amount + 1)
      : type === "sub" && amount > 1
      ? setAmount(amount - 1)
      : "";
  }

  React.useEffect(() => {
    changeType(product.img);
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
                onMouseEnter={() => changeType(product.img)}
              />
              <img
                src={product.addImg[0]}
                alt={product.name}
                onMouseEnter={() => changeType(product.addImg[0])}
              />
              <img
                src={product.addImg[1]}
                alt={product.name}
                onMouseEnter={() => changeType(product.addImg[1])}
              />
            </div>
          </div>
          <div className="product-info-des">
            <h1 className="product-info-name">{product.name}</h1>
            <p>{product.des}</p>
            <div className="product-info-price">
              <h1>{t("QUANTITY")}</h1>
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
              <button onClick={() => addItem()}>{t("ADDCART")}</button>
              <button>{t("BUYNOW")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
