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
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Locations</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Careers</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
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
