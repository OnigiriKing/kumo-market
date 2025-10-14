import { Link } from "react-router-dom";
import banner1 from "img/homePage/banner1.webp";
import banner2 from "img/homePage/banner2.webp";
import { useTranslation } from "react-i18next";

export default function Banner({ reverse = false }) {
  const { t } = useTranslation();

  const content = !reverse ? (
    <div id="banner-screen">
      <div className="banner-wrapper wrapper">
        <div className="banner-text">
          <h2> {t("LIVING")}</h2>
          <p>{t("OURPRODUCTS")}</p>
          <Link to={"/"}>
            <button>{t("SHOPNOW")}</button>
          </Link>
        </div>
        <img
          src={banner1}
          className="banner-image"
          alt="banner"
          loading="lazy"
        />
      </div>
    </div>
  ) : (
    <div id="banner-screen">
      <div className=" wrapper banner-wrapper banner-reverse">
        <div className="banner-text">
          <h2>{t("COZYSTYLE")}</h2>
          <p>{t("OURPRODUCTS")}</p>
          <Link to={"/"}>
            <button>{t("SHOPNOW")}</button>
          </Link>
        </div>
        <img
          src={banner2}
          className="banner-image"
          alt="banner"
          loading="lazy"
        />
      </div>
    </div>
  );
  return content;
}
