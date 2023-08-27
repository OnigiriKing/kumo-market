import { Link } from "react-router-dom";
import { allSvg } from "../../svg/allSvg";
import logo from "../../img/logo.png"
import { useLocation } from "react-router-dom";
import React from "react";
import { closeCart } from "../../scripts/changeClass";

export default function NavBar({ cartCount }) {
  const [link, setLink] = React.useState("1");

  const location = useLocation().pathname;

  React.useEffect(() => {
    if (location.includes("product/")) {
      setLink(location.split("/")[2]);
    } else {
      setLink(Math.floor(Math.random() * 12) + 1);
    }
  }, [location]);

  return (
    <nav id="nav-bar">
      <div className="wrapper nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} />
          <h1>{location.pathname}</h1>
        </Link>
        <div className="nav-links">
          <Link to="/categories/all">CATEGORIES</Link>
          <Link to={`/product/${link}`}>PRODUCT PAGE</Link>
          <div className="nav-basket" {...closeCart()}>
            {allSvg(30).basket} {cartCount !== 0 && <h3>{cartCount}</h3>}
          </div>
        </div>
      </div>
    </nav>
  );
}
