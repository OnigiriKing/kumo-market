import { displayProducts } from "../../../scripts/displayProudcts";


export default function Category({ type = undefined }) {
  return <div>{displayProducts(type)}</div>;
}
