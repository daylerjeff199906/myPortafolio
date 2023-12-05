import { Button, ButtonGroup } from "@nextui-org/react";
import { CardProject } from "../../../../components";
import { usePagination } from "../../../../hooks/client/usePagination";

const optionsFilters = [
  { id: 1, name: "All" },
  { id: 2, name: "Development" },
  { id: 3, name: "Desing" },
];

export const ProyectsSection = () => {
  const { updateUrl } = usePagination();
  return (
    <>
      <div className="container py-6 max-w-7xl pb-12">
        <div className="block sm:flex item-center justify-between pb-6">
          <h1 className="text-2xl font-bold">Recent projects </h1>
          <div className="flex items-center gap-3">
            <h1 className="text-slate-800 font-medium">Filter by:</h1>
            <ButtonGroup size="sm">
              {optionsFilters.map((item) => (
                <Button
                  key={item.id}
                  onClick={() =>
                    updateUrl({ name: "filter", value: item.name })
                  }
                  color="success"
                  variant="bordered"
                >
                  {item.name}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          {/* <CardProject />
          <CardProject />
          <CardProject /> */}
        </div>
      </div>
    </>
  );
};
