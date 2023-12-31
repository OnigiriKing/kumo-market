import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          CATEGORIES: "CATEGORIES",
          PRODUCTPAGE: "PRODUCT PAGE",
          ABOUT: "About",
          LOCATIONS: "Locations",
          NEWS: "News",
          CAREERS: "Careers",
          CONTACTUS: "Contact Us",
          NEWSLETTER: "Newsletter",
          SUBSCRIBE: "Subscribe",
          LIVING: "Creative harmonious living ",
          OURPRODUCTS:
            "Our Products are all made to standard sizes so that you can mix and match them freely.",
          SHOPNOW: "Shop now",
          COZYSTYLE: "Cozy & Elegant Lifestyle",
          OURBEST: "Our best products",
          LIVEINCOMFORT: "Live in comfort",
          ALL: "ALL",
          SKINCARE: "Skin Care",
          KITCHEN: "Kitchen",
          CHAIRS: "Chairs",
          FURNITURE: "Furniture",
          POPULARPICKS: "Popilar Picks",
          HOME: "Home",
          YOURCART: "Your Shopping Cart",
          CARTEMPTY: "Your cart is empty",
          BROWSING: "Keep Browsing",
          NOITEMS: "You have no items",
          SUBTOTAL: "Subtotal",
          CHECKOUT: "Checkout",
          QUANTITY: "Quantity",
          ADDCART: "Add to cart",
          BUYNOW: "Buy now",
        },
      },
      jp: {
        translation: {
          CATEGORIES: "カテゴリー",
          PRODUCTPAGE: "製品ページ",
          ABOUT: "について",
          LOCATIONS: "所在地",
          NEWS: "ニュース",
          CAREERS: "キャリア",
          CONTACTUS: "お問い合わせ",
          NEWSLETTER: "ニュースレター",
          SUBSCRIBE: "購読する",
          LIVING: "創造的で調和のとれた暮らし",
          OURPRODUCTS:
            "当社の製品はすべて標準サイズで作られており、自由に組み合わせて使うことができます。",
          SHOPNOW: "ショッピング",
          COZYSTYLE: "居心地の良い＆エレガントなライフスタイル",
          OURBEST: "当社のベスト製品",
          LIVEINCOMFORT: "快適に生きる",
          SKINCARE: "スキンケア",
          KITCHEN: "キッチン",
          CHAIRS: "椅子",
          FURNITURE: "家具",
          POPULARPICKS: "人気の選りすぐり",
          HOME: "ホーム",
          ALL: "全",
          YOURCART: "ショッピングカート",
          CARTEMPTY: "カートは空です",
          BROWSING: "ブラウジングを続ける",
          NOITEMS: "アイテムがありません",
          SUBTOTAL: "小計",
          CHECKOUT: "チェックアウト",
          QUANTITY: "数量",
          ADDCART: "カートに追加",
          BUYNOW: "今すぐ購入",
        },
      },
    },
  });

export default i18n;
