import TreeWorkLLC from "../components/homepage/tree_work_llc";
import Ourguarantee from "../components/homepage/ourguarantee";
import Years from "../components/homepage/Years";
import Estimatelight from "../components/homepage/Estimate_light";
import Servicesweprovide from "../components/homepage/servicesweprovide";
import WhyChooseTreeWorkLLC from "../components/homepage/whychoosetreeworkllc";
import MainBanner from "../components/homepage/main_banner";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <TreeWorkLLC />
      <Years />
      <Ourguarantee />
      <Estimatelight />
      <Servicesweprovide />
      <WhyChooseTreeWorkLLC />
    </div>
  );
}
