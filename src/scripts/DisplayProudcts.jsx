import { Link } from "react-router-dom";
import productList from "../data/products";

// type is for the type of product
// newClass is for the additional class for the component to regulate css
// limit is for the limit of the products

export function DisplayProducts({
  type = "all",
  newClass = "product-wrapper",
  limit = Object.keys(productList).length,
  shuffle = false,
}) {
  let number = 0;

  const list = shuffle
    ? Object.keys(productList).sort(() => Math.random() - 0.5)
    : Object.keys(productList);

  return (
    <div className={`${newClass}`}>
      {list.map((key) => {
        const el = productList[key];

        if (type !== "all" && el.type === type && number < limit) {
          number++;
          return (
            <Link to={el.link} key={key} className="product">
              <img src={el.img} alt="product" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        }
        if (type === "all" && number < limit) {
          number++;
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
