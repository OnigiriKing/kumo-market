import { Link } from "react-router-dom";
import { allSvg } from "../../svg/allSvg";
import { changeClass } from "../../scripts/changeClass";

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <div className="nav-wrapper">
        <Link to="/" className="nav-logo">
          Logo
        </Link>
        <div className="nav-links">
          <Link to="/categories/all">CATEGORIES</Link>
          <Link>PRODUCT PAGE</Link>
          <div className="nav-basket">Basket</div>
        </div>
      </div>
    </nav>
  );
}
