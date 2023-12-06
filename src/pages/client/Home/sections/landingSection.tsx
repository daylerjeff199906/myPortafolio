// import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { IconDeviceLaptop } from "@tabler/icons-react";

export const LandingSection = () => {
//   const [typedText, setTypedText] = useState("");
//   const targetText = "I'm a Developer and Designer";

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container h-screen ">
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
            <Button
              //
              onClick={handleScrollToProjects}
            >
              View my works
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
