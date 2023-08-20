import { Link } from "react-router-dom";
import { allSvg } from "../../svg/allSvg";
import { changeClass } from "../../scripts/changeClass";
import logo from "../../img/logo.png"

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <div className="wrapper nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} />
        </Link>
        <div className="nav-links">
          <Link to="/categories/all">CATEGORIES</Link>
          <Link>PRODUCT PAGE</Link>
          <div className="nav-basket">{allSvg(30).basket}</div>
        </div>
      </div>
    </nav>
  );
}
