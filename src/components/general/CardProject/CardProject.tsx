import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface projectInfo {
  id: number;
  title: string;
  image: string;
  url: string;
  tag: string;
}

export function CardProject({ project }: { project: projectInfo }) {
  return (
    <>
      <Card isFooterBlurred className="w-full h-[300px] " isBlurred>
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny  uppercase font-bold">
            {project?.tag || "Desing"}
          </p>
          <h4 className=" text-xl font-bold">
            {project?.title || "Breathing App"}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://img.freepik.com/psd-gratis/concepto-paginas-aterrizaje-veterinarias_23-2148451973.jpg?w=1380&t=st=1701782271~exp=1701782871~hmac=074901bc5334a42e1827c9bb5d5fb070cc283de064bff3c2446254fd17d8c7de"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <IconBrandGithubFilled />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <Link to={`${project?.url || "#"}`}>
            <Button radius="full" size="sm">
              Ver proyecto
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
