import { useTranslation } from "react-i18next";



export default function NewsLetter() {

      const { t, i18n } = useTranslation();

   return (
     <div className="newsletter-screen">
       <h1>{t("NEWSLETTER")}</h1>
       <div>
         <input placeholder="Your@email.com"></input>
         <button>{t("SUBSCRIBE")}</button>
       </div>
     </div>
   );
}