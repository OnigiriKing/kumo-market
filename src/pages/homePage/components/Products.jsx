import { DisplayProducts } from "../../../scripts/DisplayProudcts";

export default function Products() {
  return (
    <div id="products-screen">
      <div className="wrapper products-wrapper">
        <h2>Our best products</h2>
        <DisplayProducts number={8} />
      </div>
    </div>
  );
}
