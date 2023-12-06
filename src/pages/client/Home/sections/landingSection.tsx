// import { useState, useEffect } from "react";
import { Button, Divider } from "@nextui-org/react";
import {
  IconDeviceLaptop,
  IconBrandFacebook,
  IconBrandPinterest,
  IconBrandGithub,
  IconBrandFigma,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const socialMedia = [
  {
    icon: <IconBrandGithub size={30} />,
    url_link: "https://gist.github.com/daylerjeff199906",
  },
  {
    icon: <IconBrandFacebook size={30} />,
    url_link: "https://www.facebook.com/daylerjeff",
  },
  {
    icon: <IconBrandPinterest size={30} />,
    url_link: "https://www.pinterest.es/daylerjeff/",
  },
  {
    icon: <IconBrandFigma size={30} />,
    url_link: "https://www.figma.com/@daylerjeff",
  },
];

export const LandingSection = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container h-screen " id="#">
        <div className="block h-full sm:flex items-center pt-12 md:pt-4">
          <div className="p-0 sm:p-10 dark:text-white">
            <IconDeviceLaptop size={280} stroke={0.5} />
          </div>
          <div className="space-y-4">
            <h3 className="text-5xl  lg:text-7xl font-bold dark:text-white">
              Hi, I'm <span className="text-primary-500">Jefferson Santos</span>
            </h3>
            <h3 className="text-2xl lg:text-4xl  dark:text-white">
              I'm a Developer and Designer
            </h3>
            <Button onClick={handleScrollToProjects}>View my works</Button>
          </div>
        </div>
        <div className="block sm:flex">
          <h3 className="dark:text-white">Follow me on</h3>
          <Divider />
          {
            <div className="flex items-center gap-3">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  to={item.url_link}
                  target="_blank"
                  className="dark:text-white"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          }
        </div>
      </div>
    </>
  );
};
