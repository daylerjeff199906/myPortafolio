import { useEffect, useState } from "react";
import { Footer } from "../components";
import { NavBarCuston } from "../components";
import { Outlet } from "react-router-dom";
export const LayoutClient = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <div
        className={
          darkMode ? "dark:bg-slate-900 dark:text-white" : "bg-white text-black"
        }
      >
        <NavBarCuston />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
