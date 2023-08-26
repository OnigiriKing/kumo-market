import { Link } from "react-router-dom";
import { allSvg } from "../../../svg/allSvg";
import { changeClass } from "../../../scripts/changeClass";

export default function CartMenu() {
  function closeMenu() {
    return {
      onClick: function () {
        changeClass(".drop-menu", "menu-open");
      },
    };
  }

  return (
    <div className="drop-menu">
      <div className="menu-close-button" {...closeMenu()}>
        {allSvg(40).closeBtn}
      </div>
      <Link></Link>
    </div>
  );
}
