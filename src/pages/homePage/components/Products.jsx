import { Link } from "react-router-dom";
import testImg from "../../../img/test.png";

export function displayProducts() {
  const productList = {
    product1: {
      name: "test",
      price: 45,
      img: testImg,
    },
    product2: {
      name: "test2",
      price: 60,
      img: testImg,
    },
  };

  return (
    <>
      {Object.keys(productList).map((key) => {
        const el = productList[key];
        console.log("ok");
        return (
          <Link to="/" key={key} className="product">
            <img src={el.img} alt="product" />
            <p>{el.name}</p>
            <h3>${el.price}</h3>
          </Link>
        );
      })}
    </>
  );
}

export default function Products() {
  return (
    <div id="products-screen">
      <div className="products-wrapper">
        <h2>Our best products</h2>
        <div>{displayProducts()}</div>
      </div>
    </div>
  );
}

<Link to="/" className="product">
  <img src={testImg} alt="product" />
  <p>Name</p>
  <h3>Price</h3>
</Link>;
