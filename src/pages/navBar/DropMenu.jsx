import { Link } from "react-router-dom";
import { navSvg } from "../../svg/navSvg";
import { changeClass } from "../../scripts/changeClass";

export default function DropMenu() {
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
        {navSvg(40).closeBtn}
      </div>
      <Link></Link>
    </div>
  );
}
