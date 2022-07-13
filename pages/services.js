import EstimateDark from "../components/aboutus/Estimate_dark";
import OurServices from "../components/services/services";
import Servicevariety from "../components/services/variety";
import BreadcrumbService from "../components/services_breadcrumb";

export default function Services() {
  return (
    <div>
      <BreadcrumbService />
      <OurServices />
      <Servicevariety />
      <EstimateDark />
    </div>
  );
}
