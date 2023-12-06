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
      url_link:
        "https://linkedin.com/in/josé-jefferson-santos-panaifo-3668a7246",
    },
    {
      name: "github",
      icon: <IconBrandGithub size={30} />,
      url_link: "https://gist.github.com/daylerjeff199906",
    },
    {
      name: "twitter",
      icon: <IconBrandTwitter size={30} />,
      url_link: "https://twitter.com/pananifo	",
    },
    {
      name: "instagram",
      icon: <IconBrandInstagram size={30} />,
      url_link: "https://www.instagram.com/daylerjeff/",
    },
  ];

  const datePeson = [
    {
      name: "Name",
      value: dataProfile?.name + " " + dataProfile?.last_name,
    },
    {
      name: "Email",
      value: dataProfile?.correo,
    },
    {
      name: "Date of birth",
      value: dataProfile?.date_birth,
    },
    {
      name: "Phone",
      value: dataProfile?.phone,
    },
    {
      name: "Address",
      value: dataProfile?.address,
    },
  ];

  return (
    <div id="about-me">
      <div className="container py-6 dark:text-white">
        <div className="block sm:flex items-center justify-center gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <Image
                alt="photo.jpg"
                src={dataProfile?.url_image}
                className="w-48 h-48 rounded-full"
              />
            </div>
            <div className="flex gap-2 pt-4 items-center text-center">
              {socialMedia?.map((item, index) => (
                <Link
                  key={index}
                  // to={dataProfile?.social_medias[index]?.url_link}
                  to={item.url_link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-600"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <Button color="success" className="text-white font-bold">
                Descargar CV
              </Button>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-4xl font-bold dark:text-white">About me </h3>
            <h3 className="dark:text-white">{dataProfile?.biography}</h3>
            <div className="block sm:grid grid-cols-2">
              {datePeson.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <h3 className="text-slate-800 font-bold dark:text-white">
                    {item.name} :
                  </h3>
                  <h3 className="text-slate-800 dark:text-white">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
