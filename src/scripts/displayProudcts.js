import { Link } from "react-router-dom";
import testImg from "../img/test.png";

const productList = {
  product1: {
    name: "test",
    price: 45,
    img: testImg,
    type: "skin care",
  },
  product2: {
    name: "test2",
    price: 60,
    img: testImg,
    type: "skin care",
  },
  product3: {
    name: "test2",
    price: 50,
    img: testImg,
    type: "skin care",
  },
  product4: {
    name: "test2",
    price: 30,
    img: testImg,
    type: "Lamps",
  },
  product5: {
    name: "test2",
    price: 80,
    img: testImg,
    type: "lamps",
  },
  product6: {
    name: "test2",
    price: 15,
    img: testImg,
    type: "lamps",
  },
  product7: {
    name: "test2",
    price: 15,
    img: testImg,
    type: "lamps",
  },
  product8: {
    name: "test2",
    price: 15,
    img: testImg,
    type: "lamps",
  },
};

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
            <Link to="/" key={key} className="product">
              <img src={el.img} alt="product" />
              <p>{el.name}</p>
              <h3>${el.price}</h3>
            </Link>
          );
        } if (type === "all") {
          return (
            <Link to="/" key={key} className="product">
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
