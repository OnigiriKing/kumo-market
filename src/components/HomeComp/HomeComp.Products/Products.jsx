import { DisplayProducts } from "common/utils/DisplayProudcts";

export default function Products() {
  return (
    <div id="products-screen">
      <div className="wrapper products-wrapper">
        <h2>Our best products</h2>
        <DisplayProducts limit={8} shuffle={true} />
      </div>
    </div>
  );
}
