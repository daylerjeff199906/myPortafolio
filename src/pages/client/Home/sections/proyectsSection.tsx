import { Button, ButtonGroup } from "@nextui-org/react";
import { CardProject } from "../../../../components";
import { usePagination } from "../../../../hooks/client/usePagination";
import { UseLogicData } from "../../../../provider/client/dataProvider";

const optionsFilters = [
  { id: 1, name: "All", value: "" },
  { id: 2, name: "Development", value: "development" },
  { id: 3, name: "Desing", value: "desing" },
];

export const ProyectsSection = () => {
  const { updateUrl } = usePagination();
  const { dataProjects, dataDefault } = UseLogicData();
  return (
    <>
      <div className="container py-6 pb-12">
        <div className="block sm:flex item-center justify-between pb-6">
          <h1 className="text-2xl font-bold dark:text-white">
            Recent projects
          </h1>
          <div className="flex items-center gap-3">
            <h1 className="text-slate-800 font-medium">Filter by:</h1>
            <ButtonGroup size="sm">
              {optionsFilters.map((item) => (
                <Button
                  key={item.id}
                  onClick={() =>
                    updateUrl({ name: "categories", value: item.value })
                  }
                  color="success"
                  className={
                    dataDefault.categories === item.value ? "text-white" : ""
                  }
                  variant={
                    dataDefault.categories === item.value ? "solid" : "bordered"
                  }
                >
                  {item.name}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {dataProjects?.map((item, index) => (
            <CardProject
              key={index}
              project={{
                id: item.id,
                title: item.name,
                tag: item.category,
                image: item.url_image,
                url: item.url_link,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
