import { displayProducts } from "../../../scripts/displayProudcts";
import { Link } from "react-router-dom";


export default function Category({ type = undefined }) {
  return <div>{displayProducts(type)}</div>;
}
