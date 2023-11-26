import { DisplayProducts } from "../../../common/utils/DisplayProudcts";
import { allSvg } from "../../../svg/allSvg";
import scroll from "./Trending.scroll";
import { useTranslation } from "react-i18next";

export default function Trending() {
   const { t } = useTranslation();
  return (
    <div id="trending-screen">
      <div className="wrapper trending-wrapper">
        <div className="trending-nav">
          <h2>{t("POPULARPICKS")}</h2>
          <div className="trending-btns">
            <button onClick={() => scroll("left")}>
              {allSvg(20).arrowSides}
            </button>
            <button onClick={() => scroll("right")}>
              {allSvg(20).arrowSides}
            </button>
          </div>
        </div>
        <DisplayProducts newClass="trending-items" />
      </div>
    </div>
  );
}
