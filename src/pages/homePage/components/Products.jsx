import { displayProducts } from "../../../scripts/displayProudcts";

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
