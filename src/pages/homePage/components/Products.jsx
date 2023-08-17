import { Link } from "react-router-dom";
import testImg from "../../../img/test.png";

export default function Products() {
  return (
    <div id="products-screen">
      <div className="products-wrapper">
        <h2>Our best products</h2>
        <div>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
          <Link to="/">
            <img src={testImg} alt="product" />
            <p>Name</p>
            <h3>Price</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
