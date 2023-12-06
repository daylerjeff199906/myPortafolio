import { DataProvider } from "../../../provider/client/dataProvider";
import { AboutUsSection } from "./sections/aboutUs";
import { LandingSection } from "./sections/landingSection";
import { ProyectsSection } from "./sections/proyectsSection";
import { SkillSection } from "./sections/skillSections";

export const IndexHome = () => {
  return (
    <div className="dark:bg-slate-900">
      <DataProvider>
        <LandingSection />
        <AboutUsSection />
        <SkillSection />
        <ProyectsSection />
      </DataProvider>
    </div>
  );
};
