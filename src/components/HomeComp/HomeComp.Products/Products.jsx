import { DisplayProducts } from "common/utils/DisplayProudcts";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();

  return (
    <div id="products-screen">
      <div className="wrapper products-wrapper">
        <h2>{t("OURBEST")}</h2>
        <DisplayProducts limit={8} shuffle={true} />
      </div>
    </div>
  );
}
