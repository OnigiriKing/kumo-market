import { Link } from "react-router-dom";
import room from "img/homePage/room.png";
import kitchen from "img/homePage/kitchen.png";
import skinCare from "img/homePage/skinCare.png";
import chairs from "img/homePage/chairs.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setCategory } from "features/reducers/categorySlice";

export default function Start() {
  // state
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <div id="start-screen">
      <div className="start-wrapper">
        <div className="start-products wrapper">
          <div>
            <Link
              to="categories/all"
              onClick={() => dispatch(setCategory({ category: "all" }))}
            >
              <div className="start-img-cover"></div>
              <img src={room} alt="room" loading="lazy" />
              <p>{t("LIVEINCOMFORT")}</p>
            </Link>
          </div>

          <div>
            <Link
              to="categories/skin-care"
              onClick={() => dispatch(setCategory({ category: "skinCare" }))}
            >
              <div className="start-img-cover"></div>
              <img src={skinCare} alt="skinCare" loading="lazy" />
              <p>{t("SKINCARE")}</p>
            </Link>
          </div>
          <div>
            <Link
              to="categories/kitchen"
              onClick={() => dispatch(setCategory({ category: "kitchen" }))}
            >
              <div className="start-img-cover"></div>
              <img src={kitchen} alt="kitchen" loading="lazy" />
              <p>{t("KITCHEN")}</p>
            </Link>
          </div>
          <div>
            <Link
              to="categories/chairs"
              onClick={() => dispatch(setCategory({ category: "chairs" }))}
            >
              <div className="start-img-cover"></div>
              <img src={chairs} alt="chairs" loading="lazy" />
              <p>{t("CHAIRS")}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
