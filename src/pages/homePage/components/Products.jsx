import { Link } from "react-router-dom";
import testImg from "../../../img/test.png";

export function displayProducts(caregory = "none", newClass = "product-wrapper") {
  const productList = {
    product1: {
      name: "test",
      price: 45,
      img: testImg,
      category: "skinCare",
    },
    product2: {
      name: "test2",
      price: 60,
      img: testImg,
      category: "skinCare",
    },
    product3: {
      name: "test2",
      price: 50,
      img: testImg,
      category: "skinCare",
    },
    product4: {
      name: "test2",
      price: 30,
      img: testImg,
      category: "Lamps",
    },
    product5: {
      name: "test2",
      price: 80,
      img: testImg,
      category: "Lamps",
    },
    product6: {
      name: "test2",
      price: 15,
      img: testImg,
      category: "Lamps",
    },
    product7: {
      name: "test2",
      price: 15,
      img: testImg,
      category: "Lamps",
    },
    product8: {
      name: "test2",
      price: 15,
      img: testImg,
      category: "Lamps",
    },
  };

  return (
    <div className={`${newClass}`}>
      {Object.keys(productList).map((key) => {
        const el = productList[key];

        return (
          <Link to="/" key={key} className="product">
            <img src={el.img} alt="product" />
            <p>{el.name}</p>
            <h3>${el.price}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default function Products() {
  return (
    <div id="products-screen">
      <div className="wrapper products-wrapper">
        <h2>Our best products</h2>
        {displayProducts()}
      </div>
    </div>
  );
}
