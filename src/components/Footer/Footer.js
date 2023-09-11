import FooterNav from "/src/components/Footer/Footer.Nav/FooterNav.js";
import NewsLetter from "/src/components/Footer/Footer.Nav/FooterNav.js";

export default function Footer() {
  return (
    <footer id="footer-page">
      <div className="footer-wrapper">
        <NewsLetter />
        <FooterNav />
      </div>
    </footer>
  );
}
