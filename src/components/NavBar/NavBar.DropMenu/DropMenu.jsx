import { Link } from "react-router-dom";
import { allSvg } from "svg/allSvg";
import { handleMenuClick } from "common/utils/changeClass";
import { useSelector } from "react-redux";


export default function DropMenu() {
  const link = useSelector((state) => state.link);
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
