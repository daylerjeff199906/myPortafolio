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
import { BgSvg } from "./bg_svg";

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
      <div className="container dark:text-white">
        <div className="block sm:grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-6 ">
          <div className="relative w-full h-full  overflow-hidden py-8">
            <div className="absolute inset-0 z-10">
              <BgSvg />
            </div>
            <div className="relative flex flex-col items-center text-center z-20 w-full h-ful">
              <div className="relative w-56 h-56 rounded-full overflow-hidden">
                <Image
                  alt="photo.jpg"
                  src={dataProfile?.url_image}
                  className="w-56 h-56 rounded-full"
                />
              </div>
              <div className="flex gap-2 pt-4 items-center text-center">
                {socialMedia?.map((item, index) => (
                  <Link
                    key={index}
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
