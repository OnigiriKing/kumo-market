import { Link } from "react-router-dom";
import productList from "common/utils/products";
import { useMemo } from "react";

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

  function fisherYates(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const products = useMemo(() => {
    let arr = Object.values(productList);
    if (type !== "all") {
      arr = arr.filter((p)=> p.type === type)
    }

    if (shuffle) {
      arr = fisherYates([...arr])
    }

    return arr.slice(0, limit)
  }, [type, limit, shuffle]);


  return (
    <div className={`${newClass}`}>
      {products.map((el) => {
        if (type !== "all" && el.type === type && number < limit) {
          number++;
          return (
            <Link to={el.link} key={el.name} className="product">
              <img src={el.img} alt={el.name} loading="lazy" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        }
        if (type === "all" && number < limit) {
          number++;
          return (
            <Link to={el.link} key={el.name} className="product">
              <img src={el.img} alt={el.name} loading="lazy" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}
