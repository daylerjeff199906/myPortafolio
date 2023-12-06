import { CardSkill } from "../../../../components";
import { UseLogicData } from "../../../../provider/client/dataProvider";

export const SkillSection = () => {
  const { dataSkills } = UseLogicData();
  return (
    <>
      <div className="container py-12 mx-auto" id="services">
        <div className="pb-6">
          <h1 className="text-2xl font-bold dark:text-white">Services</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataSkills?.length > 0 &&
            dataSkills?.map((item, index) => (
              <CardSkill
                key={index}
                title={item.name}
                description={item.description}
                other={item?.languages}
                tools={item?.tools}
              />
            ))}
        </div>
      </div>
    </>
  );
};
