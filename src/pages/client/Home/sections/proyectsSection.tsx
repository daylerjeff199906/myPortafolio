import { Button, ButtonGroup } from "@nextui-org/react";
import { CardProject } from "../../../../components";

export const ProyectsSection = () => {
  return (
    <>
      <div className="container py-6 max-w-7xl pb-12">
        <div className="block sm:flex item-center justify-between pb-6">
          <h1 className="text-3xl font-bold">Recent projects </h1>
          <div className="flex items-center gap-3">
            <h1 className="text-slate-800 font-medium">Filter by:</h1>
            <ButtonGroup size="sm">
              <Button>All</Button>
              <Button>Development</Button>
              <Button>Desing</Button>
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
          <CardProject />
          <CardProject />
        </div>
      </div>
    </>
  );
};
