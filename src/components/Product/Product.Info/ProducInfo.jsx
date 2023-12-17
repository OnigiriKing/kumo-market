import productList from "common/utils/products";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "features/actions";
import { useParams } from "react-router-dom";
import { changeAmount } from "features/reducers/itemAmountSlice";

export default function ProductInfo() {

  const { id } = useParams();
  const { t } = useTranslation();
  const product = productList[`product${id}`];

  // state
  const dispatch = useDispatch();
  const imgType = useSelector((state) => state.imgType);
  const amount = useSelector((state) => state.itemAmount);

  React.useEffect(() => {
    dispatch(actions.changeImage(product.img));
  }, [id, product.img, dispatch]);


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
                    dispatch(changeAmount({type:"sub"}));
                  }}
                >
                  <h2>-</h2>
                </button>
                <h1>{amount}</h1>
                <button
                  onClick={() => {
                    dispatch(changeAmount({ type: "add" }));
                  }}
                >
                  <h2>+</h2>
                </button>
              </div>
              <h1>${product.price * amount}</h1>
            </div>
            <div className="product-info-cart">
              <button
                onClick={() => {
                  dispatch(actions.addInCart(id, product, amount));
                }}
              >
                {t("ADDCART")}
              </button>
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
