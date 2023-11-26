import { Link } from "react-router-dom";
import { allSvg } from "svg/allSvg";
import logo from "img/navBar/logo.png";
import { useLocation } from "react-router-dom";
import React from "react";
import { handleCartClick, handleMenuClick } from "common/utils/changeClass";
import DropMenu from "./NavBar.DropMenu/DropMenu";

import { useTranslation } from "react-i18next";

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


  const { t } = useTranslation();





  return (
    <nav id="nav-bar">
      <div className="wrapper nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
          <h1>{location.pathname}</h1>
        </Link>
        <div className="nav-links">
          <Link to="/categories/all">{t("CATEGORIES")}</Link>
          <Link to={`/product/${link}`}>PRODUCT PAGE</Link>
          <div className="nav-basket" onClick={() => handleCartClick()}>
            {allSvg(30).basket} {cartCount !== 0 && <h3>{cartCount}</h3>}
          </div>
          <div className="nav-menu" onClick={() => handleMenuClick()}>
            {allSvg(30).menuBtn}
          </div>
        </div>
      </div>
      <DropMenu link={link} />
    </nav>
  );
}
