import { Link } from "react-router-dom";
import productList from "../data/products";
import React from "react";



export function DisplayProducts({
  type = "all",
  newClass = "product-wrapper",
  number = Object.keys(productList).length,
}) {
  let limit = 0;

  return (
    <div className={`${newClass}`}>
      {Object.keys(productList).map((key) => {
        const el = productList[key];

        if (type !== "all" && el.type === type && limit < number) {
          limit++;
          return (
            <Link to={el.link} key={key} className="product">
              <img src={el.img} alt="product" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        }
        if (type === "all" && limit < number) {
          limit++;
          return (
            <Link to={el.link} key={key} className="product">
              <img src={el.img} alt="product" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        }
      })}
    </div>
  );
}
