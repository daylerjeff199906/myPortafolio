import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";
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
      <Card isFooterBlurred className="w-full h-[260px] " isBlurred>
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <Chip color="secondary">{project?.tag || "Desing"}</Chip>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={project?.image || "https://picsum.photos/seed/picsum/500/300"}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div>
              <IconBrandGithubFilled size={24} />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-white line-clamp-2">
                {project?.title || "Breathing App"}
              </p>
            </div>
          </div>
          <Link to={`${project?.url || "#"}`} target="_blank">
            <Button radius="full" size="sm">
              Ver proyecto
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
