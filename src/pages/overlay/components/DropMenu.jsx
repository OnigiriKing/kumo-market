import { Link } from "react-router-dom";
import { allSvg } from "../../../svg/allSvg";
import {closeMenu} from "../../../scripts/changeClass"

export default function DropMenu() {


  return (
    <div className="drop-menu">
      <div className="menu-close-button" {...closeMenu()}>
        {allSvg(40).closeBtn}
      </div>
      <Link></Link>
    </div>
  );
}
