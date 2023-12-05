import { DataProvider } from "../../../provider/client/dataProvider";
import { AboutUsSection } from "./sections/aboutUs";
import { ProyectsSection } from "./sections/proyectsSection";
import { SkillSection } from "./sections/skillSections";

export const IndexHome = () => {
  return (
    <>
      <DataProvider>
        <AboutUsSection />
        <SkillSection />
        <ProyectsSection />
      </DataProvider>
    </>
  );
};
