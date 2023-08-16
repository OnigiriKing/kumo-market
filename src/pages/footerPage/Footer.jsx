import NewsLetter from "./components/NewsLetter";
import FooterNav from "./components/FooterNav";

export default function FooterPage() {
  return (
    <footer id="footer-page">
      <div className="footer-wrapper">
      <NewsLetter />
      <FooterNav />
      </div>
    </footer>
  );
}
