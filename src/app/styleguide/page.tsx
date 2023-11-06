import IntroductionStyleGuide from "./introduction";
import DesignStyleguide from "./design";
import PageTitle from "@/components/modules/PageTitle";
import ComponentsStyleGuide from "./components";
import Devider from "@element/Devider";
import Breadcrumb from "@/components/elements/Breadcrumb";

export default function Home() {
  return (
    <>
      <IntroductionStyleGuide />

      <DesignStyleguide />

      <ComponentsStyleGuide />
    </>
  );
}
