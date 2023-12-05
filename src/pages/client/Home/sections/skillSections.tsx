import { CardSkill } from "../../../../components";
import { UseLogicData } from "../../../../provider/client/dataProvider";

export const SkillSection = () => {
  const { dataSkills } = UseLogicData();
  return (
    <>
      <div className="container py-6 mx-auto">
        <div className="pb-6">
          <h1 className="text-2xl font-bold">Skills </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
