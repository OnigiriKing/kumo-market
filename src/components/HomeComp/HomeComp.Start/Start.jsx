import { Link } from "react-router-dom";
import room from "img/homePage/room.png"
import kitchen from "img/homePage/kitchen.png"
import skinCare from "img/homePage/skinCare.png"
import chairs from "img/homePage/chairs.png"
import { useTranslation } from "react-i18next";

export default function Start({cat, setCat}) {

      const { t } = useTranslation();

  return (
    <div id="start-screen">
      <div className="start-wrapper">
        <div className="start-products wrapper">
          <div>
            <Link to="categories/all" onClick={() => setCat("all")}>
              <div className="start-img-cover"></div>
              <img src={room} alt="room" />
              <p>{t("LIVEINCOMFORT")}</p>
            </Link>
          </div>

          <div>
            <Link to="categories/skin-care" onClick={() => setCat("skin care")}>
              <div className="start-img-cover"></div>
              <img src={skinCare} alt="skinCare" />
              <p>{t("SKINCARE")}</p>
            </Link>
          </div>
          <div>
            <Link to="categories/kitchen" onClick={() => setCat("kitchen")}>
              <div className="start-img-cover"></div>
              <img src={kitchen} alt="kitchen" />
              <p>{t("KITCHEN")}</p>
            </Link>
          </div>
          <div>
            <Link to="categories/chairs" onClick={() => setCat("chairs")}>
              <div className="start-img-cover"></div>
              <img src={chairs} alt="chairs" />
              <p>{t("CHAIRS")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}