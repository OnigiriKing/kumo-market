import { useTranslation } from "react-i18next";
import { allSvg } from "svg/allSvg";

export default function FooterNav() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="footer-nav-screen">
      <ul>
        <li>
          <a href="/">{t("ABOUT")}</a>
        </li>
        <li>
          <a href="/">{t("LOCATIONS")}</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <a href="/">{t("NEWS")}</a>
        </li>
        <li>
          <a href="/">{t("CAREERS")}</a>
        </li>
        <li>
          <a href="/">{t("CONTACTUS")}</a>
        </li>
      </ul>
      <div className="language-change">
        <div onClick={() => switchLanguage("en")}>{allSvg(25).en}</div>
        <div onClick={() => switchLanguage("jp")}>{allSvg(25).jp}</div>
      </div>
      <div>All rights reserved</div>
    </div>
  );
}
