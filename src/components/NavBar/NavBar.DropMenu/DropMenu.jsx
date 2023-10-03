import { Link } from "react-router-dom";
import { allSvg } from "svg/allSvg";
import { handleMenuClick } from "common/utils/changeClass";


export default function DropMenu({ link }) {
  return (
    <div className="drop-menu">
      <div className="menu-close-button" onClick={() => handleMenuClick()}>
        {allSvg(40).closeBtn}
      </div>
      <Link to="/" onClick={() => handleMenuClick()}>
        HOME
      </Link>
      <Link to="/categories/all" onClick={() => handleMenuClick()}>
        CATEGORIES
      </Link>
      <Link to={`/product/${link}`} onClick={() => handleMenuClick()}>
        PRODUCT PAGE
      </Link>
    </div>
  );
}
