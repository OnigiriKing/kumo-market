import { Link } from "react-router-dom";
import productList from "../data/products";


export function displayProducts(
  type = "all",
  newClass = "product-wrapper",
  number = "all"
) {
  return (
    <div className={`${newClass}`}>
      {Object.keys(productList).map((key) => {
        const el = productList[key];

        if (type !== "all" && el.type === type) {
          return (
            <Link to={el.Link} key={key} className="product">
              <img src={el.img} alt="product" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        } if (type === "all") {
          return (
            <Link to={el.Link} key={key} className="product">
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
