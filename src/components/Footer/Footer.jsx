import FooterNav from "./Footer.Nav/FooterNav";
import NewsLetter from "./Footer.NewsLetter/NewsLetter";

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
