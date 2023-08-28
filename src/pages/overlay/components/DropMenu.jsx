import { Link } from "react-router-dom";
import { allSvg } from "../../../svg/allSvg";
import {closeMenu} from "../../../scripts/changeClass"

export default function DropMenu({link}) {


  return (
    <div className="drop-menu">
      <div className="menu-close-button" {...closeMenu()}>
        {allSvg(40).closeBtn}
      </div>
      <Link to="/" {...closeMenu()}>
        HOME
      </Link>
      <Link to="/categories/all" {...closeMenu()}>
        CATEGORIES
      </Link>
      <Link to={`/product/${link}`} {...closeMenu()}>
        PRODUCT PAGE
      </Link>
    </div>
  );
}
