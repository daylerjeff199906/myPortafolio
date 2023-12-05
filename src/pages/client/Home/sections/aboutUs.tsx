import { Image, Button } from "@nextui-org/react";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";

export const AboutUsSection = () => {
  return (
    <>
      <div className="container py-6 max-w-7xl">
        <div className="block sm:flex items-center justify-center gap-4">
          <div className="flex flex-col items-center text-center">
            <Image
              alt="photo.jpg"
              src="https://avatars.githubusercontent.com/u/104048237?s=400&u=11d8eacb3fbb68e8deb6c88c790e2f44f797fb89&v=4"
              className="w-40 h-40 rounded-full"
            />
            <div className="flex gap- pt-4 items-center text-center">
              <IconBrandLinkedin size={30} />
              <IconBrandGithub size={30} />
              <IconBrandTwitter size={30} />
              <IconBrandInstagram size={30} />
            </div>
          </div>
          <div className="sm:max-w-lg space-y-3">
            <h3 className="text-4xl font-bold">!Hola soy Jeff¡</h3>
            <h3 className="text-lg">
              Soy un desarrollador web que le encanta crear aplicaciones web
              modernas y escalables.
            </h3>
            <div className="flex gap-4">
              <Button color="success" className="text-white font-bold">
                Descargar CV
              </Button>
              <Button color="success" variant="bordered" className="font-bold">
                Ver Proyectos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
