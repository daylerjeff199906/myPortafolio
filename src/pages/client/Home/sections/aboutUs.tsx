/* eslint-disable react-hooks/exhaustive-deps */
import { Image, Button } from "@nextui-org/react";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";

import { Link } from "react-router-dom";
import { UseLogicData } from "../../../../provider/client/dataProvider";

export const AboutUsSection = () => {
  const { dataProfile } = UseLogicData();

  const socialMedia = [
    {
      name: "linkedin",
      icon: <IconBrandLinkedin size={30} />,
      // url: dataProfile?.social_medias?.url_link[0],
    },
    {
      name: "github",
      icon: <IconBrandGithub size={30} />,
      // url: dataProfile?.social_medias?.url_link[1],
    },
    {
      name: "twitter",
      icon: <IconBrandTwitter size={30} />,
      // url: dataProfile?.social_medias?.url_link[2],
    },
    {
      name: "instagram",
      icon: <IconBrandInstagram size={30} />,
      // url: dataProfile?.social_medias?.url_link[3],
    },
  ];

  return (
    <>
      <div className="container py-6 max-w-7xl">
        <div className="block sm:flex items-center justify-center gap-6">
          <div className="flex flex-col items-center text-center">
            <Image
              alt="photo.jpg"
              src={dataProfile?.url_image}
              className="w-40 h-40 rounded-full"
            />
            <div className="flex gap-2 pt-4 items-center text-center">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  to={dataProfile?.social_medias?.url_link[index]}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-600"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:max-w-lg space-y-3">
            <h3 className="text-4xl font-bold">!Hola soy Jeff¡</h3>
            <h3 className="text-lg">{dataProfile?.description}</h3>
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
