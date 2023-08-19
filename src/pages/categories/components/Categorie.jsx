import { displayProducts } from "../../../scripts/displayProudcts";
import { Link } from "react-router-dom";


export default function Categorie({type = undefined}) {
  return <>{displayProducts(type)}</>;
}
