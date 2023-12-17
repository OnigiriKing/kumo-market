import { Link } from "react-router-dom";
import { allSvg } from "svg/allSvg";
import logo from "img/navBar/logo.png";
import { useLocation } from "react-router-dom";
import React from "react";
import { handleCartClick, handleMenuClick } from "common/utils/changeClass";
import DropMenu from "./NavBar.DropMenu/DropMenu";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLink } from "features/reducers/linkSlice";
import { setCategory } from "features/reducers/categorySlice";

export default function NavBar() {



  const location = useLocation().pathname;

  // state
  const dispatch = useDispatch()
  const link = useSelector((state) => state.link)
  const cartCount = useSelector((store) => store.cartCount);

  React.useEffect(() => {
    dispatch(setLink({location: location}));
  }, [location, dispatch]);

// Translatiom 
  const { t } = useTranslation();

  return (
    <nav id="nav-bar">
      <div className="wrapper nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="logo" />
          <h1>{location.pathname}</h1>
        </Link>
        <div className="nav-links">
          <Link
            to="/categories/all"
            onClick={() => dispatch(setCategory({ category: "all" }))}
          >
            {t("CATEGORIES")}
          </Link>
          <Link to={`/product/${link}`}>{t("PRODUCTPAGE")}</Link>
          <div className="nav-basket" onClick={() => handleCartClick()}>
            {allSvg(30).basket} {cartCount !== 0 && <h3>{cartCount}</h3>}
          </div>
          <div className="nav-menu" onClick={() => handleMenuClick()}>
            {allSvg(30).menuBtn}
          </div>
        </div>
      </div>
      <DropMenu />
    </nav>
  );
}
