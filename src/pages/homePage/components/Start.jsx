import { Link } from "react-router-dom";
import room from "../../../img/room.png"
import kitchen from "../../../img/kitchen.png"
import skinCare from "../../../img/skinCare.png"
import chairs from "../../../img/chairs.png"

export default function Start({cat, setCat}) {
  return (
    <div id="start-screen">
      <div className="start-wrapper">
        <div className="start-products wrapper">
          <div>
            <Link to="categories/all" onClick={() => setCat("all")}>
              <div className="start-img-cover"></div>
              <img src={room} alt="room" />
              <p>Live in comfort</p>
            </Link>
          </div>

          <div>
            <Link to="categories/skin-care" onClick={() => setCat("skin care")}>
              <div className="start-img-cover"></div>
              <img src={skinCare} alt="skinCare" />
              <p>Skin Care</p>
            </Link>
          </div>
          <div>
            <Link to="categories/kitchen" onClick={() => setCat("kitchen")}>
              <div className="start-img-cover"></div>
              <img src={kitchen} alt="kitchen" />
              <p>Kitchen</p>
            </Link>
          </div>
          <div>
            <Link to="categories/chairs" onClick={() => setCat("chairs")}>
              <div className="start-img-cover"></div>
              <img src={chairs} alt="chairs" />
              <p>Chairs</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}